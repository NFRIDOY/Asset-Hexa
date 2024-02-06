import PropTypes from "prop-types";
const WriteComment = ({ handlePostComment }) => {
  return (
    <form onSubmit={handlePostComment} className="flex flex-col gap-4">
      <textarea
        id="commentText"
        placeholder="Write a comment..."
        className="textarea textarea-bordered textarea-lg w-full max-w-xs"
      ></textarea>
      <button
        type="submit"
        className="text-xl w-32 h-16 bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
      >
        <span className="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
        <span className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
        Post
      </button>
    </form>
  );
};

WriteComment.propTypes = {
  handlePostComment: PropTypes.func,
};
export default WriteComment;
