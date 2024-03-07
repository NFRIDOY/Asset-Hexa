import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/authSlice";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://asset-hexa-server.vercel.app",
  // baseURL: "http://localhost:5000",
  //http://localhost:5000
  //https://asset-hexa-server.vercel.app
});
const useAxiosSecure = () => {
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const { logOut } = useAuth();
  instance.interceptors.request.use(
    function (config) {
      // console.log("token in interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  // intercepts 401,404,403
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      // console.log("status error in intercerptors", error);
      const status = error.response?.status;
      if (status === 401 || status === 403 || status === 404) {
        await logOut().then(() => navigate("/login"));
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export default useAxiosSecure;
