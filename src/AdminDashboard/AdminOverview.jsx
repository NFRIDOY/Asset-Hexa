import { ImBlog } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { IoMdBusiness } from "react-icons/io";
import verified from "../assets/dashboard/varified.png";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";

import "../../src/App.css";
import useAxios from "../hooks/useAxios";
const AdminOverview = () => {
	const axiosPublic = useAxios();

	const { data: adminState = [] } = useQuery({
		queryKey: ["AdminState"],
		queryFn: async () => {
			const res = await axiosPublic.get(`/adminState`);
			return res.data;
		},
	});

	const data01 = [
		{
			name: "newsletter subscription",
			value: adminState?.newsLetterSubscriptionCount,
		},
		{ name: "Total Site User", value: adminState?.userCount },
	];

	const COLORS = ["#317DF0", "#F8A11B"];
	return (
		<div className="p-4 lg:h-screen bg-base-300">
			<div className="bg-white  p-4 flex lg:overflow-x-hidden overflow-x-scroll   rounded-xl gap-3  ">
				<div className="space-y-2 min-w-60 lg:min-w-0  flex-1 py-8  overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#449B38] to-[#34D399]  px-8  ">
					<h1 className="text-base font-medium">total Users</h1>
					<p className="text-3xl md:text-5xl font-semibold">
						<CountUp end={adminState?.userCount} />
					</p>
				</div>
				<div className="space-y-2 min-w-60 lg:min-w-0 flex-1  py-8  overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#F49328] to-[#E92A31]  px-8    ">
					<h1 className="text-base font-medium">Total Transection</h1>
					<p className="text-3xl md:text-5xl font-semibold">
						<CountUp  end={adminState?.transectionsCount} />
					</p>
				</div>
				<div className="space-y-2 min-w-60 lg:min-w-0 flex-1 py-8  overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#49a7e0] to-[#8fd6ff]  px-8  ">
					<h1 className="text-base font-medium">Total Blogs</h1>
					<p className="text-3xl md:text-5xl font-semibold">
						<CountUp end={adminState?.blogCount} />
					</p>
				</div>
				<div className="space-y-2 min-w-60 lg:min-w-0 flex-1 overflow-scroll scrollable-content py-8  text-white rounded-xl bg-gradient-to-br from-[#FFE338] to-[#e94444]  px-8  ">
					<h1 className="text-base font-medium">
						{" "}
						Business posting{" "}
					</h1>

					<p className="text-3xl md:text-5xl font-semibold">
						<CountUp end={adminState?.businessCount} />
					</p>
				</div>
				<div className="space-y-2 min-w-60 lg:min-w-0 flex-1 overflow-scroll scrollable-content py-8  text-white rounded-xl bg-gradient-to-br from-purple-700 to-purple-400  px-8  ">
					<h1 className="text-base font-medium">
						{" "}
						Newslater subscitption
					</h1>
					<p className="text-3xl md:text-5xl font-semibold">
						<CountUp
							end={adminState?.newsLetterSubscriptionCount}
						/>
					</p>
				</div>
			</div>

			<div className="flex flex-col  lg:flex-row justify gap-5   md:mt-5 my-5   ">
				<div className="bg-white min-h-[300px] w-full flex justify-center items-center h-0 flex-1 lg:h-[calc(100vh-250px)] mx-auto">
					<PieChart width={350} height={350}>
						<Pie
							dataKey="value"
							isAnimationActive={false}
							data={data01}
							cx="50%"
							cy="50%"
							outerRadius={140}
							fill="#8884d8"
							label
						>
							{data01?.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>

						<Tooltip />
						<Legend />
					</PieChart>{" "}
				</div>

				<div className="flex-1 min-h-[300px] bg-white w-full lg:h-[calc(100vh-260px)]  p-6 px-10 flex flex-col md:flex-row gap-5 items-center justify-between">
					
					<Link
						to="/AdminDashboard/BusinessVerification"
						className="w-72   md:w-48 shadow-custom flex flex-col justify-center items-center h-72 md:h-48 md:-mt-16 transition-all  hover:scale-110 duration-500 "
					>
						<div className="relative">
							<IoMdBusiness size={72} className="" />

							<img
								className="absolute w-6 h-6  bottom-1 right-0 !z-[999]"
								src={verified}
								alt=""
								srcset=""
							/>
						</div>
						<h1 className="text-lg ">Business Varification</h1>
					</Link>
					<Link
						to="/AdminDashboard/userVerification"
						className="w-72 md:w-48 flex flex-col justify-center items-center h-72 md:h-48 md:mt-16 shadow-custom transition-all  hover:scale-110 duration-500"
					>
						<div className="relative">
							<FaUserAlt size={72} className="" />

							<img
								className="absolute w-6 h-6  -bottom-1 -right-3 !z-[999]"
								src={verified}
								alt=""
								srcset=""
							/>
						</div>
						<h1 className="text-lg mt-2 ">User Varification</h1>
					</Link>
					<Link
						to="/AdminDashboard/BlogVerification"
						className="w-72 md:w-48 flex flex-col justify-center items-center h-72 md:h-48 md:-mt-16 shadow-custom transition-all  hover:scale-110 duration-500 "
					>
						<div className="relative">
							<ImBlog size={72} className="" />

							<img
								className="absolute w-6 h-6  bottom-1 right-0 !z-[999]"
								src={verified}
								alt=""
								srcset=""
							/>
						</div>
						<h1 className="text-lg mt-1 ">Blog Varification</h1>
					</Link>
					
				</div>
			</div>
		</div>
	);
};

export default AdminOverview;
