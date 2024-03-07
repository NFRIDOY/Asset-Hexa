import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import NavUl from "./NavUl";
import useAdmin from "../hooks/useAdmin";
import { IoNotificationsOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navrouts = ({
  setToastData,
  isUnSeenNotification,
  setIsUnSeenNotification,
}) => {
  const { user, logOut } = useContext(AuthContext);
  const axiosPublic = useAxios();
  const [open, setOpen] = useState(true);

  const [isAdmin] = useAdmin();

  const handleNotification = () => {
    setIsUnSeenNotification(0);
    document.getElementById("my_modal_2").showModal();

    const obj = {
      unseenNotification: 0,
    };

    axiosPublic.put(`/notificationsCount/${user?.email}`, obj);
  };
  const { data: notifications = [] } = useQuery({
    queryKey: ["Notifications"],
    queryFn: async () => {
      const res = await axiosPublic.get("/notifications");
      return res.data;
    },
  });

  useEffect(() => {
    axiosPublic.get(`/notificationsCount/${user?.email}`).then((res) => {
      setIsUnSeenNotification(res.data?.unseenNotification);
    });
  }, [user, axiosPublic, setIsUnSeenNotification]);

  if (notifications.length > 0) {
    setToastData(notifications);
  }

  return (
    <div className="w-full navbar p-0 sticky bg-white top-0 z-[99]  ">
      <div className="flex-none lg:hidden">
        <label
          onClick={() => setOpen(!open)}
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost text-xl"
        >
          <AiOutlineMenu />
        </label>
      </div>

      <div className="navbar z-[0] p-0 bg-base-100">
        <div className="navbar-start z-[0]">
          <Link to="/" className="btn p-0 btn-ghost text-xl">
            <img className="h-14" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal z-[98] gap-4 px-1">
            <NavUl></NavUl>
          </ul>
        </div>
        {/* Login Logout toggle button logic */}
        <div className="navbar-end mr-2">
          {user?.email ? (
            <div className="">
              <div className="flex gap-2  items-center ">
                <div
                  onClick={handleNotification}
                  className="indicator mr-4 cursor-pointer"
                >
                  <IoNotificationsOutline className="text-4xl " />
                  <span className={isUnSeenNotification > 0 ? " " : "hidden"}>
                    <span className="badge badge-xl  badge-success text-white indicator-item">
                      +{isUnSeenNotification || 0}
                    </span>
                  </span>
                </div>

                {isAdmin ? (
                  <Link to="/AdminDashboard/AdminOverview">
                    <button className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline rounded-none ">
                      Dashboard
                    </button>
                  </Link>
                ) : (
                  <Link to="/dashboard/overView">
                    <button className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline rounded-none ">
                      Dashboard
                    </button>
                  </Link>
                )}

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
              className="btn hover:border-primaryColor hover:bg-primaryColor hover:text-white btn-outline rounded-none  text-primaryColor "
            >
              Login
            </Link>
          )}
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-green-400 px-4 pt-12 max-h-[95vh] ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-white btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            {notifications.map((item) => (
              <div key={item?.id} className="bg-white flex gap-4 p-4 mb-2">
                <img
                  src={item?.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="overflow-hidden">
                  <h1>
                    {item?.userName} posted a {item?.type}
                  </h1>
                  <p className="font-bold w-full ">
                    {item?.title ? item?.title : null}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navrouts;
