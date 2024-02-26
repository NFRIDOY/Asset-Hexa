import React from "react";
import { useEffect, useState } from "react";
import Loader from "../Route/loader";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const BusinessVerification = () => {
	const [loading, setLoading] = useState(true);
	const [businessData, SetBusinessData] = useState([]);
	const axiosPublic = useAxios();

	useEffect(() => {
		setLoading(true);
		axiosPublic.get("/bussiness").then((data) => {
			SetBusinessData(data.data);
			setLoading(false);
			// console.log(data.data);
		});
	}, [axiosPublic]);

	

	if (loading) return <Loader />;
	return (
		<div className="bg-base-300 min-h-screen ">
			<div className=" overflow-scroll md:overflow-x-hidden">
				<table className="table  table-pin-rows table-lg text-center">
					{/* head */}
					<thead>
						<tr className="z-[0] bg-gradient-to-r from-[#23A455] to-[#34D399] text-white ">
							<th>UserName</th>
							<th>BrandName</th>
							<th>Maximum Invesment</th>
							<th>profit</th>
							<th>view Business</th>
						</tr>
					</thead>
					<tbody>
						{businessData.map((item) => (
							<tr key={item?._id} className={item?.isVerified ? "hidden" : "hover"}>
								<th>{item?.userName}</th>
								<td>{item?.CompanyName}</td>
								<td>{item?.Maximum} </td>
								<td>{item?.Profit}%</td>
								<td className="p-0"><Link to={`/businessDetails/${item?._id}`}>
									<button className="btn  bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline rounded-none ">
										View Business
									</button>
								</Link></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BusinessVerification;
