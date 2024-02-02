import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navrouts from "../CodePiece/Navrouts";
import NavUl from "../CodePiece/NavUl";
import { AuthContext } from "../providers/AuthProvider";

const MainLayout = () => {
	const {logOut , user} = useContext(AuthContext)

	
	return (
		<div>
			<div className="min-h-[calc(100vh-56px-256px)]">
				<div className="drawer">
					<input
						id="my-drawer-3"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-content flex flex-col">
					

						<Navrouts></Navrouts>
						<Outlet></Outlet>
						<Footer></Footer>
						
					</div>
					<div className="drawer-side ">
						<label
							htmlFor="my-drawer-3"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul style={{backdropFilter: "blur(30px)"}} className="menu bg-transparent p-4 w-56 min-h-full text-center">
							{/* Sidebar content here */}
							<NavUl></NavUl>

							{
								user ? <div><div className="divider divider-success"></div>

								<Link to="/Dashboard/Profile" className="p-2 text-xl text-white  lg:text-black	">Profile</Link>
								<p onClick={() => logOut()} className="p-2 text-xl text-white  lg:text-black">Logout</p> </div>: null
								
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
