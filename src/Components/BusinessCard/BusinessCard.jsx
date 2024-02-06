import { Link } from "react-router-dom";


export default function BusinessCard({ business }) {

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-[20%] relative">
                    <img src={business?.BrandImage} className="object-cover w-40" alt="Album" />
                    {/* <img src={business?.BannerImage} className="object-cover w-40" alt="Album" /> */}

                    {/* <figure className=""> */}
                    {/* </figure> */}
                </figure>
                <div className="card-body lg:w-[70%]">

                    <h2 className="card-title"> {business?.CompanyName}</h2>
                    <h2 className="card-title"> {business?.CompanyEmail}</h2>


                    <h1 className="card-title">
                        Description <Link to={"/"} className="text-success font-normal text-sm bg-black py-1 px-3 rounded-full">View Details</Link>
                    </h1>
                    <p className="text-ellipsis overflow-auto h-36 ">
                        {business?.CompanyDescription}
                    </p>
                    <p className="card-title text-success">
                        Range: {business?.Minimum} BDT -  {business?.Maximum} BDT &gt;&gt; Profit {business?.Profit} % Per Mounth
                    </p>
                    <h2 className="card-title">Total Fund Raised : {business?.totalInvestment} BDT</h2>

                    <div className="mt-10">

                        <h2 className="card-title mb-4">Posted By</h2>
                        <div className=" flex gap-x-8 ">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                    <img src={business?.photoURL} className="" alt="Album" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title"> {business?.photoUrl}</h2>
                                <h2 className="card-title"> {business?.userName}</h2>
                                <h2 className="card-title"> {business?.Designation}</h2>
                                <h2 className="card-title"> {business?.userEmail}</h2>
                            </div>
                        </div>
                    </div>
                    <h2 className=""> {business?.time}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white ">Investment</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
