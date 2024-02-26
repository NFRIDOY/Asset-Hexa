import PropTypes from "prop-types";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const Comment = ({ comment }) => {
  const [isShow, setIsShow] = useState(false);
  const { commenter, text, time } = comment;
  return (
    <>
      <div className="chat chat-start text-white">
        <div className="chat-header">
          {commenter || ""}
          <time className="text-xs opacity-50 ml-1">{time || ""}</time>
        </div>
        <div className="chat-bubble bg-green-800  font-bold flex items-center gap-2  relative">
          <div className="">{text || ""}</div>
          <button
            onClick={() => setIsShow(!isShow)}
            className="btn btn-xs flex justify-center ml-2"
          >
            <BsThreeDots />
          </button>
          <button
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
};
export default Comment;
