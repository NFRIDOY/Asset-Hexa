import { ImBlog } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { IoMdBusiness } from "react-icons/io";
import verified from "../assets/dashboard/varified.png";
import "../../src/App.css"
const AdminOverview = () => {
	const data01 = [
		{ name: "newsletter subscription", value: 100 },
		{ name: "business subscriptions", value: 300 },
	];

	const COLORS = ["#317DF0", "#F8A11B"];
	return (
		<div className="p-4 bg-base-300">
			<div className="bg-white p-4 flex rounded-xl gap-3 overflow-x-auto min-h-40">
				<div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#449B38] to-[#34D399]  px-8 min-w-48 md:min-w-56 ">
					<h1 className="text-base font-medium">total Users</h1>
					<p className="text-3xl md:text-5xl font-semibold">00</p>
				</div>
				<div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#F49328] to-[#E92A31]  px-8  min-w-48 md:min-w-56 ">
					<h1 className="text-base font-medium">Total Transection</h1>
					<p className="text-3xl md:text-5xl font-semibold">00</p>
				</div>
				<div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#49a7e0] to-[#8fd6ff]  px-8  min-w-48 md:min-w-56">
					<h1 className="text-base font-medium">Total Blogs</h1>
					<p className="text-3xl md:text-5xl font-semibold">00</p>
				</div>
				<div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-[#FFE338] to-[#e94444]  px-8 min-w-48 md:min-w-56 ">
					<h1 className="text-base font-medium">
						{" "}
						Business posting{" "}
					</h1>
					<p className="text-3xl md:text-5xl font-semibold">00</p>
				</div>
				<div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-purple-700 to-purple-400  px-8 min-w-48 md:min-w-56 ">
					<h1 className="text-base font-medium">
						{" "}
						Newslater subscitption
					</h1>
					<p className="text-3xl md:text-5xl font-semibold">00</p>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-10 md:mt-5 my-5   ">
				<div className="bg-white  md:p-10 mx-auto">
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

				<div className="bg-white w-full p-6 px-10 flex flex-col md:flex-row gap-5 items-center justify-between">
					<Link to="/AdminDashboard/BusinessVerification"  className="w-72   md:w-48 shadow-custom flex flex-col justify-center items-center h-72 md:h-48 md:-mt-16 ">
						<div className="relative">
							<IoMdBusiness size={72} className="!z-[-999]" />

							<img
								className="absolute w-6 h-6  bottom-1 right-0 !z-[999]"
								src={verified}
								alt=""
								srcset=""
							/>
						</div>
						<h1 className="text-lg ">Business Varification</h1>
					</Link>
					<Link to="/AdminDashboard/userVerification" className="w-72 md:w-48 flex flex-col justify-center items-center h-72 md:h-48 md:mt-16 shadow-custom ">
						<div className="relative">
							<FaUserAlt size={72} className="!z-[-999]" />

							<img
								className="absolute w-6 h-6  -bottom-1 -right-3 !z-[999]"
								src={verified}
								alt=""
								srcset=""
							/>
						</div>
                        <h1 className="text-lg mt-2 ">User Varification</h1>
					</Link>
					<Link to="/AdminDashboard/BlogVerification" className="w-72 md:w-48 flex flex-col justify-center items-center h-72 md:h-48 md:-mt-16 shadow-custom  ">
						<div className="relative">
							<ImBlog size={72} className="!z-[-999]" />

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
