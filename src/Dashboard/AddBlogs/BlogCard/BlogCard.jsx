import { useState, useEffect } from 'react';

const BlogCard = ({ Bloggs }) => {
    const [likes, setLikes] = useState(parseInt(localStorage.getItem('likes')) || 0);
    const [dislikes, setDislikes] = useState(parseInt(localStorage.getItem('dislikes')) || 0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    useEffect(() => {
        localStorage.setItem('likes', likes);
        localStorage.setItem('dislikes', dislikes);
    }, [likes, dislikes]);

    return (
        <div className='mb-5'>

            

            <div className="h-[480px]">
                <div className="w-full md:w-96">
                    <div className="">
                        <img className="rounded-xl w-full md:w-96 h-72" src={Bloggs?.image} alt="" />
                    </div>
                    <div>

                        <h1 className="font-bold text-2xl text-left mt-2 mb-2"> {Bloggs?.title}</h1>
                        <p className="text-left ">{Bloggs?.description}</p>
                        <div className="flex justify-between mt-3  px-3">

                            <div className='flex items-center gap-x-2'>
                                <button className='btn btn-sm' onClick={handleLike}>Like</button>
                                <p>{likes} </p>
                            </div>

                            <div className='flex items-center gap-x-2'>
                                <button className='btn btn-sm' onClick={handleDislike}>Dislike</button>
                                <p>{dislikes}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;