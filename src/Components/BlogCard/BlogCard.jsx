import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookmarkButton from "../BookmarkButton";
import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useGetBookmarkedQuery } from "../../features/blogSlice";
import useAuth from "../../hooks/useAuth";

const BlogCard = ({ Bloggs }) => {
  const { user } = useAuth();
  const { data: bookmarked = [] } = useGetBookmarkedQuery(user?.email);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const didBookmarked = bookmarked?.find(
      (bookmked) => bookmked?.blogID === Bloggs?._id
    );
    if (didBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [bookmarked, Bloggs?._id]);
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
              <h1 className="font-bold text-xl lg:text-2xl text-left flex items-center h-16">
                {Bloggs?.title}
                {Bloggs.isVerified && (
                  <span>
                    <MdVerified className="ml-2 text-xl text-blue-500" />
                  </span>
                )}
              </h1>
              <p className="text-left md:h-24">
                {Bloggs?.description.slice(0, 150)}...
              </p>
            </div>
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
