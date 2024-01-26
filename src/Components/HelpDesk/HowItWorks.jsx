import image from "../../assets/how-it-works/HowItworiks.jpg";
import { Link } from "react-router-dom";
import Statistics from './../../Dashboard/Statistics';

const HowItWorks = () => {
  return (
    <div className="flex justify-center items-center gap-8 md:m-10 lg:md:m-20 flex-col lg:flex-row my-40">
      <div className="w-full lg:w-1/2">
        <img src={image} alt="" />
      </div>
      <div className="w-full md:ml-6 lg:w-1/2 max-w-[555px] px-2">
        <p className="border-l-4 border-primaryColor font-semibold pl-2 text-primaryColor ">
          How it works
        </p>
        <div className="my-4">
          <h1 className="font-bold text-4xl">Use only with 4 easy steps </h1>
          <p className="text-gray-500">
            Discover ehe effective way to handle Payments
          </p>
        </div>
        <div className="space-y-5 mt-10">
          <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p className="">1</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Sign Up and create an account
              </h1>
              <p className="text-gray-500">
                Begin your journey by regestering and setting up your account
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p className="">2</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Create an account For Your Money
              </h1>
              <p className="text-gray-500">
                Begin your journey by regestering and setting up your account
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p className="">3</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Add Transection Income/Expenses
              </h1>
              <p className="text-gray-500">
                Begin your journey by regestering and setting up your account
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p className="">4</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Watch Your Account Statistics
              </h1>
              <p className="text-gray-500">
                Begin your journey by regestering and setting up your account
              </p>
            </div>
          </div>
        </div>
        <Link to="/login" className="flex justify-center items-center mt-4">
          <button className="w-36 h-16 border-2 border-green-300 text-green-800 font-black rounded-full hover:text-white duration-300 relative group">
            <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-green-300 group-hover:bg-green-500 group-hover:duration-500 -z-10"></span>
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
