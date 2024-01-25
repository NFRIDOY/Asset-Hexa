import { useContext, useState } from "react";
import "../../src/App.css"
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../providers/AuthProvider";

const OverView = () => {
	const [incomeText, setIncomeText] = useState("");
	const [expanseText, setExpanseText] = useState("");
	const [transferText, setTransferText] = useState("");
    const {user}= useContext(AuthContext)
    console.log(user);

	const data = [
		{
			name: "Jan",
			Income: 4000,
			Expenses: 2400,
			amt: 2400,
		},
		{
			name: "Feb",
			Income: 3000,
			Expenses: 1398,
			amt: 2210,
		},
		{
			name: "March",
			Income: 2000,
			Expenses: 9800,
			amt: 2290,
		},
		{
			name: "April",
			Income: 2780,
			Expenses: 3908,
			amt: 2000,
		},
		{
			name: "May",
			Income: 1890,
			Expenses: 4800,
			amt: 2181,
		},
		{
			name: "June",
			Income: 2390,
			Expenses: 3800,
			amt: 2500,
		},
		{
			name: "July",
			Income: 3490,
			Expenses: 4300,
			amt: 2100,
		},
		{
			name: "Aug",
			Income: 3490,
			Expenses: 4300,
			amt: 2100,
		},
		{
			name: "Sep",
			Income: 3490,
			Expenses: 4300,
			amt: 2100,
		},
		{
			name: "Oct",
			Income: 3490,
			Expenses: 4300,
			amt: 2100,
		},
		{
			name: "Nov",
			Income: 3490,
			Expenses: 4300,
			amt: 2100,
		},
		{
			name: "Dec",
			Income: 3490,
			Expenses: 4300,
			amt: 2100,
		},
	];

	const handleSubmitIncome = (e) => {
		e.preventDefault();
		const form = e.target;
		const date = new Date(form.date.value);
		const amount = form.amount.value;
		const category = form.category.value;
		const account = form.account.value;
		const note = form.note.value;
        const email = user.email

		if (
			date == "Invalid Date" ||
			amount == "" ||
			category == "" ||
			account == "" ||
			note == ""
		) {
			setIncomeText("please fill out all the form");
		} else {
			const incomeData = {email, date, amount, category, account, note };
			setIncomeText("");
			console.log(incomeData);
			form.reset();
		}
	};

	const handleSubmitExpanse = (e) => {
		e.preventDefault();
		const form = e.target;
		const date = new Date(form.date.value);
		const amount = form.amount.value;
		const category = form.category.value;
		const account = form.account.value;
		const note = form.note.value;
        const email = user.email

		if (
			date == "Invalid Date" ||
			amount == "" ||
			category == "" ||
			account == "" ||
			note == ""
		) {
			setExpanseText("please fill out all the form");
		} else {
			const expanseData = {email, date, amount, category, account, note };
			setExpanseText("");
			console.log(expanseData);
			form.reset();
		}
	};

	const handleSubmittransfer = (e) => {
		e.preventDefault();
		const form = e.target;
		const date = form.date.value
		const amount = form.amount.value;
		const from = form.from.value;
		const to = form.to.value;
		const note = form.note.value;
        const email = user.email

		if (
			date == "Invalid Date" ||
			amount == "" ||
			from == "" ||
			to == "" ||
			note == ""
		) {
			setTransferText("please fill out all the form");
		} else {
			const expanseData = {email , date, amount, from, to, note  };
			setTransferText("");
			console.log(expanseData);
			form.reset();
		}
	};



	return (
		<div>
			<div className="flex gap-5">
				<div>
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
				</div>
				<div>
					<h1 className="text-xl font-medium text-center mb-5">
						Transections{" "}
					</h1>
					<div className="overflow-x-auto">
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th>Note</th>
									<th>Type</th>
									<th>Transection</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								{/* row 2 */}
								<tr className="hover">
									<td>Hart Hagerty</td>
									<td>Desktop Support Technician</td>
									<td>Purple</td>
								</tr>
								{/* row 3 */}
								<tr>
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
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
					<span className="-z-10 bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute   rounded-full  z-20 w-0 h-0   group-hover:w-[130px] group-hover:h-[130px]">
                   </span>{" "}
					<span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[200px] group-hover:h-[200px] hover:duration-300 group-hover:block ">
                    </span>{" "}
					<span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[260px] group-hover:h-[260px] hover:duration-300 group-hover:block ">
                    </span>{" "}
				</button>

				<button
					onClick={() => {
                        document.getElementById("modal_expanse").showModal();
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
