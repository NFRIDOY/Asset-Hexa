import React, { useContext, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Budget = () => {
	const [budgetStateData, setBudgetStateData] = useState([]);
	const [collapse, setCollapse] = useState(true);
	const [showButton, setShowButton] = useState(false);
	const [showDelete , handleShowDelete] = useState(true)
	
	const axiosPublic = useAxios();
	const { user } = useContext(AuthContext);

	const { data: budgetData = [], refetch } = useQuery({
		queryKey: ["budgetData"],
		queryFn: async () => {
			const res = await axiosPublic.get(`/budget/${user?.email}`);
			setBudgetStateData(res.data);

			return res.data;
		},
	});

	console.log(budgetData);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(122);
		const budgetName = e.target.budget_Name.value;
		const budgetAmount = e.target.budget_amount.value;
		const email = user?.email;
		const date = new Date();

		const budgetInfo = { date, email, budgetName, budgetAmount };
		console.log(budgetInfo);

		setBudgetStateData([...budgetStateData, budgetInfo]);
		e.target.reset();

		axiosPublic.post("/budget", budgetInfo).then((res) => {
			console.log(res.data);
			refetch();
		});
	};
	console.log(budgetStateData);

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

	const handleUpdate = () => {
		console.log("update");
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
				});
			}
		});
	};

	return (
		<div>
			<div></div>
			<div className="m-6 sticky top-0">
				<div className="bg-white p-4  flex justify-between">
					<div className="text text-red-500">
						<h1 className="text-sm">Total Expense</h1>
						<p className="text-3xl font-semibold">50000</p>
					</div>
					<div className="text-green-600">
						<h1 className="text-sm">Total Budget</h1>
						<p className="text-3xl font-semibold">50000</p>
					</div>
				</div>

				<div className="text-xl flex justify-between bg-white p-4 mt-4">
					<h1>Shak Sobji </h1>
					<p>4000</p>
				</div>

				{budgetStateData.map((item, index) => (
					<div
						key={item?.id || index}
						className="text-xl flex justify-between bg-white p-4	 mt-4"
					>
						<h1>{item?.budgetName} </h1>
						<div className="flex gap-5">
							<p>{item?.budgetAmount}</p>
							

							{
								item?._id ? <button
								onClick={handleUpdate}
								type="submit"
								className=" btn btn-outline btn-sm "
							>
								update
							</button>: null
							}
							{
								item?._id ? <button
								onClick={() => {
									handleDelete(item?._id);
								}}
								type="submit"
								className="text-red-500 btn btn-outline btn-sm"
							>
								Delete
							</button> : null
							}
						</div>
					</div>
				))}
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
									<h1>Add Another Budget </h1>
								</div>
							) : (
								<div
									onClick={handleCollapseClose}
									className="collapse-title flex  text-xl relative justify-between font-medium"
								>
									<h1 onClick={handleCollapse}>
										Add Another Budget{" "}
									</h1>
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
