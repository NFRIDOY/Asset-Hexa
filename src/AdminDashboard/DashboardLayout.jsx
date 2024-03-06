import { Link, NavLink, Outlet } from "react-router-dom";
import home from "../assets/logo/logo.png";
import money from "../lottie/Animation - 1706022352528.json";
import Lottie from "lottie-react";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";

import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { IoMdBusiness } from "react-icons/io";
const DashboardLayout = () => {
  return (



    <div className=" h-screen  bg-base-300 min-w-full  mx-auto ">
      <div className="drawer  lg:drawer-open  mx-auto bg-white w-full rounded-2xl min-h-">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   bg-base-300 flex flex-col   ">
          {/* Page content here */}

          <div className="sticky top-0 z-[99]">
            <div className="flex lg:hidden justify-between items-center bg-white px-4 py-2 ">
              <img className="w-48" src={home} alt="" />
              <label
                htmlFor="my-drawer-2"
                className=" z-[999]     drawer-button "
              >
                <AiOutlineMenu className="text-2xl  "></AiOutlineMenu>
              </label>
            </div>
          </div>
          <div className=" md:mt-0">
            <Outlet ></Outlet>
          </div>

        </div>
        <div className="drawer-side z-[999] min-h-[500px] scrollable-content   ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>

          <div className="w-60 h-full  scrollable-content  bg-gradient-to-br from-[#23A455] to-[#34D399] justify-between  flex flex-col ">
            <div className="">
              <div className="w-48  rounded-lg lg:mt-3">
                <figure>
                  <Link to="/">
                    <img src={home} alt="" />
                  </Link>
                </figure>
              </div>
              <ul className="menu text-lg  space-y-2 text-white   rounded-lg mt-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-white p-2  pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/AdminOverview"
                >
                  <MdOutlineDashboard /> Overview
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-white p-2   pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/BusinessVerification"
                >
                  <IoMdBusiness />
                  Verify Business
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-white p-2   pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/userVerification"
                >
                  <FaUserAlt />
                  Verify User
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-white p-2   pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/BlogVerification"
                >
                  <ImBlog />
                  verify Blogs
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-white p-2   pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/subscriptionList"
                >
                  <ImBlog />
                  Subscription List
                </NavLink>
                {/* <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black flex px-4 gap-3 items-center bg-white p-2  pr-4"
                      : "flex px-4 p-2 items-center mr-4 gap-3"
                  }
                  to="/AdminDashboard/Revenue"
                >
                  <MdOutlineDashboard /> Revenue
                </NavLink> */}


                {/* <NavLink
									className={({ isActive }) =>
										isActive
											? "text-black flex px-4 gap-3 items-center bg-white p-2   pr-4"
											: "flex px-4 p-2 items-center mr-4 gap-3"
									}
									to="/dashboard/addBlog"
								>
									<MdOutlineDashboard /> Add Blog
								</NavLink> */}
              </ul>
            </div>

            <div className="  rounded-lg ">
              <div className="mx-auto ">
                <Lottie
                  className=" w-[150px] md:[w-150px] lg:w-[180px]"
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

export default DashboardLayout;