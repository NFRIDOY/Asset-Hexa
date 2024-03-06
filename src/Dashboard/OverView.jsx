import { useContext, useEffect, useState } from "react";
import "../../src/App.css";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { Link } from "react-router-dom";
import image from "../../src/assets/Nodataforund/NOdata.png";
import CountUp from "react-countup";
import useAxiosSecure from "../hooks/useAxiosSecure";

const OverView = () => {
  // state to hold  erroretext from diffrent modal

  const [incomeText, setIncomeText] = useState("");
  const [expanseText, setExpanseText] = useState("");
  const [transferText, setTransferText] = useState("");
  const [fontsize, setFontSize] = useState(16);

  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: PiData = [], refetch: PiREfetch } = useQuery({
    queryKey: ["piData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/totalInExp?email=${user?.email}`);
      return res.data;
    },
  });

  const { data: transectionData = [], refetch } = useQuery({
    queryKey: ["transeferData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/transections?email=${user?.email}`);
      return res.data;
    },
  });

  const sortedTransactions = [...transectionData];

  sortedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  const { data: AccountData = [], refetch: accountRefetch } = useQuery({
    queryKey: ["AccountData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/accounts?email=${user?.email}`);
      return res.data;
    },
  });

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
    const amount = parseFloat(form.amount.value);
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
      axiosSecure.post("/transections", incomeData).then((res) => {
        // console.log(res.data);
        if (res?.data.resultAccount.acknowledged) {
          toast.success("Income Data added Successfully");
          refetch();
          PiREfetch();
          accountRefetch();
        }
      });
    }
  };

  // this is function to handle Expanse Data from to Post Data
  // console.log("pidata" , )

  const handleSubmitExpanse = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = new Date(form.date.value);
    const amount = parseFloat(form.amount.value);
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

      const AccountsName = AccountData.find(
        (filteredAccount) => filteredAccount.account === account
      );

      if (AccountsName.amount < amount) {
        setExpanseText("you can't add expanse more than your balance");
        return;
      }

      setExpanseText("");
      form.reset();
      axiosSecure.post("/transections", expanseData).then((res) => {
        if (res?.data.resultAccount.acknowledged) {
          toast.success("Expanse Data added Successfully");
          refetch();
          PiREfetch();
          accountRefetch();
        }
      });
    }
  };

  // this is function to handle Expanse Data from to Post Data

  const handleSubmittransfer = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const amount = parseFloat(form.amount.value);
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
      // console.log(transferData);

      const AccountsName = AccountData.find(
        (filteredAccount) => filteredAccount.account === from
      );

      if (AccountsName.amount < amount) {
        setTransferText("you can't transfer more than your balance");
        return;
      }

      if (from === to) {
        setTransferText("you can't transfer  balance in same account");
        return;
      }

      setTransferText("");
      // console.log(transferData);
      form.reset();
      axiosSecure.post("/transections", transferData).then((res) => {
        // console.log(res.data);
        if (res?.data.resultTransec.acknowledged) {
          toast.success("Transfer Data added Successfully");
          refetch();
          accountRefetch();
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
    const randomIndex = Math.floor(Math.random() * BGcolorsOfAccount.length);
    return BGcolorsOfAccount[randomIndex];
  };

  const handleParent = () => {
    let elements = document.querySelectorAll(".no-hover");

    elements.forEach(function (element) {
      element.classList.remove("no-hover");
      // console.log(element);
    });
  };

  const addClass = () => {
    let elements = document.querySelectorAll(".custom-button");
    elements.forEach(function (element) {
      element.classList.add("no-hover");
    });
  };

  useEffect(() => {
    const maxLengthOfAmount = AccountData?.reduce(
      (maxLength, obj) => Math.max(maxLength, String(obj.amount).length),
      0
    );
    if (maxLengthOfAmount < 7) {
      setFontSize(40);
    } else if (maxLengthOfAmount < 10 && maxLengthOfAmount >= 7) {
      setFontSize(30);
    } else if (maxLengthOfAmount > 10) {
      setFontSize(18);
    }
  }, [fontsize, AccountData]);

  return (
    <div className="p-5  bg-base-300 ">
      <div className=" ">
        <div className="bg-white p-4 flex rounded-xl gap-5 overflow-x-auto min-h-40">
          {AccountData?.length == 0 ? (
            <div className="flex min-w-[500px] items-center">
              <img src={image} className="w-44 " alt="" />
              <div className="space-y-2">
                <h1 className="text-2xl ">No Account to Show </h1>
                <p>
                  Please Add Account first to add income , expanse and other
                  functionality
                </p>
                <Link
                  to="/dashboard/addBalance"
                  className="btn btn-outline text-green-500"
                >
                  Add Account
                </Link>
              </div>
            </div>
          ) : AccountData ? (
            AccountData.map((item) => (
              <div
                style={{ backgroundColor: getRandomColor() }}
                key={item?.id}
                className=" overflow-scroll scrollable-content space-y-2 py-8 text-white rounded-xl  px-8 min-w-48 md:min-w-60 "
              >
                <h1 className="text-xl font-medium">{item?.account}</h1>
                <p
                  style={{ fontSize: fontsize }}
                  className="text-3xl md:text-5xl font-semibold"
                >
                  $
                  <CountUp end={item?.amount} />
                  {/* {item?.amount} */}
                </p>
              </div>
            ))
          ) : (
            <Link
              to={"../../dashboard/AddBalance"}
              className="h-32 w-full flex justify-center items-center "
            >
              {" "}
              <p className="btn btn-accent w-fit ">Create Accounts First</p>
            </Link>
          )}
        </div>

        <div className="flex flex-col lg:flex-row justify gap-5    mt-5  ">
          <div className="bg-white min-h-[400px] lg:min-h-[300px]    w-full lg:w-1/3  flex justify-center items-center h-0  lg:h-[calc(100vh-270px)] mx-auto">
            {PiData?.totalIncome == 0 && PiData?.totalExpense == 0 ? (
              <div>
                <h1>No Data to show</h1>{" "}
              </div>
            ) : (
              <PieChart width={350} height={350}>
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
              </PieChart>
            )}
          </div>

          <div className="flex-1 relative min-h-[300px] overflow-y-scroll scrollable-content lg:h-[calc(100vh-270px)] bg-white mb-14 md:mb-0">
            <h1 className="text-center    text-2xl my-2 ">
              {" "}
              Recent Transection
            </h1>
            <table className="table  md:table-pin-rows table-md md:table-lg  text-center">
              <thead>
                <tr className="">
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>amount</th>
                </tr>
              </thead>
              <tbody className="  ">
                {sortedTransactions?.length == 0 ? (
                  <div className="mt-10 md:mt-20  absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 ">
                    <h1 className="text-2xl ">No Transaction to show</h1>
                  </div>
                ) : (
                  sortedTransactions?.map((item) => (
                    <tr key={item?.id} className="hover">
                      <td> {new Date(item?.date).toLocaleDateString()} </td>
                      <td> {new Date(item?.date).toLocaleTimeString()} </td>
                      <td> {item?.type} </td>
                      {/* <td>{item?.category}</td> */}
                      <td>${item?.amount}</td>
                    </tr>
                  ))
                )}
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

      <div className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-[#00EC25] flex items-center justify-center"></div>
      <div className="group p-4 bg-white  md:px-0 md:py-0  rounded-full   parentbutton   space-x-4 fixed  z-[9999] bottom-8  md:bottom-16 right-[50%] translate-x-1/2  md:right-28">
        <button
          onTouchEnd={addClass}
          onClick={handleParent}
          className="group w-[50px] h-[50px] relative"
        >
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
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      id="vector_2"
                      d="M18.1561 12.002L5.83998 12.0019"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span className=" bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#00EC25]/80 to-[#00EC61]/80 duration-300  absolute   rounded-full  z-20 w-0 h-0   group-hover:w-[130px] group-hover:h-[130px]"></span>{" "}
          <span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#00EC25]/50 to-[#00EC61]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[200px] group-hover:h-[200px] hover:duration-300 group-hover:block"></span>{" "}
          <span className=" bg-gradient-to-tr bottom-0 left-1/2 from-[#00EC25]/50 to-[#00EC61]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[260px] group-hover:h-[260px] hover:duration-300 group-hover:block"></span>{" "}
        </button>

        <button
          onClick={() => {
            document.getElementById("modal_income").showModal();
          }}
          className="custom-button no-hover income"
        >
          Add Income
        </button>
        <button
          onClick={() => document.getElementById("modal_expanse").showModal()}
          className="custom-button no-hover  expanse"
        >
          Add Expence{" "}
        </button>

        <button
          onClick={() => document.getElementById("modal_transfer").showModal()}
          className="custom-button no-hover Transfer"
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
              <input name="date" placeholder="" type="datetime-local" />
            </div>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              className="input input-bordered w-full "
              max="999999999999"
              min="0"
            />
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue=""
            >
              <option disabled value="">
                Select Category
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
                Select Account
              </option>
              {AccountData.map((acc) => (
                <option key={acc?._id} value={acc?.account}>
                  {acc?.account} (${acc?.amount})
                </option>
              ))}
              {/* <option value="Cash">Cash</option>
							<option value="Accounts">Accounts</option>
							<option value="Card">Card</option> */}
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
          <button onClick={addClass}>close</button>
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
              <input name="date" placeholder="" type="datetime-local" />
            </div>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              className="input input-bordered w-full "
              max="999999999999"
              min="0"
            />
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue=""
            >
              <option disabled value="">
                Select Category
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
                Select Account
              </option>
              {AccountData.map((acc) => (
                <option key={acc?._id} value={acc?.account}>
                  {acc?.account} (${acc?.amount})
                </option>
              ))}
              {/* <option value="Cash">Cash</option>
							<option value="Accounts">Accounts</option>
							<option value="Card">Card</option> */}
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
              <input name="date" placeholder="" type="datetime-local" />
            </div>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              min="0"
              max="999999999999"
              onInput="validity.valid||(value='');"
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
              {AccountData.map((acc) => (
                <option key={acc?._id} value={acc?.account}>
                  {acc?.account} (${acc?.amount})
                </option>
              ))}
              {/* <option value="Cash">Cash</option>
              <option value="Accounts">Accounts</option>
              <option value="Card">Card</option> */}
            </select>

            <select
              name="to"
              className="select select-bordered w-full"
              defaultValue=""
            >
              <option disabled value="">
                To
              </option>
              {AccountData.map((acc) => (
                <option key={acc?._id} value={acc?.account}>
                  {acc?.account} (${acc?.amount})
                </option>
              ))}
              {/* <option value="Cash">Cash</option>
              <option value="Accounts">Accounts</option>
              <option value="Card">Card</option> */}
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
