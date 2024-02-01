
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";



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
        <div className=" bg-[#91F0AC]"> {/*  */}

            <div className="pt-10 pb-10">
                <div className=" md:ml-72  pt-16 pl-16 pr-16 pb-16 rounded-tl-badge rounded-br-badge bg-[#3EEE2A]  w-[450px]">
                    <form onSubmit={Blogs}>

                        <div className=" mb-2">
                            <label className="label">
                                <span className="label-text text-[#7D7D7D]"> Title </span>
                            </label>
                            <input name="title" type="text" placeholder="type " className="shadow-xl outline-none input input-bordered input-primary w-full" />
                        </div>
                        <div className="mb-2">
                            <label className="label">
                                <span className="label-text text-[#7D7D7D]">Description </span>
                            </label>
                            <textarea name="description" className="w-full shadow-xl textarea textarea-primary" placeholder="type"></textarea>
                        </div>
                        <div className=" mb-5">
                            <label className="label">
                                <span className="label-text text-[#7D7D7D]">image</span>
                            </label>
                            <input name="image" type="text" placeholder="image url" className="shadow-xl input input-bordered input-primary w-full" />
                        </div>
                        <div>
                            <button className=" btn w-full text-white bg-[#5791F4]">Add post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;