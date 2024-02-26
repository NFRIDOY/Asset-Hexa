import React from "react";

const test = () => {
	return (
		<button className="group w-[50px] h-[50px] relative">
			<span className="group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 absolute flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff] bottom-0 left-1/2 transform -translate-x-1/2 rounded-full w-[40px] h-[40px] bg-white">
				<svg
					width={25}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{" "}
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>{" "}
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>{" "}
					<g id="SVGRepo_iconCarrier">
						{" "}
						<g id="style=linear">
							{" "}
							<g id="add">
								{" "}
								<path
									id="vector"
									d="M11.998 5.84424L11.998 18.1604"
									stroke="#9EE6FD"
									strokeWidth="2"
									strokeLinecap="round"
								></path>{" "}
								<path
									id="vector_2"
									d="M18.1561 12.002L5.83998 12.0019"
									stroke="#9EE6FD"
									strokeWidth="2"
									strokeLinecap="round"
								></path>{" "}
							</g>{" "}
						</g>{" "}
					</g>{" "}
				</svg>{" "}
			</span>{" "}
			<span className="bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute   rounded-full  z-20 w-0 h-0   group-hover:w-[50px] group-hover:h-[50px]"></span>{" "}
			<span className="bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span>{" "}
		</button>
	);
};

export default test;
