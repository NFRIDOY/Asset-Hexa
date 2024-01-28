import { Link } from "react-router-dom";
import money from "../../assets/Banner/money.png";
const Banner = () => {
<<<<<<< HEAD
	return (
		<div className="flex flex-col md:flex-row justify-center items-center rounded-br-[300px] bg-gradient-to-br from-[#23A455] to-[#34D399] mt-4 h-[600px]  bg-black   bg-cover bg-center">
			




      

			<div className="max-w-[500px] mt-10 p-4 space-y-7">
				<h1 className="text-4xl lg:text-6xl  font-bold text-white ">
					Get an easy <br /> ways to manage your finence{" "}
				</h1>
				<p className="text-[#F5F5DC] ">
					Transform your finances effortlessly with our dynamic
					account and finance platform – your key to smart, secure,
					and simplified money management!
				</p>
				<Link to="/login">
          <button className="btn btn-outline font-bold  text-white mt-4 ">
            GEt STARTED
=======
  return (
    <div className="bg-[url('https://i.ibb.co/M9Sp7Nx/businessmen-hands-white-table-with-documents-drafts.jpg')] h-[300px] lg:h-[600px] rounded bg-black bg-blend-overlay bg-opacity-60 bg-cover bg-center">
      <div className="text-center pt-[70px] md:pt-[90px] w-full lg:p-[150px] ">
        <h2 className="text-white lg:text-3xl  font-bold italic">
          Transform your finances effortlessly with our dynamic account and
          finance platform – your key to smart, secure, and simplified money
          management!
        </h2>
      </div>
      <div className="text-center mt-8 lg:-mt-[120px]">
        <Link to="/login">
          <button className="btn font-bold bg-emerald-400 text-white border-none  ">
            Login Now
>>>>>>> 06788017c9bd1994c17b54c5ef40b7cf7b959ebc
          </button>
        </Link>
			</div>
			<div className="w-full lg:w-1/3">
				<img className="w-full" src={money} alt="" />
			</div>
		</div>
	);
};

export default Banner;
