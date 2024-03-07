import React from "react";
import { NavLink } from "react-router-dom";

const NavUl = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black lg:text-primaryColor font-bold  p-2 text-xl "
            : "p-2 text-xl text-white font-bold lg:text-black"
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
            : "p-2 text-xl text-white font-bold lg:text-black"
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
            : "p-2 text-xl text-white font-bold  lg:text-black"
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
            : "p-2 text-xl text-white font-bold  lg:text-black"
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/businesses"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black lg:text-primaryColor font-bold  p-2 text-xl "
            : "p-2 text-xl text-white font-bold  lg:text-black"
        }
      >
        Businesses
      </NavLink>
      {/* <NavLink
				to="/pricing"
				className={({ isActive, isPending }) =>
					isPending
						? "pending"
						: isActive
						? "text-black lg:text-primaryColor font-bold  p-2 text-xl "
						: "p-2 text-xl text-white  lg:text-black"
				}
			>
				Pricing
			</NavLink> */}
    </>
  );
};

export default NavUl;
