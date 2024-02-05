import { CiBookmarkPlus } from "react-icons/ci";

const BookmarkButton = () => {
  return (
    <button>
      <CiBookmarkPlus className="text-3xl font-bold transition-all duration-300 hover:scale-105 hover:text-emerald-600"></CiBookmarkPlus>
    </button>
  );
};

export default BookmarkButton;
