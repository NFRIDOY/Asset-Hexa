import { useParams } from "react-router";
import { SlDislike, SlLike } from "react-icons/sl";
import BookmarkButton from "../../Components/BookmarkButton";
import useAuth from "../../api/useAuth";
import { useEffect, useState } from "react";
import CommentSection from "../../Components/CommentSection";
import toast from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";
import { MdVerified } from "react-icons/md";
import {
  useAddToBookmarkMutation,
  useCommentBlogMutation,
  useDislikeBlogMutation,
  useGetBlogQuery,
  useGetBookmarkedQuery,
  useLikeBlogMutation,
  useRemoveFromBookmarkMutation,
  useUnlikeOrUndislikeMutation,
  useUpdateVerificationMutation,
} from "../../features/blogSlice";

const BlogDetails = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const { data: blog = {} } = useGetBlogQuery(id);
  const [likeBlog] = useLikeBlogMutation();
  const [dislikeBlog] = useDislikeBlogMutation();
  const [commentBlog] = useCommentBlogMutation();
  const { data: bookmarked = [], refetch } = useGetBookmarkedQuery(user?.email);
  const [addToBookmark] = useAddToBookmarkMutation();
  const [removeFromBookmark] = useRemoveFromBookmarkMutation();
  const [updateVerification] = useUpdateVerificationMutation();
  const [unlikeOrUndislike] = useUnlikeOrUndislikeMutation();

  useEffect(() => {
    const didLike = blog?.likes?.find(
      (like) => like.personEmail === user?.email
    );
    const didDisliked = blog?.dislikes?.find(
      (dislike) => dislike.personEmail === user?.email
    );
    const didBookmarked = bookmarked?.find(
      (bookmked) => bookmked?.blogID === blog?._id
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
    if (didBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [blog?.likes, user?.email, blog?.dislikes, bookmarked, blog?._id]);

  // Event Handler for Like Functionality
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
    const likeData = {
      personEmail: user?.email,
      personName: user?.displayName,
      likedDate: formattedDate,
    };

    const data = {
      id: blog?._id,
      likeData,
    };
    const queryDataL = {
      id: blog?._id,
      email: user?.email,
      query: "like",
    };
    const queryDataD = {
      id: blog?._id,
      email: user?.email,
      query: "dislike",
    };
    // const isLiked = likes.find((like) => like.personEmail === user?.email);
    if (!user?.email) {
      return toast.error("Please login to like.");
    } else if (!isLiked && isDisliked) {
      unlikeOrUndislike(queryDataD);
      return likeBlog(data);
    } else if (isLiked) {
      return unlikeOrUndislike(queryDataL);
    } else {
      return likeBlog(data);
    }
  };

  // Event Handler for Dislike Functionality
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
    const dislikeData = {
      personEmail: user?.email,
      personName: user?.displayName,
      likedDate: formattedDate,
    };

    const data = {
      id: blog?._id,
      dislikeData,
    };

    const queryDataL = {
      id: blog?._id,
      email: user?.email,
      query: "like",
    };
    const queryDataD = {
      id: blog?._id,
      email: user?.email,
      query: "dislike",
    };
    // const isLiked = likes.find((like) => like.personEmail === user?.email);
    if (!user?.email) {
      return toast.error("Please login to dislike.");
    } else if (!isDisliked && isLiked) {
      unlikeOrUndislike(queryDataL);
      return dislikeBlog(data);
    } else if (isDisliked) {
      return unlikeOrUndislike(queryDataD);
    } else {
      return dislikeBlog(data);
    }
  };

  // Event Handler for Adding to bookmark Functionality
  const handleAddtoBookmark = () => {
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
    const bookmarkedBlogData = {
      blogID: blog?._id,
      blogTitle: blog?.title,
      author: blog?.author,
      image: blog?.image,
      description: blog?.description,
      user: user?.email,
      date: formattedDate,
    };
    if (!user?.email) {
      return toast.error("Please login to Bookmark-->");
    } else if (isBookmarked) {
      removeFromBookmark(id).then((res) => {
        if (res?.data?.deletedCount) {
          toast.success("Removed from bookmark.");
          refetch();
        }
      });
    } else {
      addToBookmark(bookmarkedBlogData).then((res) => {
        if (res.data?.insertedId) {
          toast.success("Added to bookmark!");
        }
      });
    }
  };

  // Event Handler for Comment Functionality
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
    const commentData = {
      commentId: blog?.comments?.length + 1,
      text,
      commenter: user?.displayName,
      commenterEmail: user?.email,
      time: formattedDate,
    };
    const data = {
      id: blog?._id,
      commentData,
    };
    if (!user?.email) {
      return toast.error("Please login to comment.");
    } else {
      commentBlog(data).then(() => {
        e.target.reset();
      });
    }
  };

  const handleVerification = () => {
    updateVerification(blog?._id)
      .then((res) => {
        if (res?.data?.modifiedCount >= 1) {
          toast.success(`${blog?.title} has been verified`);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen">
      <div className="mt-10 mb-20 font-medium max-w-7xl mx-auto space-y-5 px-1">
        <div className="flex items-center justify-between gap-2 ">
          <div className="flex items-center flex-wrap gap-3">
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src={
                blog?.authorImage ||
                "https://i.ibb.co/5L7LVhK/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
              }
              alt={`image of ${blog?.author}`}
            />
            <h3 className="font-bold md:text-2xl text-emerald-600 underline underline-offset-2">
              {blog?.author}
            </h3>
            <p className="text-2xl font-semibold hidden md:block">/</p>
            <p>{blog?.time}</p>
            <p className="text-2xl font-semibold hidden md:block">/</p>
            <p className="md:text-lg">
              Comments: {blog?.comments?.length || 0}
            </p>
          </div>
          <div onClick={handleAddtoBookmark}>
            <BookmarkButton isBookmarked={isBookmarked} />
          </div>
        </div>
        <div>
          <img
            className="md:h-[400px] lg:h-[600px] w-full mb-5 object-cover"
            src={blog?.image}
            alt={`image of ${blog?.title} blog`}
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
              <p>{blog?.likes?.length || 0} </p>
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
              <p>{blog?.dislikes?.length || 0}</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 break-words flex items-center lg:items-end">
            {blog?.title || ""}{" "}
            <span>
              {blog?.isVerified ? (
                <MdVerified className="ml-2 text-4xl text-blue-500" />
              ) : (
                <div>
                  {isAdmin && (
                    <button
                      onClick={handleVerification}
                      className="btn btn-sm ml-2 bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline  mt-2 rounded-md"
                    >
                      Verify?
                    </button>
                  )}
                </div>
              )}
            </span>
          </h1>
          <p className="text-lg font-normal text-justify">
            {blog?.description || ""}
          </p>
        </div>
      </div>
      <div className="mt-20 max-w-7xl mx-auto">
        <CommentSection
          comments={blog?.comments}
          id={blog._id}
          handlePostComment={handlePostComment}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
