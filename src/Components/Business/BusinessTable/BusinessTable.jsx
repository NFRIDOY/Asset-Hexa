import { useEffect, useState } from "react"
import useAuth from '../../../hooks/useAuth';

import useAxios from "../../../hooks/useAxios";


import { Link } from "react-router-dom";
import BusinessTableRow from "./BusinessTableRow";
import axios from "axios";



export default function BusinessTable() {

    const { user } = useAuth();

    const axiosPublic = useAxios();

    const [myBusiness, setMyBusiness] = useState([]);

    // console.log(`${user?.email}`)
    useEffect(() => {
        axiosPublic.get(`/bussiness?email=${user?.email}`)
            // axios.get(`http://localhost:5000/bussiness?email=${user?.email}`)
            .then((res) => {
                setMyBusiness(res.data)
                // console.log(res.data)
            })
        // .catch((error) => console.log(error))
    }, [])

    return (
        // <div className="h-[calc(100vh-280px)] lg:mx-5 w-full">
        // <div className="h-full lg:mx-5 w-full overflow-x-hidden ">
        // <div className="bg-white w-full lg:max-h-[calc(100vh-280px)] flex gap-5 items-center overflow-auto">
        <div className="table table-pin-rows table-md md:table-lg  text-center">
            {/* <div className="bg-white w-full overflow-auto"> */}
            {/* <h1>
                BusinessTable
            </h1> */}
            <table className="table table-xs lg:table-lg">
                {/* head */}
                <thead >
                    <tr className="">
                        <th></th>
                        <th>Brand Logo</th>
                        <th>BrandName</th>
                        {/* <th>Invesment</th> */}
                        <th>Collection</th>
                        <th>Profit(%)</th>
                        <th>Profit Amount</th>
                        {/* <th>view Business</th> */}
                    </tr>
                </thead>
                <tbody className="">
                    {
                        ((myBusiness.length !== 0) || myBusiness) ? myBusiness?.map((investment, index) => <BusinessTableRow key={investment?._id} investment={investment} index={index + 1} />) : null
                    }
                </tbody>

            </table>
            {
                (myBusiness.length === 0) ? <div
                    className="flex flex-col justify-center items-center my-10">
                    <div>
                        <div className=" w-fit  col-span-12 text-center flex justify-center">
                            <span className="text-3xl w-fit text-red-500 font-bold text-center flex justify-center">
                                No Data
                            </span>
                        </div>
                        {/* <Link to={"/businesses"} className=" w-fit  flex justify-center btn btn-warning my-8">
                            <span className="text-xl w-fit text-black font-bold text-center flex justify-center">
                                Invest Now
                            </span>
                        </Link> */}
                    </div>
                </div> : null
            }
        </div >
    )
}
