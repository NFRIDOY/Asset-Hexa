import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import axios from "axios";

const AccountUpdate = () => {
  const { id } = useParams();
  const [Update, setUpdate] = useState([]);
  const axiosSecure = useAxiosSecure();
  // console.log(id);
  useEffect(() => {
    // Fetching account data based on the user's email
    axiosSecure
      .get(`/accounts/${id}`)
      // axios.get(`http://localhost:5000/accounts/${id}`)
      .then((data) => {
        setUpdate(data?.data);
        // console.log(data.data);
      });
  }, [axiosSecure, id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const group = form.group.value;
    const account = form.account.value;
    const amount = parseFloat(form.amount.value);
    const description = form.description.value;
    e.target.reset();
    const addBalance = {
      group,
      account,
      amount,
      description,
    };

    axiosSecure.put(`/accounts/${Update._id}`, addBalance).then((res) => {
      // console.log(res.data);
      if (res?.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="pt-10 pb-10 max-w-7xl mx-auto md:w-full    ">
          {/* <div className=" md:ml-72  pt-16 pl-16 pr-16 pb-16 rounded-tl-badge rounded-br-badge bg-[#3EEE2A]  w-[450px]"> */}
          <div className=" p-6 rounded-md bg-gradient-to-tr from-[#8dc487] to-[#b7f4b1f7]">
            <form onSubmit={handleUpdate}>
              <div className="flex gap-[81px] mb-2">
                <label className="label w-fit">
                  <span className="label-text text-[#000]">Group </span>
                </label>
                <select
                  defaultValue={Update?.group}
                  name="group"
                  className="w-full h-10 hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded hover:outline-none outline-none"
                >
                  <option disabled selected className="text-[#000]">
                    Select Option
                  </option>
                  <option className="text-[#000]">Cash</option>
                  <option className="text-[#000]">Account</option>
                  <option className="text-[#000]">Saving</option>
                  <option className="text-[#000]">Loan</option>
                </select>
              </div>
              <div className="flex  gap-[62px]  md:gap-10 mb-2">
                <label className="label">
                  <span className="label-text text-[#000]">Account Name </span>
                </label>
                <input
                  defaultValue={Update?.account}
                  name="account"
                  className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded outline-none "
                  type="text"
                />
              </div>
              <div className="flex gap-[70px] mb-2">
                <label className="label w-fit">
                  <span className="label-text text-[#000]">Amount</span>
                </label>
                <input
                  defaultValue={Update?.amount}
                  name="amount"
                  className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded outline-none "
                  type="text"
                />
              </div>
              <div className="flex gap-[49px] mb-5">
                <label className="label w-fit">
                  <span className="label-text text-[#000]">Description</span>
                </label>
                <input
                  defaultValue={Update?.description}
                  name="description"
                  className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded  outline-none "
                  type="text"
                />
              </div>
              <div>
                <button className=" btn w-full text-white bg-[#3EEE2A]">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountUpdate;
