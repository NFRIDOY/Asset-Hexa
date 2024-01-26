import { useContext, useEffect, useState } from "react";
import "../../src/App.css";
// import {
// 	LineChart,
// 	Line,
// 	XAxis,
// 	YAxis,
// 	CartesianGrid,
// 	Tooltip,
// 	Legend,
// 	ResponsiveContainer,
// } from "recharts";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const OverView = () => {

    // state to hold  erroretext from diffrent modal 

	const [incomeText, setIncomeText] = useState("");
	const [expanseText, setExpanseText] = useState("");
	const [transferText, setTransferText] = useState("");

	const axiosPublic = useAxios();
	const { user } = useContext(AuthContext);
	const [pieData, setPieData] = useState([]);
	const [pieLabel, setPieLabel] = useState([]);


    // Loading Data form Paichart 

    useEffect(() => {
        axiosPublic.get("/accountPi?email=front@example.com").then((res) => {
          //   console.log(res.data);
          setPieData(res.data.accPiData);
          setPieLabel(res.data.accPiLebel);
        });
      }, [axiosPublic]);

	// https://asset-hexa-server.vercel.app/transections?ty pe=EXPENSE&email=backend@example.com

    // Loading Data for TransferData Table

	const { data: transferData = [], refetch } = useQuery({
		queryKey: ["transeferData"],
		queryFn: async () => {
			const res = await axiosPublic.get(
				`/transections?type=TRANSFER&email=${user?.email}`
			);
			return res.data;
		},
	});
    // this is Data for Line Chart
	// const data = [
	// 	{
	// 		name: "Jan",
	// 		Income: 4000,
	// 		Expenses: 2400,
	// 		amt: 2400,
	// 	},
	// 	{
	// 		name: "Feb",
	// 		Income: 3000,
	// 		Expenses: 1398,
	// 		amt: 2210,
	// 	},
	// 	{
	// 		name: "March",
	// 		Income: 2000,
	// 		Expenses: 9800,
	// 		amt: 2290,
	// 	},
	// 	{
	// 		name: "April",
	// 		Income: 2780,
	// 		Expenses: 3908,
	// 		amt: 2000,
	// 	},
	// 	{
	// 		name: "May",
	// 		Income: 1890,
	// 		Expenses: 4800,
	// 		amt: 2181,
	// 	},
	// 	{
	// 		name: "June",
	// 		Income: 2390,
	// 		Expenses: 3800,
	// 		amt: 2500,
	// 	},
	// 	{
	// 		name: "July",
	// 		Income: 3490,
	// 		Expenses: 4300,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Aug",
	// 		Income: 3490,
	// 		Expenses: 4300,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Sep",
	// 		Income: 3490,
	// 		Expenses: 4300,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Oct",
	// 		Income: 3490,
	// 		Expenses: 4300,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Nov",
	// 		Income: 3490,
	// 		Expenses: 4300,
	// 		amt: 2100,
	// 	},
	// 	{
	// 		name: "Dec",
	// 		Income: 3490,
	// 		Expenses: 4300,
	// 		amt: 2100,
	// 	},
	// ];


    // This is for Paichart (color and data fo piechart)

	const data01 = [
		{ name: pieLabel[0], value: pieData[0] },
		{ name: pieLabel[1], value: pieData[1] },
		{ name: pieLabel[2], value: 500 },
		{ name: pieLabel[3], value: 400 },
		{ name: pieLabel[4], value: 100 },
		{ name: pieLabel[5], value: pieData[5] },
		{ name: pieLabel[6], value: pieData[5] },
	];

	const COLORS = [
		"#0088FE",
		"#00C49F",
		"#FFBB28",
		"#FF8042",
		"#ff006e",
		"#fb6f92",
	];

    // this is function to handle income Data from to Post Data
   
	const handleSubmitIncome = (e) => {
        e.preventDefault();
		const form = e.target;
		const date = new Date(form.date.value);
		const amount = form.amount.value;
		const category = form.category.value;
		const account = form.account.value;
		const note = form.note.value;
		const email = user.email;
		const type = "INCOME";

		if (
			date == "Invalid Date" ||
			amount == "" ||
			category == "" ||
			account == "" ||
			note == ""
		) {
			setIncomeText("please fill out all the form");
		} else {
			const incomeData = {
				email,
				date,
				amount,
				category,
				account,
				note,
				type,
			};
			setIncomeText("");
			console.log(incomeData), "thiw is incoem t=data";
			form.reset();
			axiosPublic.post("/transections", incomeData).then((res) => {
				console.log(res.data);
				if (res?.data.resultAccount.acknowledged) {
					toast.success("Income Data added Successfully");
				}
			});
		}
	};


    // this is function to handle Expanse Data from to Post Data

	const handleSubmitExpanse = (e) => {
		e.preventDefault();
		const form = e.target;
		const date = new Date(form.date.value);
		const amount = form.amount.value;
		const category = form.category.value;
		const account = form.account.value;
		const note = form.note.value;
		const email = user.email;
		const type = "EXPENSE";

		if (
			date == "Invalid Date" ||
			amount == "" ||
			category == "" ||
			account == "" ||
			note == ""
		) {
			setExpanseText("please fill out all the form");
		} else {
			const expanseData = {
				email,
				date,
				amount,
				category,
				account,
				note,
				type,
			};
			setExpanseText("");
			console.log(expanseData);
			form.reset();
			axiosPublic.post("/transections", expanseData).then((res) => {
				console.log(res.data);
				if (res?.data.resultAccount.acknowledged) {
					toast.success("Expanse Data added Successfully");
				}
			});
		}
	};


    // this is function to handle Expanse Data from to Post Data

	const handleSubmittransfer = (e) => {
		e.preventDefault();
		const form = e.target;
		const date = form.date.value;
		const amount = form.amount.value;
		const from = form.from.value;
		const to = form.to.value;
		const note = form.note.value;
		const email = user.email;
		const type = "TRANSFER";

		if (
			date == "Invalid Date" ||
			amount == "" ||
			from == "" ||
			to == "" ||
			note == ""
		) {
			setTransferText("please fill out all the form");
		} else {
			const transferData = { email, date, amount, from, to, note, type };
			setTransferText("");
			console.log(transferData);
			form.reset();
			axiosPublic.post("/transections", transferData).then((res) => {
				console.log(res.data);
				if (res?.data.resultAccount.acknowledged) {
					toast.success("Transfer Data added Successfully");
				}
			});
		}
	};

	return (
		<div className="bg-sky-200 h-screen max-h-[600px] ">
			<div className="flex justify-around flex-col items-center lg:flex-row gap-5">

                {/* this div is for LineChart */}
				{/* <div className="lg:overflow-x-auto">
					<LineChart
						width={700}
						height={400}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="Income"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
						/>
						<Line
							type="monotone"
							dataKey="Expenses"
							stroke="#82ca9d"
						/>
					</LineChart>
				</div> */}

                {/* this div is for piechart */}

				<div className="flex justify-around flex-col items-center overflow-clip">
					
					<PieChart width={400} height={400}>
						<Pie
							dataKey="value"
							isAnimationActive={false}
							data={data01}
							cx="50%"
							cy="50%"
							outerRadius={80}
							fill="#8884d8"
							label
						>
							{data01?.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>

						<Tooltip />
						<Legend />
					</PieChart>
				</div>

                {/* this div is to show transfer Data table */}
				<div>
					<h1 className="text-xl font-medium text-center mb-5">
						Transections{" "}
					</h1>
					<div className="overflow-x-auto">
						<table className="table text-center">
							{/* head */}
							<thead>
								<tr>
									<th>Date</th>
									<th>Time</th>
									<th>from</th>
									<th>To</th>
									<th>amount</th>
								</tr>
							</thead>
							<tbody>
								{transferData?.map((item) => (
									<tr key={item?.id} className="hover">
										<td> {new Date(
									item?.date
								).toLocaleDateString()} </td>
										<td> {new Date(
									item?.date
								).toLocaleTimeString()} </td>
										<td> {item?.from} </td>
										<td>{item?.to}</td>
										<td>${item?.amount}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>


            {/* for add income , Expanse , transfer and parent Button  */}

			<div className="group parentbutton space-x-4 absolute bottom-8 right-20">
				<button className="group w-[50px] h-[50px] relative">
					<span className="group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 absolute flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff] bottom-0 left-1/2 transform -translate-x-1/2 rounded-full w-[60px] h-[60px] bg-white">
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
											stroke="#000"
											strokeWidth="2"
											strokeLinecap="round"
										></path>{" "}
										<path
											id="vector_2"
											d="M18.1561 12.002L5.83998 12.0019"
											stroke="#000"
											strokeWidth="2"
											strokeLinecap="round"
										></path>{" "}
									</g>{" "}
								</g>{" "}
							</g>{" "}
						</svg>{" "}
					</span>{" "}
					<span className="-z-10 bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute   rounded-full  z-20 w-0 h-0   group-hover:w-[130px] group-hover:h-[130px]"></span>{" "}
					<span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[200px] group-hover:h-[200px] hover:duration-300 group-hover:block "></span>{" "}
					<span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[260px] group-hover:h-[260px] hover:duration-300 group-hover:block "></span>{" "}
				</button>

				<button
					onClick={() => {
						document.getElementById("modal_income").showModal();
					}}
					className="custom-button income"
				>
					Add Income
				</button>
				<button
					onClick={() =>
						document.getElementById("modal_expanse").showModal()
					}
					className="custom-button expanse"
				>
					Add Expence{" "}
				</button>

				<button
					onClick={() =>
						document.getElementById("modal_transfer").showModal()
					}
					className="custom-button Transfer"
				>
					Add Transfer{" "}
				</button>
			</div>

			{/*-------------------- Modal for Indcome----------------------- */}

			<dialog id="modal_income" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-center mb-6">
						Input Your Income Data
					</h3>
					<form onSubmit={handleSubmitIncome} className="space-y-4">
						<div className="input input-bordered flex  justify-between items-center">
							<p> Date</p>
							<input
								name="date"
								placeholder=""
								type="datetime-local"
							/>
						</div>
						<input
							name="amount"
							type="number"
							placeholder="Amount"
							className="input input-bordered w-full "
						/>
						<select
							name="category"
							className="select select-bordered w-full"
							defaultValue=""
						>
							<option disabled value="">
								select Category
							</option>
							<option value="Allowance">Allowance</option>
							<option value="Salary">Salary</option>
							<option value="pettyCash">pettyCash</option>
							<option value="Bonus">Bonus</option>
							<option value="Others">Others</option>
						</select>

						<select
							name="account"
							className="select select-bordered w-full"
							defaultValue=""
						>
							<option disabled value="">
								select Account
							</option>
							<option value="Cash">Cash</option>
							<option value="Accounts">Accounts</option>
							<option value="Card">Card</option>
						</select>
						<input
							name="note"
							type="text"
							placeholder="Note"
							className="input input-bordered w-full "
						/>
						<p className="text-red-500">{incomeText}</p>
						<button className="btn btn-info w-full " type="submit">
							Add Income
						</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			{/*-------------------- Modal for Expanse----------------------- */}

			<dialog id="modal_expanse" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-center mb-6">
						Input Your Expance Data
					</h3>
					<form onSubmit={handleSubmitExpanse} className="space-y-4">
						<div className="input input-bordered flex  justify-between items-center">
							<p> Date</p>
							<input
								name="date"
								placeholder=""
								type="datetime-local"
							/>
						</div>
						<input
							name="amount"
							type="number"
							placeholder="Amount"
							className="input input-bordered w-full "
						/>
						<select
							name="category"
							className="select select-bordered w-full"
							defaultValue=""
						>
							<option disabled value="">
								select Category
							</option>
							<option value="Allowance">Food</option>
							<option value="Salary">Cloth</option>
							<option value="pettyCash">Education</option>
							<option value="Bonus">Social</option>
							<option value="Others">Investment</option>
							<option value="Others">Health</option>
						</select>

						<select
							name="account"
							className="select select-bordered w-full"
							defaultValue=""
						>
							<option disabled value="">
								select Account
							</option>
							<option value="Cash">Cash</option>
							<option value="Accounts">Accounts</option>
							<option value="Card">Card</option>
						</select>
						<input
							name="note"
							type="text"
							placeholder="Note"
							className="input input-bordered w-full "
						/>
						<p className="text-red-500">{expanseText}</p>
						<button className="btn btn-info w-full " type="submit">
							Add Income
						</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			{/* -------------------------modal for transfer-------------- */}

			<dialog id="modal_transfer" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-center mb-6">
						Input Your transfer Data
					</h3>
					<form onSubmit={handleSubmittransfer} className="space-y-4">
						<div className="input input-bordered flex  justify-between items-center">
							<p> Date</p>
							<input
								name="date"
								placeholder=""
								type="datetime-local"
							/>
						</div>
						<input
							name="amount"
							type="number"
							placeholder="Amount"
							min="0"
							oninput="validity.valid||(value='');"
							className="input input-bordered w-full "
						/>
						<select
							name="from"
							className="select select-bordered w-full"
							defaultValue=""
						>
							<option disabled value="">
								From
							</option>
							<option value="Cash">Cash</option>
							<option value="Accounts">Accounts</option>
							<option value="Card">Card</option>
						</select>

						<select
							name="to"
							className="select select-bordered w-full"
							defaultValue=""
						>
							<option disabled value="">
								To
							</option>
							<option value="Cash">Cash</option>
							<option value="Accounts">Accounts</option>
							<option value="Card">Card</option>
						</select>
						<input
							name="note"
							type="text"
							placeholder="Note"
							className="input input-bordered w-full "
						/>
						<p className="text-red-500">{transferText}</p>
						<button className="btn btn-info w-full " type="submit">
							Save
						</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
};

export default OverView;
