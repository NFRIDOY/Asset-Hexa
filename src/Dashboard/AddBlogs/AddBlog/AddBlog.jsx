
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

import lotiBlog from "../../../lottie/AnimationBlog.json";
import Lottie from "lottie-react";



const AddBlog = () => {


    const axiosPublic = useAxios();
    const Blogs = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const addBlogs = {
            title, description, image
        }
        console.log(addBlogs);
        e.target.reset();

        axiosPublic.post('/blogs', addBlogs)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    console.log('user balance added to the data base ');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "  Your has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        // <div className=" bg-[#91F0AC]"> {/*  */}

        <div className="flex justify-center"> {/*  */}

            <h1></h1>
            <div className="pt-10 pb-10 ml-72 lg:w-full flex justify-center relative">
                <div className="lg:w-1/2 -z-100 absolute -left-60">
                    <Lottie
                        className="mx-auto w-fit md:w-72 lg:w-full  "
                        animationData={lotiBlog}
                        loop={true}
                    />
                </div>
                {/* <div className=" md:ml-72  pt-16 pl-16 pr-16 pb-16 rounded-tl-badge rounded-br-badge bg-[#3EEE2A]  w-[450px]"> */}
                <div className=" p-6 rounded-md bg-gradient-to-tr from-[#8dc487] to-[#b7f4b1f7] transition-all duration-1000 hover:translate-x-12 w-[80%] z-10">
                    <form onSubmit={Blogs}>

                        <div className=" mb-2">
                            <label className="label">
                                <span className="label-text text-3xl font-bold text-[#000]"> Title </span>
                            </label>
                            <input name="title" type="text" placeholder="type " className="shadow-xl outline-none input input-bordered input-primary w-full" />
                        </div>
                        <div className="mb-2">
                            <label className="label">
                                <span className="label-text text-3xl font-bold text-[#000]">Description </span>
                            </label>
                            <textarea name="description" className="w-full shadow-xl textarea textarea-primary" placeholder="type"></textarea>
                        </div>
                        <div className=" mb-5">
                            <label className="label">
                                <span className="label-text text-3xl font-bold text-[#000]">Image</span>
                            </label>
                            <input name="image" type="text" placeholder="image url" className="shadow-xl input input-bordered input-primary w-full" />
                        </div>
                        <div className="w-full flex justify-end">
                            <button className=" btn btn-primary w-32 text-white ">Add post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;