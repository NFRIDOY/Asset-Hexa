import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);

  const handleOut = () => {
    logOut()
        .then()
        .catch()
}

  const ul = (

    // <li><NavLink to={'/contact'} className={({ isActive, isPending }) =>
    //     isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""}>Contact</NavLink></li>

    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline  " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="dashboard/overView"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline " : ""
          }
        >
        Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline " : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/HelpDesk"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline " : ""
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
              className="menu font-bold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {ul}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="h-14" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-8 px-1 font-bold">{ul}</ul>
        </div>
        {/* Login Logout toggle button logic */}
        <div className="navbar-end">
        <div>
                        {
                            user?.email ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user && <img src={user.photoURL} />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-sm text-blue-600 font-bold  btn-ghost">{
                                            user && <p>{user.displayName}</p>
                                        }</button>

                                    </li>
                                    <li>
                                        <button onClick={handleOut} className="btn btn-sm text-green-600 font-bold btn-ghost">Logout</button>

                                    </li>
                                </ul>
                            </div>
                                :
                                <Link to='/login'>
                                    <button className="btn  mr-2  btn-outline btn-accent text-white ">Login</button>
                                </Link>
                        }
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
