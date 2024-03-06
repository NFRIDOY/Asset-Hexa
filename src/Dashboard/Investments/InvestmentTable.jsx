import { useEffect, useState } from "react";
import useAuth from "./../../hooks/useAuth";
import InvestmentRow from "./InvestmentRow";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function InvestmentTable() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/investments?email=${user?.email}`).then((res) => {
      setInvestments(res.data);
    });
  }, [axiosSecure, user?.email]);

  return (
    <div className="table table-pin-rows table-md md:table-lg  text-center">
      <table className="table table-xs lg:table-lg">
        {/* head */}
        <thead>
          <tr className="">
            <th></th>
            <th>Brand</th>
            <th>Name</th>
            <th>Total Invest</th>
            <th>Invesment</th>
            <th>Profit(%)</th>
            {/* <th>Profit Amount</th> */}
            {/* <th>view Business</th> */}
          </tr>
        </thead>
        <tbody className="">
          {investments.length !== 0 || investments
            ? investments?.map((investment, index) => (
                <InvestmentRow
                  key={investment?._id}
                  investment={investment}
                  index={index + 1}
                />
              ))
            : null}
        </tbody>
      </table>
      {investments.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-10">
          <div>
            <div className=" w-fit  col-span-12 text-center flex justify-center">
              <span className="text-3xl w-fit text-red-500 font-bold text-center flex justify-center">
                No Data
              </span>
            </div>
            <Link
              to={"/businesses"}
              className=" w-fit  flex justify-center btn btn-warning my-8"
            >
              <span className="text-xl w-fit text-black font-bold text-center flex justify-center">
                Invest Now
              </span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
