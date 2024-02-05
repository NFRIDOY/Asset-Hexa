import { useEffect, useState } from "react"
import useAuth from './../../hooks/useAuth';
import axiosSecure from "./../../api/index";
import useAxios from "../../hooks/useAxios";
import InvestmentRow from "./InvestmentRow";


export default function InvestmentTable() {

    const { user } = useAuth();

    const axiosPublic = useAxios();

    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        axiosPublic.get("/users")
            .then((res) => {
                setInvestments(res.data)
                console.log(res.data)
            })
        // .catch((error) => console.log(error))
    }, [])

    return (
        <div className="h-screen">
            {/* <h1>
                investmentTable
            </h1> */}
            <div className="overflow-x-scroll">
                <table className="table table-xs lg:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
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
                        <div className=" w-fit  col-span-12 text-center flex justify-center">
                            <span className="text-3xl w-fit text-red-500 font-bold text-center flex justify-center">
                                No Data
                            </span>
                        </div>
                    </div> : null
                }
            </div >
        </div >
    )
}
