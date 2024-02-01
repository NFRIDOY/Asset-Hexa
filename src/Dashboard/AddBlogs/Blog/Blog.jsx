import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import BlogCard from "../BlogCard/BlogCard";


const Blog = () => {
    const [Blogg, SetBlogs] = useState([]);
    const axiosPublic = useAxios();
    useEffect(() => {
        axiosPublic.get('/blogs')
            .then(data => {
                SetBlogs(data?.data)
                console.log(data.data);
            })


    }, [axiosPublic])
    console.log(Blogg);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto">
            {
                Blogg?.map(Bloggs => <BlogCard key={Bloggs._id} Bloggs={Bloggs}></BlogCard>)
            }
        </div>
    );
};

export default Blog;