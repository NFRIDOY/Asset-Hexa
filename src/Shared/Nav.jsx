import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const ul = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-primaryColor p-2 text-xl "
            : "btn btn-ghost"
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
            ? " font-bold text-primaryColor p-2 text-xl "
            : "p-2 text-xl "
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
            ? "font-bold text-primaryColor p-2 text-xl "
            : "p-2 font-bold text-xl "
        }
      >
        Help Desk
      </NavLink>
      <NavLink
        to="/Business"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-bold text-primaryColor p-2 text-xl "
            : "p-2 text-xl "
        }
      >
        Business
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className="navbar p-0 bg-base-100">
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
          <ul className="menu menu-horizontal gap-4 px-1">{ul}</ul>
        </div>
        {/* Login Logout toggle button logic */}
        <div className="navbar-end mr-2">
          {user?.email ? (
            <div className="flex gap-3 items-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard/overview">Dashboard</Link>
                  </li>
                  <li>
                    <Link onClick={() => logOut()}>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
