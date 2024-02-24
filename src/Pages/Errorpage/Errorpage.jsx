import { Link } from "react-router-dom";
const Errorpage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
          <img
            src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7971.jpg?w=740&t=st=1684514061~exp=1684514661~hmac=0c3022c2472dedcbe9ac690f705a0b05206a90419a303d11502396e4dfc955d7"
            alt="Error"
            className="max-w-md mb-8 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left">
          <h1 className="text-3xl text-sky-500 md:text-5xl font-bold mb-4">404 Page Not Found</h1>
          
           <Link to="/"> <button className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Go Back</button></Link>
          </div>
        </div>
      );
};

export default Errorpage;