import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";

import lotiBlog from "../lottie/AnimationBlog.json";
import Lottie from "lottie-react";
import useAuth from "../api/useAuth";
import { io } from "socket.io-client";
import { usePostBlogMutation } from "../features/blogSlice";

const AddBlog = () => {
  const { user } = useAuth();
  const [postBlog] = usePostBlogMutation();

  const handleSubmitBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.value;

    const mongoDate = new Date();
    // Customize the date format
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      mongoDate
    );

    const blogData = {
      author: user?.displayName,
      authorEmail: user?.email,
      authorImage: user?.photoURL,
      title,
      description,
      image,
      likes: [],
      dislikes: [],
      comments: [],
      time: formattedDate,
      isVerified: false,
    };
    e.target.reset();

    const details = {
      message: ` posted a blog `,
      userName: user?.displayName,
      image: user?.photoURL,
    };

    postBlog(blogData).then((res) => {
      if (res.data?.insertedId) {
        const socket = io("https://asset-hexa-server-notification.glitch.me/", {
          transports: ["websocket"],
        });
        socket.emit("new_blog_posted", details);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Blog has been posted!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="flex justify-center">
      <div className="pt-10 pb-10 lg:ml-72 lg:w-full flex justify-center relative ">
        <div className="lg:w-1/2 -z-100 absolute  -left-60">
          <Lottie
            className="mx-auto w-0 md:w-72 lg:w-full   "
            animationData={lotiBlog}
            loop={true}
          />
        </div>

        <div className=" p-6 rounded-md bg-gradient-to-tr from-[#8dc487] to-[#b7f4b1f7] lg:transition-all lg:ease-in-out lg:duration-1000 lg:hover:translate-x-24 w-full md:w-[100%] lg:w-[80%] -z-0 lg:z-10">
          <form onSubmit={handleSubmitBlog}>
            <div className=" mb-2">
              <label className="label">
                <span className="label-text text-3xl font-bold text-white">
                  Title <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Enter blog title"
                className="shadow-xl input input-bordered input-primary w-full border-none outline-none"
                required
              />
            </div>
            <div className="mb-2">
              <label className="label">
                <span className="label-text text-3xl font-bold text-white">
                  Description <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <textarea
                name="description"
                className="w-full shadow-xl textarea textarea-primary border-none outline-none"
                placeholder="Enter blog description"
                required
              ></textarea>
            </div>
            <div className=" mb-5">
              <label className="label">
                <span className="label-text text-3xl font-bold text-white">
                  Image <span className="text-red-600 text-lg">*</span>
                </span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Enter image url"
                className="shadow-xl input input-bordered input-primary border-none outline-none w-full"
                required
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="relative inline-block h-16 w-40 overflow-hidden border-[#38d626] px-5 py-2 text-white font-bold text-lg shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#4cda3c] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#4cda3c] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
