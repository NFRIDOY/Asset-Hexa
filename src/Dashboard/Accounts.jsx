/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import AccountCard from "./Accounts/AccountCard/AccountCard";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiBank } from "react-icons/ci";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Accounts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [Balance, setBalance] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/accounts?email=${user?.email}`).then((data) => {
      setBalance(data?.data);
      // console.log(data.data);
    });
    const totalAmount = Balance.reduce(
      (total, item) => total + parseInt(item.amount),
      0
    );
    setTotal(totalAmount);
  }, [user, Balance, setTotal, axiosSecure]);

  return (
    <div className="min-h-screen p-10 bg-[#F7F7FA]">
      {/* <div className="border-t-2 border-b-2 border-red-500 h-16 flex justify-between pt-4 pl-4 pr-4 mb-2 ">
          <div className="flex justify-end gap-10 ">
            <div></div>
          </div>
        </div> */}

      <div className="px-5 mb-2 grid grid-cols-3 ">
        <div>
          <CiBank className="text-2xl" />
        </div>
        <div></div>
        {/* Total  */}
        <div className="flex items-center justify-end whitespace-nowrap gap-2">
          <h2 className=" text-black font-bold text-2xl">Total</h2>
          <span className="text-[#E44544] text-2xl ">
            $ {parseFloat(total)}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3  rounded h-10 border-t-2">
        <p className="  ml-5 text-black font-bold text-lg md:text-2xl ">
          Account
        </p>
        <p className="  flex justify-center text-black font-bold text-lg md:text-2xl">
          Group
        </p>
        <p className=" mr-5 flex justify-end text-black font-bold text-lg md:text-2xl">
          Amount
        </p>
      </div>
      <div className="grid grid-cols-1">
        {Balance?.map((Balances) => (
          <AccountCard
            setBalance={setBalance}
            Balance={Balance}
            key={Balances?._id}
            Balances={Balances}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            {" "}
          </AccountCard>
        ))}
      </div>
      <div className="h-36">
        <div className="flex justify-end mr-5 pt-14">
          <Link to="/dashboard/addBalance">
            <div className="bg-[#3EEE2A]  w-6 h-5 pr-8 pl-4 pt-4 pb-8 rounded-full">
              <AiOutlinePlus className="text-white font-bold " style={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
