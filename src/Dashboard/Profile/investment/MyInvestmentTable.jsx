import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import InvestmentRow from "../../Investments/InvestmentRow";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyInvestmentTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/investments?email=${user?.email}`).then((res) => {
      setInvestments(res.data);
    });
  }, [axiosSecure, user]);

  return (
    <div className="bg-white w-full overflow-auto">
      <table className="table-auto w-full md:table md:table-xs lg:table-lg">
        <thead>
          <tr className="">
            <th className="hidden md:table-cell">index</th>
            <th className="hidden md:table-cell">Brand</th>
            <th className="hidden md:table-cell">Name</th>
            <th className="hidden md:table-cell">Total Invest</th>
            <th className="hidden md:table-cell">Invesment</th>
            <th className="hidden md:table-cell">Profit(%)</th>
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
};

export default MyInvestmentTable;
