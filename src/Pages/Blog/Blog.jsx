/* eslint-disable no-unused-vars */
import Loader from "../../Route/loader";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useGetBlogsQuery } from "../../features/blogSlice";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { count } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [BlogsPerPage, setBlogsPerPage] = useState(3);

  const axiosPublic = useAxios();
  const numberOfPage = Math.ceil(count / BlogsPerPage);
  const pages = [...Array(numberOfPage).keys()];



  // pagination 




  useEffect(() => {
    axiosPublic.get(`/blogs?page=${currentPage}&size=${BlogsPerPage}`)
      .then((data) => {
        setBlogs(data?.data);
        setIsLoading(false);
        console.log(data);

      });


  }, [BlogsPerPage, currentPage, axiosPublic]);




  const handleBlogsPerPage = e => {
    const val = parseInt(e.target.value);
    console.log(val);
    setBlogsPerPage(val);
    setCurrentPage(0);
  }




  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }
  console.log(pages);

  // const { data: blogs = [], isLoading } = useGetBlogsQuery(data);
  if (isLoading) return <Loader />;


  return (
    <div className="mt-10 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 max-w-7xl mx-auto px-2">
        {blogs?.map((Bloggs) => (
          <BlogCard key={Bloggs._id} Bloggs={Bloggs}></BlogCard>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <div>
          <button className="btn btn-sm" onClick={handlePrevPage} >prev</button>
          {
            pages?.map(page => <button
              className={`ml-5 btn btn-sm ${page === currentPage ? "btn-primary" : ""}`}
              onClick={() => setCurrentPage(page)}
              key={page}>{page}</button>)
          }
          <button className="btn btn-sm ml-5" onClick={handleNextPage} >Next</button>
          <select onChange={handleBlogsPerPage} className="ml-5 bg-primary btn-sm rounded-xl text-white" value={BlogsPerPage}>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Blog;
