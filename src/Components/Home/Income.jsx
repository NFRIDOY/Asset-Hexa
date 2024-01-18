import { Link } from "react-router-dom";
import incomePic from "../../assets/Income/Mint.com-ZoneB-X-Small-2.jpg";
const Income = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center text-black mb-5 mt-10">
        Discover what&apos;s so amazing about Mint About Me
      </p>
      <h1 className="font-5xl font-poppins font-extrabold border-b-4 border-dimBlue text-white mb-10"></h1>

      <div
        id="about"
        className="max-w-7xl mx-auto xl:my-12 flex md:flex-row flex-col gap-10 overflow-hidden"
      >
        <div className="text-center md:mt-10   mt-1 w-1/3 m-auto">
          <img
            className="shadow-md rounded-full h-full w-96"
            src={incomePic}
            alt="profile"
          />
        </div>
        {/* Form */}
        <div className="flex-[0.75] p-8 rounded-2xl  my-auto items-center ">
          <div className="p-3 leading-6 ">
            <h3 className=" mb-5 text-black text-5xl font-bold">
              {" "}
              Keep your cashflow <br />
              crystal clear
            </h3>

            <p className="text-gray-700 font-poppins text-justify ">
              Effortlessly track your cashflow and gain insights that&apos;ll
              help you see easy opportunities to save.
            </p>
            <Link to="">
              <button className="btn  text-black bg-emerald-400 mt-4 md:mt-6">
                Sign Up For Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
