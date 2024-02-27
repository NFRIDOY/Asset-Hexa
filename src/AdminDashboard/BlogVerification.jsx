import React from 'react';

import { useEffect, useState } from "react";
import Loader from "../Route/loader";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const BlogVerification = () => {

    const [loading, setLoading] = useState(true);
	const [blogData, setBlogData] = useState([]);
	const axiosPublic = useAxios();

	useEffect(() => {
		setLoading(true);
		axiosPublic.get("/blogs").then((data) => {
			setBlogData(data.data);
			setLoading(false);
			// console.log(data.data);
		});
	}, [axiosPublic]);

	if (loading) return <Loader />;

    return (
       <div className="bg-base-300 min-h-screen">
			<div className="overflow-x-scroll ">
				<table className="table table-pin-rows table-lg text-center">
					{/* head */}
					<thead>
						<tr className="z-[0] bg-gradient-to-r from-[#23A455] to-[#34D399] text-white ">
							<th>Title</th>
							<th>Author</th>
							<th>Date Posted</th>
							<th>view Blog</th>
						</tr>
					</thead>
					<tbody>
						{blogData?.map((item) => (
							<tr key={item?.id} className={item?.isVerified ? "hidden" : "hover"}>
								<th>{item?.title}</th>
								<td>{item?.author}</td>
								<td>{new Date(
												item?.time
											).toLocaleDateString()}</td>
								<td className="p-0"><Link to={`/blogDetails/${item?._id}`}>
									<button className="btn  bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline rounded-none ">
										View blog
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

export default BlogVerification;