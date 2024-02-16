import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";

import lotiBlog from "../lottie/AnimationBlog.json";
import Lottie from "lottie-react";
import useAuth from "../api/useAuth";
import { io } from "socket.io-client";

const AddBlog = () => {
  const { user } = useAuth();
  const axiosPublic = useAxios();
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
    // console.log(formattedDate);
    e.target.reset();

    axiosPublic.post("/blogs", blogData).then((res) => {
      //   console.log(res.data);
      if (res.data.insertedId) {

        console.log("connected to Socet io");
        const socket = io("https://asset-hexa-server-notification.glitch.me/" , {transports : ["websocket"]})
        socket.emit("new_blog_posted" , {message : `${user?.displayName} posted a blog : ${title}`})

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
    // <div className=" bg-[#91F0AC]"> {/*  */}

    <div className="flex justify-center">
      {" "}
      {/*  */}
      <h1></h1>
      <div className="pt-10 pb-10 lg:ml-72 lg:w-full flex justify-center relative ">
        <div className="lg:w-1/2 -z-100 absolute  -left-60">
          <Lottie
            className="mx-auto w-0 md:w-72 lg:w-full   "
            animationData={lotiBlog}
            loop={true}
          />
        </div>
        {/* <div className=" md:ml-72  pt-16 pl-16 pr-16 pb-16 rounded-tl-badge rounded-br-badge bg-[#3EEE2A]  w-[450px]"> */}
        <div className=" p-6 rounded-md bg-gradient-to-tr from-[#8dc487] to-[#b7f4b1f7] lg:transition-all lg:ease-in-out lg:duration-1000 lg:hover:translate-x-24 w-full md:w-[100%] lg:w-[80%] -z-0 lg:z-10">
          <form onSubmit={handleSubmitBlog}>
            <div className=" mb-2">
              <label className="label">
                <span className="label-text text-3xl font-bold text-[#000]">
                  {" "}
                  Title{" "}
                </span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="type "
                className="shadow-xl outline-none input input-bordered input-primary w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label className="label">
                <span className="label-text text-3xl font-bold text-[#000]">
                  Description{" "}
                </span>
              </label>
              <textarea
                name="description"
                className="w-full shadow-xl textarea textarea-primary"
                placeholder="type"
                required
              ></textarea>
            </div>
            <div className=" mb-5">
              <label className="label">
                <span className="label-text text-3xl font-bold text-[#000]">
                  Image
                </span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="image url"
                className="shadow-xl input input-bordered input-primary w-full"
                required
              />
            </div>
            <div className="w-full flex justify-end">
              <button className=" btn btn-primary w-32 text-white ">
                Add post
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
