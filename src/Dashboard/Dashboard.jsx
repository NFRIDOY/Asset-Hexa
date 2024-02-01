import { Link, NavLink, Outlet } from "react-router-dom";
import home from "../assets/logo/logo.png";
import money from "../lottie/Animation - 1706022352528.json";
import Lottie from "lottie-react";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

const Dashboard = () => {
	return (
		<div className=" h-screen bg-base-300  px-8">
			<div className="drawer lg:drawer-open  mx-auto bg-white px-6 rounded-2xl min-h-[calc(100vh-32px)]">
				<input
					id="my-drawer-2"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content flex flex-col   ">
					{/* Page content here */}
					<div className=" ml-0 p-4 lg:ml-10  *:">
						<Outlet></Outlet>
					</div>
					<label
						htmlFor="my-drawer-2"
						className=" absolute top-0  justify-start flex w-20 mx-auto lg:mt-6 drawer-button lg:hidden"
					>
						<AiOutlineMenu className="text-2xl m-4 "></AiOutlineMenu>
					</label>
				</div>
				<div className="drawer-side ">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>

					<div className="w-52 h-screen bg-white justify-between  flex flex-col ">
						<div>
							<div className="  rounded-lg lg:mt-3">
								<figure>
									<Link to="/">
										<img src={home} alt="" />
									</Link>
								</figure>
							</div>
							<ul className="menu text-lg  space-y-2 h-[320px]  rounded-lg mt-4">
								<NavLink
									className={({ isActive }) =>
										isActive
											? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
											: "flex px-4 p-2 items-center mr-4 gap-3"
									}
									to="/dashboard/overView"
								>
									<MdOutlineDashboard /> Overview
								</NavLink>


								<NavLink className={({ isActive }) =>
									isActive
										? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
										: "flex px-4 p-2 items-center mr-4 gap-3"
								} to="/dashboard/transection">
									<GrTransaction />
									Transection
								</NavLink>


								<NavLink className={({ isActive }) =>
									isActive
										? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
										: "flex px-4 p-2 items-center mr-4 gap-3"
								} to="/dashboard/statistics">
									<IoStatsChartSharp />
									Statistics
								</NavLink>

								<NavLink className={({ isActive }) =>
									isActive
										? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
										: "flex px-4 p-2 items-center mr-4 gap-3"
								} to="/dashboard/accounts">
									<MdAccountBalance />
									Accounts
								</NavLink>

								<NavLink className={({ isActive }) =>
									isActive
										? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
										: "flex px-4 p-2 items-center mr-4 gap-3"
								} to="/dashboard/addBlog">
									<CgProfile />
									Add Blog
								</NavLink>
								<NavLink className={({ isActive }) =>
									isActive
										? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
										: "flex px-4 p-2 items-center mr-4 gap-3"
								} to="/dashboard/profile">
									<CgProfile />
									Profile
								</NavLink>
								{/* <NavLink
									className={({ isActive }) =>
										isActive
											? "text-black flex px-4 gap-3 items-center bg-[#00EC25] p-2 rounded-xl  pr-4"
											: "flex px-4 p-2 items-center mr-4 gap-3"
									}
									to="/dashboard/addBlog"
								>
									<MdOutlineDashboard /> Add Blog
								</NavLink> */}

							</ul>
						</div>



						<div className="p-2  rounded-lg mt-4">
							<div className="mx-auto ">
								<Lottie
									className="mx-auto mb-12 w-[150px] md:[w-150px] lg:w-[200px]"
									animationData={money}
									loop={true}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
