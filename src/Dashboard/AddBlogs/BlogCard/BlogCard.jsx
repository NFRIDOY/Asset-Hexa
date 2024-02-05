// import { useState, useEffect } from "react";
import { CiBookmarkPlus } from "react-icons/ci";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ Bloggs }) => {
  //   const [likes, setLikes] = useState(
  //     parseInt(localStorage.getItem("likes")) || 0
  //   );
  //   const [dislikes, setDislikes] = useState(
  //     parseInt(localStorage.getItem("dislikes")) || 0
  //   );

  //   const handleLike = () => {
  //     setLikes(likes + 1);
  //   };

  //   const handleDislike = () => {
  //     setDislikes(dislikes + 1);
  //   };

  //   useEffect(() => {
  //     localStorage.setItem("likes", likes);
  //     localStorage.setItem("dislikes", dislikes);
  //   }, [likes, dislikes]);

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
                    Bloggs.authorImage
                      ? Bloggs?.authorImage
                      : "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                  }`}
                  alt=""
                />
                <div>
                  <p className="font-bold">{Bloggs?.author}</p>
                  <p>{Bloggs?.time}</p>
                </div>
              </div>
              <div>
                <button>
                  <CiBookmarkPlus className="text-3xl font-bold"></CiBookmarkPlus>
                </button>
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
