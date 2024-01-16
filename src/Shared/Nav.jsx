

import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Nav = () => {
	const ul = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					Item 1
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/messages"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					Item 2
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/messages"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active" : ""
					}
				>
					Item 3
				</NavLink>
			</li>
		</>
	);
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{ul}
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost text-xl">
						<img className="h-14" src={logo} alt="" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{ul}</ul>
				</div>
				<div className="navbar-end">
					<Link to="/" className="btn">Login</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
