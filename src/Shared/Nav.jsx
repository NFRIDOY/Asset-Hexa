import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const ul = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/HelpDesk"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Help Desk
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        {/* Login Logout toggle button logic */}
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex gap-3 items-center">
              <div className="w-10 rounded-full">
                <img
                  className="w-full rounded-full"
                  src={
                    user?.photoURL
                      ? `${user?.photoURL}`
                      : "https://i.ibb.co/C2QsnzC/jae-park-7-GX5a-ICaawdb5i4-unsplash.jpg"
                  }
                  alt=""
                />
              </div>
              <button onClick={() => logOut()} className="btn btn-sm">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
