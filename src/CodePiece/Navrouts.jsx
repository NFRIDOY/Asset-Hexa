import React from "react";
import logo from "../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import NavUl from "./NavUl";
import useAdmin from "../hooks/useAdmin";

const Navrouts = () => {
	const { user, logOut } = useContext(AuthContext);

	const [isAdmin] = useAdmin()
	return (
		<div className="w-full navbar ">
			<div className="flex-none lg:hidden">
				<label
					htmlFor="my-drawer-3"
					aria-label="open sidebar"
					className="btn btn-square btn-ghost"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-8 h-8 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>

			<div className="navbar p-0 bg-base-100">
				<div className="navbar-start">
					<Link to="/" className="btn p-0 btn-ghost text-xl">
						<img className="h-14" src={logo} alt="" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal gap-4 px-1">
						<NavUl></NavUl>
					</ul>
				</div>
				{/* Login Logout toggle button logic */}
				<div className="navbar-end mr-2">
					{user?.email ? (
						// <div className="flex gap-3 items-center">
						// 	<div className="dropdown dropdown-end">
						// 		<div
						// 			tabIndex={0}
						// 			role="button"
						// 			className="btn btn-ghost btn-circle avatar"
						// 		>
						// 			<div id="my-drawer-2" className="w-10 rounded-full">
						// 				{
						//                     user?.photoURL ? <img src={user.photoURL} alt="" /> : <img
						// 					alt="Tailwind CSS Navbar component"
						// 					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
						// 				/>
						//                 }
						// 			</div>
						// 		</div>
						// 		<ul style={{backdropFilter: "blur(30px)"}}
						// 			tabIndex={0}
						// 			className=" absolute top-0 -mr-4  right-0 h-screen z-[1] text-right  p-6  text-xl text-black font-bold dropdown-content bg-transparent  w-60 space-y-5 gap-5 -mt-4 pt-8"
						// 		>
						// 			<li >
						// 				<Link to="/">
						// 					Dashboard
						// 				</Link>
						// 			</li>
						// 			<li>
						// 				<Link
						// 					onClick={() =>
						// 						logOut()
						// 					}
						// 				>
						// 					Logout
						// 				</Link>
						// 			</li>
						// 		</ul>
						// 	</div>
						// </div>

						<div className="">
							<div className="flex gap-2 ">

								{
									isAdmin ?<Link to="/AdminDashboard/AdminOverview">
									<button className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline rounded-none ">
										 Dashboard
									</button>
								</Link>		 	: <Link to="/dashboard/overView">
										 <button className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline rounded-none ">
											 Dashboard
										 </button>
									 </Link> 
								}
								
								
								
								
								
								<button
									onClick={() => logOut()}
									className="btn hidden md:block hover:border-primaryColor hover:bg-primaryColor hover:text-white btn-outline rounded-none  text-primaryColor "
								>
									Logout
								</button>
							</div>
						</div>
					) : (
						<Link
							to="/login"
							className="btn  btn-outline hover:border-primaryColor hover:bg-primaryColor hover:text-white btn-outline rounded-none  text-primaryColor "
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navrouts;
