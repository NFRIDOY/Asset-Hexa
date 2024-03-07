import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTransection = (transactionType) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: transections = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [`transections${transactionType}`],
    enabled: !!transactionType,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/transections?type=${transactionType}&email=${user?.email}`
      );
      return res?.data;
    },
  });
  return { transections, refetch, isLoading };
};

export default useTransection;
