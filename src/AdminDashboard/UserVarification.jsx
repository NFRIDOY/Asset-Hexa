import React from "react";

import { useEffect, useState } from "react";
import Loader from "../Route/loader";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
const UserVarification = () => {

    const [loading, setLoading] = useState(true);
	const [usersData, SetusersData] = useState([]);
	const axiosPublic = useAxios();

	useEffect(() => {
		setLoading(true);
		axiosPublic.get("/users").then((data) => {
			SetusersData(data.data);
			setLoading(false);
			console.log(data.data);
		});
	}, [axiosPublic]);

	if (loading) return <Loader />;

	const handleVarify = (email) => {
		console.log("user Email" , email)
	}

	return (
		<div>
			<div className="bg-base-300 ">
				<div className="">
					<table className="table table-pin-rows  table-lg text-center">
						<thead   className="">
							<tr className=" bg-gradient-to-r from-[#23A455] to-[#34D399] text-white ">
                                <th>Profile Picture</th>
								<th>UserName</th>
								<th>UserEmail</th>
								<th>verify</th>
							</tr>
						</thead>
						<tbody>
							{usersData?.map((item) => (
                                <tr key={item?.id} className="hover">
									<td className="py-1 flex justify-center" >
                                        <img className="w-14 h-14 " src={item?.photoURL ? item?.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" />
                                        
                                         </td>
									<td className="py-1" >{item?.displayName  ? item?.displayName : "Name Not found"}</td>
									<td className="py-1" >{item?.email}</td>
									<td   className="py-0">
										{" "}
										<button onClick={() => handleVarify(item?.email)} className="btn  bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline rounded-none ">
											varify user
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
	);
};

export default UserVarification;
