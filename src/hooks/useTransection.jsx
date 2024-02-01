import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useTransection = (transactionType) => {
  const { user } = useAuth();
  const axiosPublic = useAxios();
  const {
    data: transections = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [`transections${transactionType}`],
    enabled: !!transactionType,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/transections?type=${transactionType}&email=${user?.email}`
      );
      return res.data;
    },
  });
  return { transections, refetch, isLoading };
};

export default useTransection;
