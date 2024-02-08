import { useEffect, useState } from "react";
<<<<<<< HEAD:src/Dashboard/AddBlogs/Blog/Blog.jsx
import useAxios from "../../../hooks/useAxios";
import BlogCard from "../BlogCard/BlogCard";
// eslint-disable-next-line no-unused-vars
=======
import useAxios from "../../hooks/useAxios";
>>>>>>> 16ac648ce2dd478fea07fba3f0ad748e5a11e974:src/Pages/Blog/Blog.jsx
import axios from "axios";
import Loader from "../../Route/loader";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [Blogg, SetBlogs] = useState([]);
  const axiosPublic = useAxios();
  useEffect(() => {
    setLoading(true);
    // axios.get("http://localhost:5000/blogs").then((data) => {
    axiosPublic.get("/blogs").then((data) => {
      SetBlogs(data.data);
      setLoading(false);
      // console.log(data.data);
    });
  }, [axiosPublic]);
  // console.log(Blogg);

  if (loading) return <Loader />;

  return (
    <div className="mt-10 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 max-w-7xl mx-auto px-2">
        {Blogg?.map((Bloggs) => (
          <BlogCard key={Bloggs._id} Bloggs={Bloggs}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
