import PropTypes from "prop-types";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteCommentMutation } from "../features/blogSlice";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Comment = ({ comment, id }) => {
  const [isShow, setIsShow] = useState(false);
  const { commenter, text, time, commentId, commenterEmail } = comment;
  const { user } = useAuth();
  const [deleteComment] = useDeleteCommentMutation();

  const handleDeleteComment = () => {
    const data = {
      id: id,
      commentID: commentId,
      email: user?.email,
    };
    if (!user?.email) {
      return toast.error("Please login to delete comment.");
    } else {
      deleteComment(data);
    }
  };
  return (
    <>
      <div className="chat chat-start text-white">
        <div className="chat-header">
          {commenter || ""}
          <time className="text-xs opacity-50 ml-1">{time || ""}</time>
        </div>
        <div className="chat-bubble bg-green-800  font-bold flex items-center gap-2  relative">
          <div className="">{text || ""}</div>
          {commenterEmail === user?.email ? (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn btn-xs flex justify-center ml-2"
            >
              <BsThreeDots />
            </button>
          ) : (
            <></>
          )}
          <button
            onClick={handleDeleteComment}
            className={`btn btn-xs text-xl absolute text-red-500 transition-all duration-500 ${
              isShow ? "-right-12 block" : "hidden"
            } `}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
  id: PropTypes.string,
};
export default Comment;
