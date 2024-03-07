import { useContext, useEffect, useState } from "react";
import bg from "../assets/Income/Screenshot 2024-02-01 142354.png";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

import ProfileTab from "./Profile/ProfileTab";
import Loader from "../Route/loader";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://asset-hexa-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));

    setLoading(false);
  }, [user]);

  // console.log(users);

  if (loading) return <Loader />;

  // console.log(users);
  return (
    <div className="flex justify-center">
      <div className=" shadow-lg rounded-2xl w-full ">
        <img
          alt="profile"
          src={bg}
          className="mb-2 flex flex-col md:flex-row justify-center items-center rounded-br-[300px] w-full  md:h-[365px]     bg-cover bg-center "
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-20">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={
                users?.photoURL ||
                "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              }
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  rounded-full">
            {users?.role}
          </p>

          <div className="w-full p-2 mt-2 rounded-lg">
            <div className=" md:flex flex-row justify-evenly    text-sm text-gray-600 ">
              <p className="flex flex-col">
                <span className="text-sm text-slate-800 font-medium">
                  Name{" "}
                </span>
                <span className="font-bold text-lg  text-black ">
                  {users?.displayName || "n"}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-slate-800 font-medium">
                  {" "}
                  Email{" "}
                </span>
                <span className="font-bold text-black text-lg ">
                  {users?.email}
                </span>
              </p>

              <Link to={`/dashboard/UpdateProfile/${users._id}`}>
                <button className=" ml-3 bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none border-none hover:bg-primaryColor text-white btn btn-sm">
                  Update Profile
                </button>
              </Link>
            </div>
            <div>
              <ProfileTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
