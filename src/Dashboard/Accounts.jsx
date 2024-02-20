/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../providers/AuthProvider";
import AccountCard from "./Accounts/AccountCard/AccountCard";
// eslint-disable-next-line no-unused-vars
import { FaRegChartBar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiBank } from "react-icons/ci";

const Accounts = () => {
  const axiosPublic = useAxios();
  const { user } = useContext(AuthContext);
  const [total, setTotal] = useState(0);

  const [Balance, setBalance] = useState([]);
  useEffect(() => {
    axiosPublic.get(`/accounts?email=${user?.email}`).then((data) => {
      setBalance(data?.data);
      // console.log(data.data);
    });
    const totalAmount = Balance.reduce(
      (total, item) => total + parseInt(item.amount),
      0
    );
    setTotal(totalAmount);
  }, [axiosPublic, user, Balance, setTotal]);

  return (
    <div>
      <div className="pt-20">
        <div className="border-t-2 border-b-2 h-16 flex justify-between pt-4 pl-4 pr-4 mb-2 ">
          <div>
            <h1 className=" text-black font-bold"> Accounts</h1>
          </div>

          <div className="flex justify-end gap-10 ">
            <div>
              {/* <FaRegChartBar style={20} /> */}
            </div>
          </div>
        </div>
        <div className=" px-5 mb-2 grid grid-cols-3 ">
          <div>
            <CiBank className="text-2xl" />
          </div>
          <div></div>
          {/* Total  */}
          <div className="flex items-center justify-end gap-2">
            <h2 className="  text-black font-bold">Total</h2>
            <p className="text-[#E44544] ">$ {parseFloat(total)}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 bg-[#F7F7FA] rounded h-10 border-t-2">
          <p className="mt-2 ml-5 text-black font-bold">Account</p>
          <p className="mt-2 flex justify-center text-black font-bold">Group</p>
          <p className="mt-2 mr-5 flex justify-end text-black font-bold">Amount</p>
        </div>
        <div className="grid grid-cols-1">
          {Balance.map((Balances) => (
            <AccountCard key={Balances._id} Balances={Balances}></AccountCard>
          ))}
        </div>
        <div className="bg-[#F7F7FA]  h-36">
          <div className="flex justify-end mr-5 pt-14">
            <Link to="/dashboard/addBalance">
              <div className="bg-[#3EEE2A]  w-6 h-5 pr-8 pl-4 pt-4 pb-8 rounded-full">
                <AiOutlinePlus className="text-black font-bold " style={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
