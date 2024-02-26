import Loader from "../../Route/loader";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useGetBlogsQuery } from "../../features/blogSlice";

const Blog = () => {
  const { data: blogs = [], isLoading } = useGetBlogsQuery();

  if (isLoading) return <Loader />;

  return (
    <div className="mt-10 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 max-w-7xl mx-auto px-2">
        {blogs?.map((Bloggs) => (
          <BlogCard key={Bloggs._id} Bloggs={Bloggs}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
