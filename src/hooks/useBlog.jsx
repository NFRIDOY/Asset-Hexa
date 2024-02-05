import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBlog = (id) => {
  const { data: blog = [], refetch } = useQuery({
    queryKey: ["singleBlogData"],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/blogs/${id}`);
      return res.data;
    },
  });
  return { blog, refetch };
};

export default useBlog;
