
import { useParams } from "react-router-dom";
import useBusiness from "../../hooks/useBusiness";


const BusinessDetails = () => {
    const { id } = useParams();
    const { business, } = useBusiness(id);

    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className=" ">
                <div className="">
                    <img className="md:w-[1200px]  rounded-xl h-96 md:h-96 lg:h-[450px]" src={business?.BannerImage} alt="" />
                </div>
                <div className="md:flex md:justify-between  items-center gap-3">
                    <div className="flex items-center mt-3 pl-10 gap-2  ml-5">
                        <img
                            className="md:w-24 md:h-24 w-16 h-16 rounded-full"
                            src={business?.photoURL}
                            alt=""
                        />
                        <div>
                            <p className="font-bold text-xl md:text-2xl">{business?.userName}</p>
                            <p className="text-black">{business?.userEmail}</p>
                            <p>{business?.time}</p>
                        </div>
                    </div>
                    <div className="flex lg:pr-32 mt-5 ml-10 ">
                         <button className="btn bg-[#4FD28C]  ">Investment</button>
                        <input className="shadow-xl outline-none input input-bordered input-primary" type="text " name="" id="" />
                        
                    </div>
                     

                </div>
                
            </div>

            <div className="mt-5">
                <div className=" md:flex justify-between items-center">
                    <div className=" flex items-center gap-3">
                        <img
                            className="w-14 h-14 rounded-full"
                            src={business?.BrandImage}
                            alt=""
                        />
                        <div>
                            <p className="font-bold">{business?.CompanyName}</p>

                        </div>
                    </div>
                    <div>
                        <p className="card-title text-success">
                            Range: {business?.Minimum} BDT -  {business?.Maximum} BDT &gt;&gt; Profit {business?.Profit} % Per Mounth
                        </p>
                    </div>

                </div>
                <div className="mt-10 pr-3 pl-3 ">

                    <p className="">
                        {business?.CompanyDescription}

                    </p>
                </div>
            </div>

        </div>
    );
};

export default BusinessDetails;