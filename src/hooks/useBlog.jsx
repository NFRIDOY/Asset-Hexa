import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useBlog = (id) => {
  const axiosPublic = useAxios();
  const { data: blog = {}, refetch } = useQuery({
    queryKey: ["singleBlogData"],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs/${id}`);
      return res.data;
    },
  });
  return { blog, refetch };
};
//http://localhost:5000
export default useBlog;
