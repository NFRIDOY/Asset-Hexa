
import { useContext } from "react";
import bg from "../assets/Income/Screenshot 2024-02-01 142354.png"
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {

  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className='flex justify-center items-center  h-screen'>

      <div className=' shadow-lg rounded-2xl w-full md:w-3/5'>
        <img
          alt='profile'
          src={bg}
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  rounded-full'>
            {user && user?.displayName}
          </p>


          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className=' md:flex flex-row justify-evenly    text-sm text-gray-600 '>
              <p className='flex flex-col'>
                <span className="text-sm text-slate-800 font-medium">Name  </span>
                <span className='font-bold text-lg  text-black '>
                  {user.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                <span className="text-sm text-slate-800 font-medium"> Email  </span>
                <span className='font-bold text-black text-lg '>{user.email}</span>
              </p>

            </div>
              <div>

                <Link to="/UpdateProfile" >
                <button className=' mt-4 m-auto flex bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white px-10 py-1 rounded-lg  cursor-pointer '>
                  Update Profile
                </button>
                
                </Link>


              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;