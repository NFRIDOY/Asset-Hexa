import { useParams } from "react-router";
import { SlDislike, SlLike } from "react-icons/sl";
import BookmarkButton from "../../Components/BookmarkButton";
import useAuth from "../../api/useAuth";
import axios from "axios";
import useBlog from "../../hooks/useBlog";
import { useEffect, useState } from "react";
import CommentSection from "../../Components/CommentSection";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
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
    const didLike = likes?.find((like) => like.personEmail === user?.email);
    const didDisliked = dislikes?.find(
      (dislike) => dislike.personEmail === user?.email
    );

    if (didLike) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
    if (didDisliked) {
      setIsDisliked(true);
    } else {
      setIsDisliked(false);
    }
  }, [likes, user?.email, dislikes]);

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
      axios
        .patch(`http://localhost:5000/blogs/${_id}?likeORdislike=like`, data)
        .then((res) => {
          refetch();
          console.log(res.data);
        });
    }
  };
  const handleDislike = () => {
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
    if (isDisliked) {
      return console.log("already disliked");
    } else {
      axios
        .patch(`http://localhost:5000/blogs/${_id}?likeORdislike=dislike`, data)
        .then((res) => {
          refetch();
          console.log(res.data);
        });
    }
  };
  const handleAddtoBookmark = () => {};
  const handlePostComment = (e) => {
    e.preventDefault();
    const text = e.target.commentText.value;
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
      text,
      commenter: user?.displayName,
      commenterEmail: user?.email,
      time: formattedDate,
    };
    axios
      .patch(`http://localhost:5000/blogs/${_id}?likeORdislike=comment`, data)
      .then((res) => {
        if (res.data?.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your comment has been posted!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          e.target.reset();
        }
      });
  };
  return (
    <div className="min-h-screen">
      <div className="mt-10 mb-20 font-medium max-w-7xl mx-auto space-y-5 px-1">
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
              <button
                className={`btn px-6 ${
                  isDisliked
                    ? "text-white bg-emerald-500 hover:text-white hover:bg-emerald-500"
                    : ""
                }`}
                onClick={handleDislike}
              >
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
      <div className="mt-20 max-w-7xl mx-auto">
        <CommentSection
          comments={comments}
          handlePostComment={handlePostComment}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
