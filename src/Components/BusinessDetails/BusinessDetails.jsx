
import { useParams } from "react-router-dom";
import useBusiness from "../../hooks/useBusiness";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";
import InvestmentRow from './../../Dashboard/Investments/InvestmentRow';
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const BusinessDetails = () => {
    const { id } = useParams();
    const { business } = useBusiness(id);
    const axiosPublic = useAxios()
    const { user } = useAuth();

    // console.log(business);

    const handleVerification = () => {
        axiosPublic.put(`/business/${id}`)
            .then(res => {
                if (res?.data.modifiedCount >= 1) {
                    toast.success("Business marked as verified");

                }
                else {
                    toast.error("Business is already verified");

                }
            })
            .catch(err => console.log(err))

    }

    const handleInvest = (e) => {
        e.preventDefault();
        const form = e.target;
        const invest = parseFloat(form.invest.value);
        console.log(invest);
        const InvestmentObj = {
            investor: user?.email,
            invest: invest
        }

        axiosPublic.put(`/businessInvest/${id}`, InvestmentObj)
        // axios.put(`http://localhost:5000/businessInvest/${id}`, InvestmentObj)
            .then(res => {
                console.log(res.data);
                if (res?.data.result.modifiedCount >= 1) {
                    toast.success("Invested on this Business ");
                    if (res?.data.addToInvestments.modifiedCount >= 1) {
                        toast.success("Added to Your Investments");

                    }

                }
                else {
                    toast.error("Faild to Invest");

                }
            })
    }

    const [isAdmin] = useAdmin()

    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className=" ">
                <div className="">
                    <img className="md:w-[1200px]  rounded-xl h-96 md:h-96 lg:h-[450px]" src={business?.BannerImage} alt="" />
                </div>
                <div className="md:flex md:justify-between  items-center gap-3">
                    <div className="flex justify-center items-center">
                        <div>
                            <h2 className="text-3xl">
                                Posted By
                            </h2>
                        </div>
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
                    </div>
                    <form onSubmit={handleInvest} className="flex lg:pr-32 mt-5 ml-10 ">
                        <input className="shadow-xl outline-none input input-bordered input-primary" type="number " name="invest" id="invest" />
                        <button className="btn bg-[#4FD28C]  " type="submit">Investment</button>

                    </form>


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
                    <div className="md:mr-32">
                        <p className="card-title text-success">
                            Range: {business?.Minimum} BDT -  {business?.Maximum} BDT
                        </p>
                        <p>
                            Profit {business?.Profit} % Per Mounth
                        </p>
                    </div>

                </div>
                <div className="mt-10 pr-3 pl-3 ">

                    <p className="">
                        {business?.CompanyDescription}

                    </p>

                    {isAdmin && <button onClick={handleVerification} className="btn mt-4 bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline  mt-2 rounded-md">
                        varify this business
                    </button>}
                </div>
            </div>

        </div>
    );
};

export default BusinessDetails;