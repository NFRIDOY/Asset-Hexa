import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Loader from "../../../Route/loader";
import BlogCard from "../../../Components/BlogCard/BlogCard";
import BooksBlogs from "./BooksBlogs";
import axiosSecure from "../../../api";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useGetBookmarkedQuery } from "../../../features/blogSlice";
// import { useGetBookmarkedQuery } from "../../../features/blogSlice";

const BookmarkBlogs = () => {

  const { user } = useAuth();
  const { data: bookmarked = [], refetch } = useGetBookmarkedQuery(user?.email);
  console.log(bookmarked);


  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const axiosPublic = useAxios();
  // const axiousSecure = useAxiosSecure(); 
  // useEffect(() => {
  //   axiousSecure.get(`/bookmark/${user?.email}`)
  //     .then((data) => {
  //       setBlogs(data?.data);
  //       setIsLoading(false);


  //     });


  // }, [user,axiousSecure]);


  // console.log(blogs);
  // if (isLoading) return <Loader />;


  return (
    <div className="mt-2 mb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   max-w-7xl mx-auto px-2">
        {bookmarked?.map((Bloggs) => (
          <BooksBlogs key={Bloggs._id} Bloggs={Bloggs}></BooksBlogs>
        ))}
      </div>

    </div>
  );
};

export default BookmarkBlogs;