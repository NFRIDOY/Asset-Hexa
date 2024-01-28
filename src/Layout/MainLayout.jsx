import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navrouts from "../CodePiece/Navrouts";
import NavUl from "../CodePiece/NavUl";

const MainLayout = () => {

	
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
						<ul style={{backdropFilter: "blur(30px)"}} className="menu bg-transparent p-4 w-80 min-h-full ">
							{/* Sidebar content here */}
							<NavUl></NavUl>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
