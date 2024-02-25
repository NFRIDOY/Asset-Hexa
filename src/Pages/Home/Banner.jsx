import { Link } from "react-router-dom";
import money from "../../assets/Banner/money.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Banner = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className="flex flex-col md:flex-row justify-center items-center rounded-br-[300px] bg-gradient-to-br from-[#23A455] to-[#34D399]  h-[600px]  bg-black   bg-cover bg-center">
			<div className="max-w-[500px] mt-10 p-4 space-y-7">
				<h1 className="text-4xl lg:text-6xl  font-bold text-white ">
					Get an easy <br className="hidden lg:block " /> ways to manage your finence{" "}
				</h1>
				<p className="text-[#F5F5DC] ">
					Transform your finances effortlessly with our dynamic
					account and finance platform – your key to smart, secure,
					and simplified money management!
				</p>
				{user ? (
					<Link to="/dashboard/accounts">
						<button className="btn btn-outline font-bold  text-white mt-4 ">
							Create Account
						</button>
					</Link>
				) : (
					<Link to="/login">
						<button className="btn btn-outline font-bold  text-white mt-4 ">
							GET STARTED
						</button>
					</Link>
				)}
			</div>
			<div className="w-full lg:w-1/3">
				<img className="w-full" src={money} alt="" />
			</div>
		</div>
	);
};

export default Banner;
