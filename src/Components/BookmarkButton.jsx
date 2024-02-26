import PropTypes from "prop-types";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ isBookmarked }) => {
  return (
    <button className="transition-all duration-500">
      {isBookmarked ? (
        <FaBookmark className="text-2xl font-bold transition-all duration-300 hover:scale-105 text-emerald-600"></FaBookmark>
      ) : (
        <CiBookmarkPlus className="text-3xl font-bold transition-all duration-300 hover:scale-105 hover:text-emerald-600"></CiBookmarkPlus>
      )}
    </button>
  );
};

BookmarkButton.propTypes = {
  isBookmarked: PropTypes.bool,
};
export default BookmarkButton;
