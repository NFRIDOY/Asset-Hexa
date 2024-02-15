import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://asset-hexa-server.vercel.app",
  }),
  tagTypes: "blogAPI",
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blogAPI"],
    }),
  }),
});
// invalidatesTags: ["BlogAPI"], for mutations {update,delete,create}
export const { useGetBlogsQuery } = blogApi;
