/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import BussinessDefault from "../../assets/Banner/BussinessDefault.jpg"


const BusinessCard = ({ business }) => {
    // console.log(business);
    return (
        <div>
            <Link to={`/businessDetails/${business._id}`}>
                <div
                    className={`p-2 md:p-5 cursor-pointer border rounded-lg transition-all duration-500 hover:scale-105`}
                >
                    <div className="w-full space-y-4">
                        <div className="">
                            <img
                                className="rounded-lg w-full h-72"
                                src={business?.BannerImage || BussinessDefault}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-14 h-14 rounded-full"
                                    src={business?.BrandImage}
                                    alt=""
                                />
                                <div>
                                    <p className="font-bold">{business?.CompanyName}</p>

                                </div>
                            </div>

                        </div>
                        <div className="space-y-2">
                            {/* <h1 className="font-bold text-xl lg:text-2xl text-left">
                                
                            </h1> */}
                            {/* <p className="card-title text-success">
                                Range: {business?.Minimum} BDT -  {business?.Maximum} BDT &gt;&gt; Profit {business?.Profit} % Per Mounth
                            </p> */}
                            {/* <p className="text-left md:h-24">
                                {business?.CompanyDescription
                                    .slice(0, 150)}...
                            </p> */}
                        </div>

                    </div>
                </div>

            </Link>
        </div>
    );
};

export default BusinessCard;

