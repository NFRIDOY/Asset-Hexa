import { isArray } from "lodash";
import { useState } from "react";

const Budget = () => {

	const [infoData, setInfoData] = useState([]);
	const [collapse, setCollapse] = useState(true)
	const [showButton, setShowButton] = useState(false)
	const [totalBudget, setTotalBudget] = useState(0);

	const getTotalBudget = (array) => {
		if (isArray(array)) {
			return array.reduce((sum, infoDataOne) => {sum + infoDataOne?.budgetAmount}, 0);
		}
		else {
			return -1;
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("handleSubmit Clicked");
		const budgetName = e.target.budget_Name.value
		const budgetAmount = e.target.budget_amount.value

		const budgetInfo = { budgetName, budgetAmount }
		console.log("New budgetInfo", budgetInfo);

		setInfoData([...infoData, budgetInfo])
		e.target.reset()

		console.log("infoData = ", infoData);
		// let getTotalBudget =

		// setTotalBudget(getTotalBudget);

	}
	console.log(infoData);

	// const getBudget = getTotalBudget();
	// setTotalBudget(getBudget);

	const handleCollapse = () => {
		setCollapse(false)

		document.getElementById("collapse").classList.remove('collapse-close');
		document.getElementById("collapse").classList.add('collapse-open');


	}

	const handleCollapseClose = () => {
		setCollapse(true)
		document.getElementById("collapse").classList.remove('collapse-open');
		document.getElementById("collapse").classList.add('collapse-close');

	}





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
						<p className="text-3xl font-semibold">{totalBudget}</p>
					</div>
				</div>

				<div className="text-xl flex justify-between bg-white p-4 mt-4">
					<h1>Shak Sobji </h1>
					<p>4000</p>
				</div>
				<div className="text-xl flex justify-between bg-white p-4 mt-4">
					<h1>Medicine </h1>
					<p>3000</p>
				</div>


				{/* Showing the budget data  */}
				{
					infoData.map(item => <div key={item} className="text-xl flex justify-between bg-white p-4	 mt-4">
						<h1>{item?.budgetName} </h1>
						<p>{item?.budgetAmount}</p>
					</div>)
				}
				<div className="">
					<form onSubmit={handleSubmit}>
						<div
							tabIndex={0} id="collapse"
							className="text-xl relative  rounded-none  bg-white  mt-4 collapse collapse-arrow	 border border-base-300 "
						>

							{
								collapse ? <div onClick={handleCollapse} className="collapse-title flex  text-xl relative justify-between font-medium">
									<h1 >Add Budget </h1>

								</div> : <div onClick={handleCollapseClose} className="collapse-title flex  text-xl relative justify-between font-medium">
									<h1 onClick={handleCollapse}> Add Budget </h1>



								</div>
							}



							<div className="collapse-content  z-[8888888888] flex flex-col md:flex-row justify-between">
								<input required
									type="text"
									placeholder="Name of your Budget"
									className=" outline-none border-b-2  w-full md:max-w-xs"
									name="budget_Name"
								/>
								<input required
									type="number"
									placeholder="Amount of your Budget"
									className="mt-4 md:mt-0 md:p-2 md:text-right outline-none border-b-2  w-full md:max-w-xs"
									name="budget_amount"
								/>
								<button type="submit" className=" top-4 right-12 absolute btn btn-outline btn-sm">Add</button>
							</div>
						</div>
					</form>
				</div>

			</div>
		</div>
	);
};

export default Budget;
