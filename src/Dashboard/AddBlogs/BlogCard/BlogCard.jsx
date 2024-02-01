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
                        <h1 className="font-bold text-2xl text-center mt-2 mb-2"> {Bloggs?.title}</h1>
                        <p className="pr-5 text-center pl-5">{Bloggs?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;