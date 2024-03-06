import PropTypes from "prop-types";
import Comment from "./Comment";
import WriteComment from "./WriteComment";

const CommentSection = ({ comments, handlePostComment, id }) => {
  return (
    <div>
      <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-white px-2 ">
        — Comments
      </h2>
      <div className="w-full bg-emerald-600 flex flex-col-reverse md:flex-row pt-5 mt-5 rounded-t-lg">
        <div className="flex-1 p-5">
          {comments?.length ? (
            comments?.map((comment, idx) => (
              <Comment key={idx} id={id} comment={comment} />
            ))
          ) : (
            <p className="text-center font-bold mt-10 text-white">
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
  id: PropTypes.string,
};
export default CommentSection;
