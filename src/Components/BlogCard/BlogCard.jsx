import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookmarkButton from "../BookmarkButton";
import useBookmarked from "../../hooks/useBookmarked";
import { useEffect, useState } from "react";

const BlogCard = ({ Bloggs }) => {
  // const { user } = useAuth();
  const { bookmarked } = useBookmarked();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Event Handler for Adding to bookmark Functionality
  // const handleAddtoBookmark = () => {
  //   const mongoDate = new Date();
  //   // Customize the date format
  //   const options = {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   };
  //   const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  //     mongoDate
  //   );
  //   const bookmarkedBlogData = {
  //     blogID: Bloggs?._id,
  //     author: Bloggs?.author,
  //     blogTitle: Bloggs?.title,
  //     user: user?.email,
  //     date: formattedDate,
  //   };

  //   // console.log(bookmarkedBlogData);
  //   axios
  //     .post("http://localhost:5000/bookmark", bookmarkedBlogData)
  //     .then((res) => {
  //       if (res.data?.insertedId) {
  //         // console.log(res.data);
  //         bookmarkRefetch();
  //         toast.success("Added to bookmark!");
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err.message);
  //     });
  // };

  useEffect(() => {
    const didBookmarked = bookmarked?.find(
      (bookmked) => bookmked.blogID === Bloggs._id
    );
    if (didBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [bookmarked, Bloggs._id]);
  return (
    <>
      <Link to={`/blogDetails/${Bloggs._id}`}>
        <div
          className={`p-2 md:p-5 cursor-pointer border transition-all duration-700 hover:scale-105`}
        >
          <div className="w-full space-y-4">
            <div className="">
              <img
                className="rounded-lg w-full h-72"
                src={Bloggs?.image}
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  className="w-14 h-14 rounded-full"
                  src={`${
                    Bloggs?.authorImage
                      ? Bloggs?.authorImage
                      : "https://i.ibb.co/C2QsnzC/jae-park-7-GX5a-ICaawdb5i4-unsplash.jpg"
                  }`}
                  alt={`image of ${Bloggs?.author}`}
                />
                <div>
                  <p className="font-bold">{Bloggs?.author}</p>
                  <p>{Bloggs?.time}</p>
                </div>
              </div>
              <div>
                <BookmarkButton isBookmarked={isBookmarked} />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-xl lg:text-2xl text-left">
                {Bloggs?.title}
              </h1>
              <p className="text-left md:h-24">
                {Bloggs?.description.slice(0, 150)}...
              </p>
            </div>
            {/* <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button className="btn btn-sm" onClick={handleLike}>
              <SlLike />
            </button>
            <p>{likes} </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn btn-sm" onClick={handleDislike}>
              <SlDislike />
            </button>
            <p>{dislikes}</p>
          </div>
        </div> */}
          </div>
        </div>
      </Link>
    </>
  );
};

BlogCard.propTypes = {
  Bloggs: PropTypes.object,
};

export default BlogCard;
