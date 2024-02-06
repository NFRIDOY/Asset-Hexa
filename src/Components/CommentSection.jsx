import PropTypes from "prop-types";
import Comment from "./Comment";
import WriteComment from "./WriteComment";

const CommentSection = ({ comments, handlePostComment }) => {
  return (
    <div>
      <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-white px-2 ">
        — Comments
      </h2>
      <div className="w-full bg-emerald-300 flex flex-col-reverse md:flex-row pt-5 mt-5 rounded-t-lg">
        <div className="flex-1 p-5">
          {comments.length ? (
            comments?.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))
          ) : (
            <p className="text-center font-bold mt-10 text-gray-500">
              No one commented
            </p>
          )}
        </div>
        <div className="flex-1 p-5">
          <WriteComment handlePostComment={handlePostComment} />
        </div>
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.array,
  handlePostComment: PropTypes.func,
};
export default CommentSection;
