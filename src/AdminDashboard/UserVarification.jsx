import React from "react";
import toast from "react-hot-toast";

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
		axiosPublic.get("/users")
		.then((data) => {
			SetusersData(data.data);
			setLoading(false);
			// console.log(data.data);
		});
	}, [axiosPublic]);

	if (loading) return <Loader />;

	const handleVarify = (email) => {
		
		
		axiosPublic.put(`/user/${email}`  )
		.then(res => {
			if(res?.data.modifiedCount >= 1 ){
				toast.success("user marked as verified");
				document.getElementById(email).setAttribute("hidden", "true");
				
			}
			else{
				toast.error("User is already verified");
				
			}
		})
		.catch(err => console.log(err))
		
	}

	return (
		<div>
			<div className="bg-base-300 ">
				<div className="overflow-x-scroll md:overflow-x-auto">
					<table className="table table-pin-rows  table-lg text-center">
						<thead   className="">
							<tr className="z-[0] bg-gradient-to-r from-[#23A455] to-[#34D399] text-white ">
                                <th>Profile Picture</th>
								<th>UserName</th>
								<th>UserEmail</th>
								<th>verify</th>
							</tr>
						</thead>
						<tbody>
							{usersData?.map((item) => (
                                <tr id={item?.email}  key={item?.id} className={item?.isVerified ? "hidden" : "hover"}>
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
