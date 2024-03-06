import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Loader from "../../../Route/loader";
import BlogCard from "../../../Components/BlogCard/BlogCard";
import BooksBlogs from "./BooksBlogs";

const BookmarkBlogs = () => {

    const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const axiosPublic = useAxios();

  useEffect(() => {
    axiosPublic.get(`/bookmark/${user?.email}`)
      .then((data) => {
        setBlogs(data?.data);
        setIsLoading(false);
        

      });


  }, [user, axiosPublic]);


console.log(blogs);
  if (isLoading) return <Loader />;


  return (
    <div className="mt-10 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 max-w-7xl mx-auto px-2">
        {blogs?.map((Bloggs) => (
          <BooksBlogs key={Bloggs._id} Bloggs={Bloggs}></BooksBlogs>
        ))}
      </div>
            
        </div>
    );
};

export default BookmarkBlogs;