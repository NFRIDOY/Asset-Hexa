import React from 'react';
import { NavLink } from 'react-router-dom';

const NavUl = () => {
    return (
        <>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? "text-black lg:text-primaryColor font-bold  p-2 text-xl "
						: "p-2 text-xl text-white lg:text-black"
				}
			>
				Home
			</NavLink>

			<NavLink
				to="/about"
				className={({ isActive, isPending }) =>
					isPending
						? "pending"
						: isActive
						? "text-black lg:text-primaryColor font-bold  p-2 text-xl "
						: "p-2 text-xl text-white lg:text-black"
				}
			>
				About
			</NavLink>
			<NavLink
				to="/HelpDesk"
				className={({ isActive, isPending }) =>
					isPending
						? "pending"
						: isActive
						? "text-black lg:text-primaryColor font-bold  p-2 text-xl "
						: "p-2 text-xl text-white  lg:text-black"
				}
			>
				Help Desk
			</NavLink>
			<NavLink
				to="/Blogs"
				className={({ isActive, isPending }) =>
					isPending
						? "pending"
						: isActive
						? "text-black lg:text-primaryColor font-bold  p-2 text-xl "
						: "p-2 text-xl text-white  lg:text-black"
				}
			>
				Blogs
			</NavLink>
		</>
    );
};

export default NavUl;