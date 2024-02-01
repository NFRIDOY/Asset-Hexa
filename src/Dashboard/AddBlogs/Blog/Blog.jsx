import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import BlogCard from "../BlogCard/BlogCard";
import Loader from "../../../Route/loader";


const Blog = () => {
    const [loading, setLoading] = useState(false);
    const [Blogg, SetBlogs] = useState([]);
    const axiosPublic = useAxios();
    useEffect(() => {
        setLoading(true)
        axiosPublic.get('/blogs')
            .then(data => {
                SetBlogs(data?.data)
                setLoading(false)
                console.log(data.data);
            })


    }, [axiosPublic])
    console.log(Blogg);

    if (loading) return <Loader />;

    return (

        <div>
            <h1 className='text-3xl font-bold text-black mt-5 mb-5 text-center '> Blogs </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto">
                {
                    Blogg?.map(Bloggs => <BlogCard key={Bloggs._id} Bloggs={Bloggs}></BlogCard>)
                }
            </div>

        </div>

    );
};

export default Blog;