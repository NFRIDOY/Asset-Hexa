import InvestmentTable from "./investmentTable";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import "../../../src/App.css";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function Investments() {
  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: adminState = [] } = useQuery({
    queryKey: ["AdminState"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/adminState`);
      return res.data;
    },
  });

  const [total, setTotal] = useState(0);

  const [accountData, setAccountData] = useState([]);
  const [investments, setInvestments] = useState([]);
  const [totalInvestments, setTotalInvestments] = useState(0);

  useEffect(() => {
    axiosSecure.get(`/accounts?email=${user?.email}`).then((data) => {
      setAccountData(data?.data);
    });
    const totalAmount = accountData?.reduce(
      (total, item) => total + parseInt(item.amount),
      0
    );
    setTotal(totalAmount);

    axiosSecure.get(`/investments?email=${user?.email}`).then((res) => {
      setInvestments(res?.data);
    });

    const totalInvestment = investments?.reduce(
      (total, item) => total + parseInt(item?.investment),
      0
    );
    setTotalInvestments(totalInvestment);
  }, [user, accountData, setTotal, axiosSecure, investments]);

  const data01 = [
    { name: "Investment", value: totalInvestments },
    { name: "Total Asset", value: total },
  ];

  const COLORS = ["#07afd9", "#8404c4"];
  return (
    <div className=" border-purple-600 bg-green-400">
      <div className="md:max-h-screen p-4 bg-base-300">
        <div className="bg-white p-4 flex rounded-xl gap-3 overflow-x-auto min-h-40">
          <div className="flex justify-center gap-10 w-full">
            <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#F49328] to-[#E92A31]  px-8  min-w-48 md:min-w-56 ">
              <h1 className="text-base font-medium">Total Asset</h1>
              <p className="text-3xl md:text-5xl font-semibold">{total}</p>
            </div>
            <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#49a7e0] to-[#8fd6ff]  px-8  min-w-48 md:min-w-56">
              <h1 className="text-base font-medium">Total Investments</h1>
              <p className="text-3xl md:text-5xl font-semibold">
                {totalInvestments}
              </p>
            </div>
            <div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-[#FFE338] to-[#e94444]  px-8 min-w-48 md:min-w-56 ">
              <h1 className="text-base font-medium"> Business posted </h1>
              <p className="text-3xl md:text-5xl font-semibold">
                {adminState?.businessCount}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 mt-5 flex-col md:flex-row  ">
          <div className="bg-white min-h-[300px]  w-full lg:w-1/3  flex justify-center items-center h-0  lg:h-[calc(100vh-270px)] mx-auto">
            <PieChart width={350} height={350}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={120}
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
            </PieChart>{" "}
          </div>
          <div className="flex-1  min-h-[300px] overflow-y-scroll scrollable-content lg:h-[calc(100vh-270px)] bg-white ">
            <InvestmentTable />
          </div>
        </div>
      </div>
    </div>
  );
}
