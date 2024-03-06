import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://asset-hexa-server.vercel.app",
  baseURL: "http://localhost:5000",
<<<<<<< HEAD

=======
>>>>>>> bec97ce0f81298becfb38f2c0f5651b7adeeac4c
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
