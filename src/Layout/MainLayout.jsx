import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navrouts from "../CodePiece/Navrouts";
import NavUl from "../CodePiece/NavUl";
import { AuthContext } from "../providers/AuthProvider";
import { io } from "socket.io-client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";


const MainLayout = () => {
	const {logOut , user} = useContext(AuthContext)
	const axiosPublic = useAxios()
	const [toastData , setToastData] = useState([])
	
	
	const lastNOtification = toastData[0]

	const Msg = ({ closeToast, toastProps }) => (
		<div  className="bg-green-400 text-white  flex gap-4 p-4 mb-2">
		<img src={lastNOtification?.photoURL} className="w-10 h-10 rounded-full" alt="" />
		<div>
			<h1>{lastNOtification?.userName} posted a {lastNOtification?.type}</h1>
			
		</div>
	</div>
	  );


	useEffect(() => {
    
		const socket = io("https://asset-hexa-server-notification.glitch.me/", {
			transports: ["websocket"]});
		
		socket.on("connection" , () => {
		  console.log("connected to Socet io");
		  
		})
	
		socket.on("new_blog_posted" , (data) => {
		  console.log("new blog posted " , data.message);
		
		  
		toast(<Msg /> )
		  
		  
		})
		socket.on("new_business_posted" , (data) => {
		  console.log("new business posted " , data.message);
		
		  
		toast(<Msg /> )
		  
		  
		})
	
		return () => {
			socket.disconnect();
		};
	  }, [toastData, lastNOtification])

	  console.log("the toast data is " ,toastData);
	
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
					

						<Navrouts setToastData={setToastData}></Navrouts>
						{/* <Navrouts ></Navrouts> */}
						<Outlet></Outlet>
						<Footer></Footer>
						
					</div>
					<div className="drawer-side ">
						<label
							htmlFor="my-drawer-3"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul style={{backdropFilter: "blur(30px)"}} className="menu bg-transparent p-4 w-80 min-h-full text-center">
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
			<ToastContainer style={{ width: "400px" }}></ToastContainer>

		</div>
	);
};

export default MainLayout;
