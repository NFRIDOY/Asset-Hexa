/* eslint-disable react/prop-types */


const BlogCard = ({ Bloggs }) => {
    console.log(Bloggs);
    return (
        <div>
            <div className="h-[480px]">
                <div className="w-full md:w-96">
                    <div className="">
                        <img className="rounded-xl w-full md:w-96 h-72" src={Bloggs?.image} alt="" />
                    </div>
                    <div>
                        <div>

                        </div>
                        <h1 className="font-bold text-2xl text-left mt-2 mb-2"> {Bloggs?.title}</h1>
                        <p className="text-left ">{Bloggs?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;