import { useQuery } from "@tanstack/react-query";
// import useAxios from "./useAxios";
import useAuth from "./useAuth";
import axios from "axios";

const useAccountsPie = () => {
  const { user } = useAuth();
  // const axiosPublic = useAxios();
  const { data: accountsPieData, isLoading } = useQuery({
    queryKey: "AccountsPieData",
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/chartData/${user?.email}`
      );
      return res.data;
    },
  });
  return [accountsPieData, isLoading];
};

export default useAccountsPie;
