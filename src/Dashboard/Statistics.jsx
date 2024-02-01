import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import useAccountsPie from "../hooks/usePieChartsData";
import { longFormatters } from "date-fns";
import { useEffect, useState } from "react";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#ff006e",
  "#fb6f92",
];

const Statistics = () => {
  const [chartData] = useAccountsPie();
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
    <div className="mt-20">
      <div className="flex flex-col gap-10 md:flex-row justify-center items-start">
        {/* Pie 1 */}
        <div className="flex-1 flex flex-col justify-center items-center overflow-clip">
          <h1 className="text-5xl text-center font-bold text-emerald-500 uppercase">
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
            <div className="mt-20 uppercase font-extrabold text-3xl flex justify-center items-center">
              <h1>no Data</h1>
            </div>
          )}
        </div>
        {/* Pie 2 */}
        <div className="flex-1 flex flex-col justify-center items-center overflow-clip">
          <h1 className="text-5xl text-center font-bold text-emerald-500 uppercase">
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
            <div className="mt-20 uppercase font-extrabold text-3xl flex justify-center items-center">
              <h1>no Data</h1>
            </div>
          )}
        </div>
        {/* Pie 3 */}
        <div className="flex-1 flex flex-col justify-center items-center overflow-clip">
          <h1 className="text-5xl text-center font-bold text-emerald-500 uppercase">
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
              <div className="mt-20 uppercase font-extrabold text-3xl flex justify-center items-center">
                <h1>no Data</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
