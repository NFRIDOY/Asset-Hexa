
import { useContext } from "react";
import bg from "../assets/Income/Screenshot 2024-01-26 113631.png"
import { AuthContext } from "../providers/AuthProvider";


const Profile = () => {

    const { user, } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='flex justify-center items-center h-screen'>
        
          <div className='bg-white shadow-lg rounded-2xl w-3/5'>
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
    
              
              <p className='mt-2  '>
               <span className=" text-xl font-medium text-gray-800"> User Id:</span> {user.uid}
              </p>
              <div className='w-full p-2 mt-4 rounded-lg'>
                <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                  <p className='flex flex-col'>
                   <span className="text-xl text-black font-medium">Name : </span> 
                    <span className='font-bold  text-black '>
                      {user.displayName}
                    </span>
                  </p>
                  <p className='flex flex-col'>
                    <span className="text-xl text-black font-medium"> Email : </span>
                    <span className='font-bold text-black '>{user.email}</span>
                  </p>
    
                  <div>
                    <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                      Update Profile
                    </button>
                    <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
};

export default Profile;