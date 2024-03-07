import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAccountsPie = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: chartsData, isLoading } = useQuery({
    queryKey: ["chartsData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/chartData/${user?.email}`);
      return res.data;
    },
  });
  return [chartsData, isLoading];
};

export default useAccountsPie;
