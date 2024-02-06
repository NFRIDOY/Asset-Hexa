import PropTypes from "prop-types";

const Comment = ({ comment }) => {
  const { commenter, text, time } = comment;
  return (
    <div className="chat chat-start">
      <div className="chat-header">
        {commenter || "Obi-Wan Kenobi"}
        <time className="text-xs opacity-50">{time || "2 hours ago"}</time>
      </div>
      <div className="chat-bubble">{text || "You were the Chosen One!"}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};
export default Comment;
