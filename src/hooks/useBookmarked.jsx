import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../api/useAuth";

const useBookmarked = () => {
  const { user } = useAuth();
  const {
    data: bookmarked,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookmarkDataByUser"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/bookmark/${user?.email}`
      );
      return res.data;
    },
  });
  return { bookmarked, refetch, isLoading };
};

export default useBookmarked;
