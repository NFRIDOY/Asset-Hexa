/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import image from "../../../lottie/Animation - 1702402794506.json";
import { Link } from "react-router-dom";


const WhoWeAre = () => {
  return (
    <div className="my-40">
      <div id="about" className="xl:mt-12 flex gap-10 md:flex-row flex-col">
        <div className="flex-1 flex justify-center md:justify-end">
          {/* <img className=" shadow-md rounded-full h-full w-96" src={incomePic} alt="profile" />
           */}

          <div className="text-center lg:text-left rounded">
            <div className="mx-auto w-full">
              <Lottie
                className="mx-auto w-72 md:w-72 lg:w-[420px]"
                animationData={image}
                loop={true}
              />
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="flex-1 p-8 rounded-2xl  my-auto items-center ">
          <div className="p-3 leading-6 max-w-xl">
            <h1 className=" mb-5 text-black text-3xl lg:text-5xl font-bold">
              {" "}
              So , "who we are"?
            </h1>
            <h3 className="mb-5 text-black text-lg lg:text-2xl font-bold">
              Your Financial Guardians, Guiding You Towards Wealth and Freedom.
            </h3>

            <p className="text-gray-700 font-poppins text-justify ">
              At Asset Hexa, we're not just about numbers and spreadsheets.
              We're about empowering you to take control of your financial
              future and build the life you dream of. We're your trusted
              partners, your financial guardians, walking alongside you on your
              journey to wealth and freedom.
            </p>
           <a href="#contact">
              <button className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline  mt-2 ">
                Contact us
              </button>

           </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
