import { useContext, useEffect, useState } from "react";
import "../../src/App.css";
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
	// const [pieData, setPieData] = useState([]);

	// useEffect(() => {
	// 	axiosPublic.get(`/totalInExp?email=${user?.email}`).then((res) => {
	// 		setPieData(res?.data);
	// 	});
	// }, [axiosPublic]);


	const { data: PiData = [], refetch: PiREfetch } = useQuery({
		queryKey: ["piData"],
		queryFn: async () => {
			const res = await axiosPublic.get(
				`/totalInExp?email=${user?.email}`
			);
			return res.data;
		},
	});

	// https://asset-hexa-server.vercel.app/transections?ty pe=EXPENSE&email=backend@example.com

	// Loading Data for recent transection Table

	const { data: transectionData = [], refetch } = useQuery({
		queryKey: ["transeferData"],
		queryFn: async () => {
			const res = await axiosPublic.get(
				`/transections?email=${user?.email}`
			);
			return res.data;
		},
	});

	const sortedTransactions = [...transectionData];

	// Sorting by date in descending order
	sortedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Now sortedTransactions contains the sorted data by recent date
	console.log( "this is sorted data", sortedTransactions);

	console.log("transectionData", transectionData);

	const { data: AccountData = [] } = useQuery({
		queryKey: ["AccountData"],
		queryFn: async () => {
			const res = await axiosPublic.get(`/accounts?email=${user?.email}`);
			return res.data;
		},
	});	

	console.log(AccountData);
	// This is for Paichart (color and data fo piechart)

	const data01 = [
		{ name: "Income", value: PiData?.totalIncome },
		{ name: "Expanse", value: PiData?.totalExpense },
	];

	const COLORS = ["#317DF0", "#F8A11B"];

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
			form.reset();
			axiosPublic.post("/transections", incomeData).then((res) => {
				// console.log(res.data);
				if (res?.data.resultAccount.acknowledged) {
					toast.success("Income Data added Successfully");
					refetch()
					PiREfetch()
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
			// console.log(expanseData);
			form.reset();
			axiosPublic.post("/transections", expanseData).then((res) => {
				// console.log(res.data);
				if (res?.data.resultAccount.acknowledged) {
					toast.success("Expanse Data added Successfully");
					refetch()
					PiREfetch()
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
			// console.log(transferData);
			form.reset();
			axiosPublic.post("/transections", transferData).then((res) => {
				console.log(res.data);
				if (res?.data.resultTransec.acknowledged) {
					toast.success("Transfer Data added Successfully");
					refetch()
				}
			});
		}
	};

	const BGcolorsOfAccount = [
		"#FFE338",
		"#e94444",
		"#4CAF50",
		"#2196F3",
		"#9C27B0",
		"#FF9800",
		"#795548",
	];

	const getRandomColor = () => {
		// Generate a random index to pick a color from the array
		const randomIndex = Math.floor(
			Math.random() * BGcolorsOfAccount.length
		);
		return BGcolorsOfAccount[randomIndex];
	};

	return (
		<div className="p-8   bg-base-300 ">
			<div className=" ">
				<div className="bg-white p-4 flex rounded-xl gap-5 overflow-x-scroll scrollable-content ">
					<div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#449B38] to-[#34D399]  px-8  min-w-60 ">
						<h1 className="text-xl font-medium">Cash</h1>
						<p className="text-5xl font-semibold">$00</p>
					</div>
					<div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#F49328] to-[#E92A31]  px-8   min-w-60 ">
						<h1 className="text-xl font-medium">Nagad</h1>
						<p className="text-5xl font-semibold">$00</p>
					</div>
					<div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#49a7e0] to-[#8fd6ff]  px-8   min-w-60">
						<h1 className="text-xl font-medium">Saving</h1>
						<p className="text-5xl font-semibold">$00</p>
					</div>
					<div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-[#FFE338] to-[#e94444]  px-8  min-w-60 ">
						<h1 className="text-xl font-medium">Loan</h1>
						<p className="text-5xl font-semibold">$00</p>
					</div>
					{AccountData.map((item) => (
						<div
							style={{ backgroundColor: getRandomColor() }}
							key={item?.id}
							className=" overflow-scroll scrollable-content space-y-2 py-8 text-white rounded-xl  px-8  min-w-60 "
						>
							<h1 className="text-xl font-medium">
								{item?.account
}
							</h1>
							<p className="text-5xl font-semibold">
								${item?.amount}
							</p>
						</div>
					))}
				</div>

				<div className="flex gap-5 mt-5">
					<div className="bg-white ">
						<PieChart width={400} height={400}>
							<Pie
								dataKey="value"
								isAnimationActive={false}
								data={data01}
								cx="50%"
								cy="50%"
								outerRadius={140}
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
						</PieChart>{" "}
					</div>

					<div className="flex-1 overflow-y-scroll scrollable-content h-[500px] bg-white ">
						<h1 className="text-center    text-2xl my-2 ">
							{" "}
							Recent Transection
						</h1>
						<table className="table table-pin-rows  table-lg  text-center">
							<thead>
								<tr className="">
									<th>Date</th>
									<th>Time</th>
									<th>Type</th>
									<th>amount</th>
								</tr>
							</thead>
							<tbody className="  ">
								{sortedTransactions?.map((item) => (
									<tr key={item?.id} className="hover">
										<td>
											{" "}
											{new Date(
												item?.date
											).toLocaleDateString()}{" "}
										</td>
										<td>
											{" "}
											{new Date(
												item?.date
											).toLocaleTimeString()}{" "}
										</td>
										<td> {item?.type} </td>
										{/* <td>{item?.category}</td> */}
										<td>${item?.amount}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div>
					{/* <h1 className="text-xl font-medium text-center mb-5">
						Transections
					</h1> */}
				</div>
			</div>

			{/* for add income , Expanse , transfer and parent Button  */}

			<div className="group parentbutton space-x-4 absolute bottom-16 right-20">
				<button className="group w-[50px] h-[50px] relative">
					<span className="group-hover:shadow-[0px_0px_30px_2px_#00EC25] group-hover:rotate-180 duration-500 z-30 absolute flex justify-center items-center bg-gradient-to-tr from-[#00EC25] to-[#00EC61] bottom-0 left-1/2 transform -translate-x-1/2 rounded-full w-[60px] h-[60px] bg-white">
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
					<span className="-z-10 bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#00EC25]/80 to-[#00EC61]/80 duration-300  absolute   rounded-full  z-20 w-0 h-0   group-hover:w-[130px] group-hover:h-[130px]"></span>{" "}
					<span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#00EC25]/50 to-[#00EC61]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[200px] group-hover:h-[200px] hover:duration-300 group-hover:block "></span>{" "}
					<span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#00EC25]/50 to-[#00EC61]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[260px] group-hover:h-[260px] hover:duration-300 group-hover:block "></span>{" "}
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
							<option value="Food">Food</option>
							<option value="Cloth">Cloth</option>
							<option value="Education">Education</option>
							<option value="Social">Social</option>
							<option value="Investment">Investment</option>
							<option value="Health">Health</option>
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
							Add Expanse
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
