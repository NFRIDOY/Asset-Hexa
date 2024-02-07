import { useEffect, useState } from "react"
import useAuth from './../../hooks/useAuth';
import axiosSecure from "./../../api/index";
import useAxios from "../../hooks/useAxios";
import InvestmentRow from "./InvestmentRow";
import Investments from './Investments';
import { Link } from "react-router-dom";


export default function InvestmentTable() {

    const { user } = useAuth();

    const axiosPublic = useAxios();

    const [investments, setInvestments] = useState([]);

    console.log(`${user?.email}`)
    useEffect(() => {
        axiosPublic.get(`/investments?email=${user?.email}`)
            .then((res) => {
                setInvestments(res.data)
                console.log(res.data)
            })
        // .catch((error) => console.log(error))
    }, [])

    return (
        <div className="h-screen lg:mx-5">
            {/* <h1>
                investmentTable
            </h1> */}
            <div className="overflow-x-auto">
                <table className="table table-xs lg:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Investments</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    {
                        <tbody>
                            {
                                (investments.length !== 0) ? investments.map((investment, index) => <InvestmentRow key={investment?._id} investment={investment} index={index + 1} />) : null
                            }
                        </tbody>

                    }
                </table>
                {
                    (investments.length === 0) ? <div
                        className="flex flex-col justify-center items-center my-10">
                        <div>
                            <div className=" w-fit  col-span-12 text-center flex justify-center">
                                <span className="text-3xl w-fit text-red-500 font-bold text-center flex justify-center">
                                    No Data
                                </span>
                            </div>
                            <Link to={"/businesses"} className=" w-fit  flex justify-center btn btn-warning my-8">
                                <span className="text-xl w-fit text-black font-bold text-center flex justify-center">
                                    Invest Now
                                </span>
                            </Link>
                        </div>
                    </div> : null
                }
            </div >
        </div >
    )
}
