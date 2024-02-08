import { useQuery } from "@tanstack/react-query";
import useAuth from "../api/useAuth";
import useAxios from "./useAxios";

const useBookmarked = () => {
  const axiosPublic = useAxios();
  const { user } = useAuth();
  const {
    data: bookmarked,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookmarkDataByUser"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookmark/${user?.email}`);
      return res.data;
    },
  });
  return { bookmarked, refetch, isLoading };
};

export default useBookmarked;
