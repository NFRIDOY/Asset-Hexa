import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Budget = () => {
  const [budgetStateData, setBudgetStateData] = useState([]);
  const [collapse, setCollapse] = useState(true);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [budgetTotal, setBudgetTotal] = useState(0);
  const [fontSize, setFontSize] = useState("20px");

  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: expanseData = {}, refetch: ExpanseRefetch } = useQuery({
    queryKey: ["expanseData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ExpanseThisMonth/${user?.email}`);
      setBudgetTotal(res.data?.totalBudgetInThisMonth);
      return res.data;
    },
  });

  const { data: budgetData = [], refetch } = useQuery({
    queryKey: ["budgetData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/budget/${user?.email}`);
      setBudgetStateData(res.data);

      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetName = e.target.budget_Name.value;
    const budgetAmount = e.target.budget_amount.value;
    const email = user?.email;
    const date = new Date();
    setBudgetTotal(budgetTotal + parseInt(budgetAmount));

    const budgetInfo = { date, email, budgetName, budgetAmount };

    setBudgetStateData([...budgetStateData, budgetInfo]);
    e.target.reset();

    axiosSecure.post("/budget", budgetInfo).then(() => {
      refetch();
      ExpanseRefetch();
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

  const handleUpdateUi = (index) => {
    setUpdateIndex(index);
  };

  const handleUpdate = (e, id, prevAmount) => {
    e.preventDefault();

    const budgetName = e.target.budget_Name.value;
    const budgetAmount = e.target.budget_amount.value;
    const date = new Date();
    setBudgetTotal(
      parseInt(budgetTotal) - parseInt(prevAmount) + parseInt(budgetAmount)
    );

    const budgetInfo = { date, budgetName, budgetAmount };

    const updatedBudgetData = budgetData.map((item) => {
      if (item._id === id) {
        return { ...item, budgetName, budgetAmount };
      }
      return item;
    });
    setBudgetStateData(updatedBudgetData); // Update the state with the modified data
    setUpdateIndex(null); // Reset update index after updating

    axiosSecure.put(`/budget/${id}`, budgetInfo).then(() => {
      refetch();
      ExpanseRefetch();
      setUpdateIndex(null);
    });
  };

  const handleCancelUpdate = () => {
    setUpdateIndex(null);
  };

  const handleDelete = (id, budgetAmount, indexToRemove) => {
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
        setBudgetStateData((prevBudgetStateData) =>
          prevBudgetStateData?.filter((_, index) => index !== indexToRemove)
        );

        setBudgetTotal(budgetTotal - parseInt(budgetAmount));

        axiosSecure.delete(`/budget/${id}`).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
          ExpanseRefetch();
        });
      }
    });
  };

  const handleDeleteAll = () => {
    Swal.fire({
      title: "Delete All you budget ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setBudgetTotal(0);
        setBudgetStateData([]);
        axiosSecure.delete(`/budget`).then(() => {
          refetch();
          ExpanseRefetch();
        });
      }
    });
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()];

  useEffect(() => {
    const expanseLength = String(expanseData?.totalBudgetInThisMonth)?.length;
    const budgetLength = String(expanseData?.totalExpenseInThisMonth)?.length;
    const maxLengthOfAmount = expanseLength + budgetLength;
    if (maxLengthOfAmount < 7) {
      setFontSize("34px");
    } else if (maxLengthOfAmount < 10 && maxLengthOfAmount >= 7) {
      setFontSize("28px");
    } else if (maxLengthOfAmount >= 10) {
      setFontSize("20px");
    }
  }, [expanseData, fontSize]);

  return (
    <div>
      <div></div>
      <div className="m-6 sticky top-0">
        <div className="bg-white p-4  flex justify-between">
          <div className="text text-red-500">
            <h1 className="text-sm">Total Expense in {currentMonth} </h1>
            <p className="text-3xl font-semibold">
              <span className={`text-[${fontSize}]`}>
                ${expanseData?.totalExpenseInThisMonth}
              </span>
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-green-600 text-right">
              <h1 className="text-sm ">Total Budget</h1>
              <p className="text-3xl font-semibold">
                <span className={`text-[${fontSize}] md:text-2xl`}>
                  ${budgetTotal}
                </span>
              </p>
            </div>

            {budgetData?.length > 0 ? (
              <div className="" title="Delete All Budget">
                <button onClick={handleDeleteAll} className="   ">
                  <MdDelete className="text-xl  text-red-500" />
                </button>
                <button onClick={handleDeleteAll} className="   ">
                  <MdDelete className="text-xl top-9 right-3 absolute  text-red-500" />
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {budgetStateData.map((item, index) =>
          updateIndex === index ? (
            <form
              onSubmit={(e) => handleUpdate(e, item?._id, item?.budgetAmount)}
            >
              <div className="text-xl  flex items-center justify-between bg-white p-4 mt-4">
                <input
                  required
                  type="text"
                  placeholder="Name of your Budget"
                  className="mr-2 md:mt-0 md:px-0 border-gray-400   outline-none border-b-2   max-w-[150px] md:max-w-xs"
                  name="budget_Name"
                  defaultValue={item?.budgetName}
                />

                <div className="flex  gap-4">
                  <input
                    required
                    type="number"
                    placeholder="Amount of your Budget"
                    className="text-right  md:mt-0 md:px-0 border-gray-400  md:text-right outline-none border-b-2  w-full md:max-w-xs"
                    name="budget_amount"
                    defaultValue={item?.budgetAmount}
                    min="0"
                    max="999999999999"
                  />
                  <div className="flex gap-4 ">
                    <button
                      title="cancel editing"
                      onClick={handleCancelUpdate}
                      className=" text-red-500 text-2xl"
                    >
                      <MdOutlineCancel />
                    </button>
                    <button
                      title="Save changes"
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
                    title="Edit Budget"
                    onClick={() => handleUpdateUi(index, item?._id)}
                    type="submit"
                    className=" "
                  >
                    <FaEdit />
                  </button>
                ) : null}
                {item?._id ? (
                  <button
                    title="Delete this budget"
                    onClick={() => {
                      handleDelete(item?._id, item?.budgetAmount, index);
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
                  <h1>
                    {budgetStateData?.length > 0
                      ? "Add Another Budget"
                      : "Add Your First Budget"}{" "}
                  </h1>
                </div>
              ) : (
                <div
                  onClick={handleCollapseClose}
                  className="collapse-title flex  text-xl relative justify-between font-medium"
                >
                  <h1>
                    {budgetStateData?.length > 0
                      ? "Add Another Budget"
                      : "Add Your First Budget"}{" "}
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
                  max="999999999999"
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
