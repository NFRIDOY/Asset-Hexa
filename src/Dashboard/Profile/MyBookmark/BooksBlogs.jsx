import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BooksBlogs = ({ Bloggs }) => {





    //   console.log(Bloggs);

    return (
        <div>


            <div>
                <div className="px-4 py-4 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-4 mx-auto bg-white">
                <div className="w-full space-y-4">
                    <div className="">
                        <img
                            className="rounded-lg w-full h-64"
                            src={Bloggs?.image}
                            alt="image"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-14 h-14 rounded-full"
                                src={`${Bloggs?.authorImage
                                    ? Bloggs?.authorImage
                                    : "https://i.ibb.co/C2QsnzC/jae-park-7-GX5a-ICaawdb5i4-unsplash.jpg"
                                    }`}
                                alt={`image of ${Bloggs?.author}`}
                            />
                            <div>
                                <p className="font-bold">{Bloggs?.author}</p>
                                <p>{Bloggs?.date}</p>
                            </div>
                        </div>

                    </div>
                   

                   


                </div>

                <div className="  ml-10">
                        <Link to={`/blogDetails/${Bloggs?.blogID}`} >

                        <button className="hover:bg-[#00ff62] hover:scale-95 font-medium hover:text-black w-[80%] py-2 rounded-full hover:shadow-xl   text-black shadow-[0px_0px_10px_#E2DADA] t duration-500 ">View Details</button>
                        </Link>

                </div>
                    

                   
                </div>
            </div>


           



        </div>
    );
};

BooksBlogs.propTypes = {
    Bloggs: PropTypes.object,
};

export default BooksBlogs;


