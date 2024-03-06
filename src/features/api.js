import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "./authSlice";
//http://localhost:5000
//https://asset-hexa-server.vercel.app
export const securedBaseQuery = fetchBaseQuery({
  baseUrl: "https://asset-hexa-server.vercel.app",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptiopns) => {
  let result = await securedBaseQuery(args, api, extraOptiopns);
  if (result?.error?.originalStatus === 404) {
    // console.log("send refresh token");
    //send refresh tpoken to get new access token
    const refreshResult = await securedBaseQuery(
      "/refresh",
      api,
      extraOptiopns
    );
    if (refreshResult?.data) {
      const user = api.getState()?.auth?.user;

      //store the new token
      api.dispatch(setCredentials({ ...refreshResult?.data, user }));

      //retry the original query with new access token
      result = await securedBaseQuery(args, api, extraOptiopns);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};
