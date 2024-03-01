import React, { useContext, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Budget = () => {
	const [budgetStateData, setBudgetStateData] = useState([]);
	const [collapse, setCollapse] = useState(true);
	const [updateIndex, setUpdateIndex] = useState(null);

	const axiosPublic = useAxios();
	// const axiosSecure = 
	const { user } = useContext(AuthContext);

	const { data: expanseData = {}, refetch:ExpanseRefetch } = useQuery({
		queryKey: ["expanseData"],
		queryFn: async () => {
			const res = await axiosPublic.get(`/ExpanseThisMonth/${user?.email}`);
			return res.data;
		},
	});
	console.log("expansedata" , expanseData);

	const { data: budgetData = [], refetch } = useQuery({
		queryKey: ["budgetData"],
		queryFn: async () => {
			const res = await axiosPublic.get(`/budget/${user?.email}`);
			setBudgetStateData(res.data);

			return res.data;
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(122);
		const budgetName = e.target.budget_Name.value;
		const budgetAmount = e.target.budget_amount.value;
		const email = user?.email;
		const date = new Date();

		const budgetInfo = { date, email, budgetName, budgetAmount };
		// console.log(budgetInfo);

		setBudgetStateData([...budgetStateData, budgetInfo]);
		e.target.reset();

		axiosPublic.post("/budget", budgetInfo).then((res) => {
			refetch();
			ExpanseRefetch()

		});
	};

	const handleCollapse = () => {
		setCollapse(false);

		document.getElementById("collapse").classList.remove("collapse-close");
		document.getElementById("collapse").classList.add("collapse-open");
	};

	const handleCollapseClose = () => {
		setCollapse(true);
		document.getElementById("collapse").classList.remove("collapse-open");
		document.getElementById("collapse").classList.add("collapse-close");
	};

	const handleUpdateUi = (index, id) => {
		console.log(index, id);
		setUpdateIndex(index);
	};

	const handleUpdate = (e, id) => {
		e.preventDefault();

		const budgetName = e.target.budget_Name.value;
		const budgetAmount = e.target.budget_amount.value;
		const date = new Date();

		const budgetInfo = { date, budgetName, budgetAmount };
		console.log(budgetInfo);


		const updatedBudgetData = budgetData.map(item => {
			if (item._id === id) {
				// Update the budget item with the new values
				return { ...item, budgetName, budgetAmount };
			}
			return item; // Return other items unchanged
		});
		setBudgetStateData(updatedBudgetData); // Update the state with the modified data
		setUpdateIndex(null); // Reset update index after updating


		axiosPublic.put(`/budget/${id}`, budgetInfo).then((res) => {
			console.log(res?.data);
			refetch()
			ExpanseRefetch()
			setUpdateIndex(null)
		});
	};

	const handleCancelUpdate = () => {
		setUpdateIndex(null);
	};

	const handleDelete = (id) => {
		console.log(id);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosPublic.delete(`/budget/${id}`).then((res) => {
					Swal.fire({
						title: "Deleted!",
						text: "Your file has been deleted.",
						icon: "success",
					});
					refetch();
					ExpanseRefetch()
				});
			}
		});
	};
``
	return (
		<div>
			<div></div>
			<div className="m-6 sticky top-0">
				<div className="bg-white p-4  flex justify-between">
					<div className="text text-red-500">
						<h1 className="text-sm">Total Expense</h1>
						<p className="text-3xl font-semibold">${expanseData?.totalExpenseInThisMonth}</p>
					</div>
					<div className="text-green-600 text-right">
						<h1 className="text-sm ">Total Budget</h1>
						<p className="text-3xl font-semibold">${expanseData?.totalBudgetInThisMonth}</p>
					</div>
				</div>

				{budgetStateData.map((item, index) =>
					updateIndex === index ? (
						<form onSubmit={(e) => handleUpdate(e, item?._id)}>
							<div className="text-xl flex items-center justify-between bg-white p-4 mt-4">
								<input
									required
									type="text"
									placeholder="Name of your Budget"
									className=" md:mt-0 md:px-0 border-gray-400   outline-none border-b-2  w-full md:max-w-xs"
									name="budget_Name"
									defaultValue={item?.budgetName}
								/>

								<div className="flex gap-4">
									<input
										required
										type="number"
										placeholder="Amount of your Budget"
										className=" md:mt-0 md:px-0 border-gray-400  md:text-right outline-none border-b-2  w-full md:max-w-xs"
										name="budget_amount"
										defaultValue={item?.budgetAmount}
									/>
									<div className="flex gap-4 ">
										<button
											onClick={handleCancelUpdate}
											className=" text-red-500 text-2xl"
										>
<MdOutlineCancel />

										</button>
										<button
											
											type="submit"
											className=" text-green-500"
										>
<FaCheck />
										</button>
									</div>
								</div>
							</div>
						</form>
					) : (
						<div
							key={item?.id || index}
							className="text-xl flex justify-between bg-white p-4	 mt-4"
						>
							<h1>{item?.budgetName} </h1>
							<div className="flex gap-5">
								<p className="mr-2">{item?.budgetAmount}</p>

								{item?._id ? (
									<button
										onClick={() =>
											handleUpdateUi(index, item?._id)
										}
										type="submit"
										className=" "
									>
										<FaEdit />

									</button>
								) : null}
								{item?._id ? (
									<button
										onClick={() => {
											handleDelete(item?._id);
										}}
										type="submit"
										className="text-red-500 "
									>
										<MdDelete />

									</button>
								) : null}


							</div>
						</div>
					)
				)}
				<div className="">
					<form onSubmit={handleSubmit}>
						<div
							tabIndex={0}
							id="collapse"
							className="text-xl relative  rounded-none  bg-white  mt-4 collapse collapse-arrow	 border border-base-300 "
						>
							{collapse ? (
								<div
									onClick={handleCollapse}
									className="collapse-title flex  text-xl relative justify-between font-medium"
								>
									<h1>{ budgetStateData?.length > 0 ? "Add Another Budget" : "Add Your First Budget"} </h1>
								</div>
							) : (
								<div
									onClick={handleCollapseClose}
									className="collapse-title flex  text-xl relative justify-between font-medium"
								>
									<h1>{ budgetStateData?.length > 0 ? "Add Another Budget" : "Add Your First Budget"} </h1>
								</div>
							)}

							<div className="collapse-content  z-[8888888888] flex flex-col md:flex-row justify-between">
								<input
									required
									type="text"
									placeholder="Name of your Budget"
									className=" outline-none border-b-2  w-full md:max-w-xs"
									name="budget_Name"
								/>
								<input
									required
									type="number"
									placeholder="Amount of your Budget"
									className="mt-4 md:mt-0 md:p-2 md:text-right outline-none border-b-2  w-full md:max-w-xs"
									name="budget_amount"
								/>
								<button
									type="submit"
									className=" top-4 right-12 absolute btn btn-outline btn-sm"
								>
									Add
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Budget;
