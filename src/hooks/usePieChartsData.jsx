import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useAccountsPie = () => {
  const { user } = useAuth();
  const axiosPublic = useAxios();
  const { data: chartsData, isLoading } = useQuery({
    queryKey: "chartsData",
    queryFn: async () => {
      const res = await axiosPublic.get(`/chartData/${user?.email}`);
      return res.data;
    },
  });
  return [chartsData, isLoading];
};

export default useAccountsPie;
