import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import useAccountsPie from "../hooks/usePieChartsData";
import { useEffect, useState } from "react";
import Loader from "../Route/loader";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#ff006e",
  "#fb6f92",
];

const Statistics = () => {
  const [chartData, isLoading] = useAccountsPie();
  const [isData01, setIsData01] = useState(0);
  const [isData02, setIsData02] = useState(0);
  const [isData03, setIsData03] = useState(0);

  const data01 = chartData?.accountData;
  const data02 = chartData?.incomeData;
  const data03 = chartData?.expenseData;

  useEffect(() => {
    const isData1 = data01?.reduce((acc, item) => {
      return acc + parseFloat(item.value);
    }, 0);

    const isData2 = data02?.reduce((acc, item) => {
      return acc + parseFloat(item.value);
    }, 0);
    const isData3 = data03?.reduce((acc, item) => {
      return acc + parseFloat(item.value);
    }, 0);
    setIsData01(isData1);
    setIsData02(isData2);
    setIsData03(isData3);
  }, [data01, data02, data03]);

  // console.log(isData01, isData02, isData03);
  return (
    <div className="w-full bg-white h-screen pt-10">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10">
          {/* Pie 1 */}
          <div className="flex flex-col justify-center items-center place-self-start">
            <h1 className="text-5xl text-center font-bold text-[#38d626] uppercase">
              Accounts
            </h1>
            {isData01 ? (
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
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
            ) : (
              <div className="mt-20 uppercase font-extrabold text-3xl flex justify-center items-center text-center">
                <h1>no Data</h1>
              </div>
            )}
          </div>
          {/* Pie 2 */}
          <div className="flex flex-col justify-center items-center place-self-start">
            <h1 className="text-5xl text-center font-bold text-[#38d626] uppercase">
              Income
            </h1>
            {isData02 ? (
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data02}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {data02?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}+`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            ) : (
              <div className="mt-20 uppercase font-extrabold text-3xl flex justify-center items-center text-center">
                <h1>no Data</h1>
              </div>
            )}
          </div>
          {/* Pie 3 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-1 flex flex-col justify-center items-center xl:place-self-start">
            <h1 className="text-5xl text-center font-bold text-[#38d626] uppercase">
              Expense
            </h1>
            <div className="h-[800px]">
              {isData03 ? (
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data03}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {data03?.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              ) : (
                <div className="mt-20 uppercase font-extrabold text-3xl flex justify-center items-center text-center">
                  <h1>no Data</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
