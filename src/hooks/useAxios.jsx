import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://asset-hexa-server.vercel.app",
  // baseURL: "http://localhost:5000",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
