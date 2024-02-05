import { useLoaderData, useParams } from "react-router";
import { SlDislike, SlLike } from "react-icons/sl";
import BookmarkButton from "../../Components/BookmarkButton";
import useAuth from "../../api/useAuth";
import axios from "axios";
import useBlog from "../../hooks/useBlog";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const [isLiked, setIsLiked] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  const { blog, refetch } = useBlog(id);

  const {
    _id,
    title,
    author,
    authorImage,
    authorEmail,
    description,
    image,
    likes,
    dislikes,
    comments,
    time,
  } = blog;

  useEffect(() => {
    const isLiked = likes?.find((like) => like.personEmail === user?.email);

    if (isLiked) {
      return setIsLiked(true);
    } else {
      return setIsLiked(false);
    }
  }, [likes, user?.email]);

  const handleLike = () => {
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
    const data = {
      personEmail: user?.email,
      personName: user?.displayName,
      likedDate: formattedDate,
    };

    // const isLiked = likes.find((like) => like.personEmail === user?.email);
    if (isLiked) {
      return console.log("already liked");
    } else {
      axios.patch(`http://localhost:5000/blogs/${_id}`, data).then((res) => {
        refetch();
        console.log(res.data);
      });
    }
  };
  const handleDislike = () => {};
  const handleAddtoBookmark = () => {};
  return (
    <div className="min-h-screen">
      {/* <h1 className="text-5xl font-bold text-center">
        Read Blogs HERE:{title}
      </h1> */}
      <div className="mt-10 font-medium max-w-7xl mx-auto space-y-5 px-1">
        <div className="flex items-center justify-between gap-2 ">
          <div className="flex items-center flex-wrap gap-3">
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src={
                authorImage ||
                "https://i.ibb.co/5L7LVhK/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
              }
              alt={`image of ${author}`}
            />
            <h3 className="font-bold md:text-2xl text-emerald-600 underline underline-offset-2">
              {author}
            </h3>
            <p className="text-2xl font-semibold hidden md:block">/</p>
            <p>{time}</p>
            <p className="text-2xl font-semibold hidden md:block">/</p>
            <p className="md:text-lg">Comments: {comments?.length || 0}</p>
          </div>
          <div>
            <BookmarkButton onClick={handleAddtoBookmark} />
          </div>
        </div>
        <div>
          <img
            className="h-[600px] w-full mb-5"
            src={image}
            alt={`image of ${title} blog`}
          />

          <div className="flex justify-center items-center gap-16">
            <div className="flex items-center gap-2">
              <button
                className={`btn px-6 ${
                  isLiked
                    ? "text-white bg-emerald-500 hover:text-white hover:bg-emerald-500"
                    : ""
                }`}
                onClick={handleLike}
              >
                <SlLike />
              </button>
              <p>{likes?.length || 0} </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn px-6" onClick={handleDislike}>
                <SlDislike />
              </button>
              <p>{dislikes?.length || 0}</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 break-words">
            {title || ""}
          </h1>
          <p className="text-lg font-normal">{description || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
