import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import useAxios from "../hooks/useAxios";
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
  const [pieData, setPieData] = useState([]);
  const [pieLabel, setPieLabel] = useState([]);
  const axiosPublic = useAxios();
  useEffect(() => {
    axiosPublic.get("/accountPi?email=front@example.com").then((res) => {
      //   console.log(res.data);
      setPieData(res?.data?.accPiData);
      setPieLabel(res?.data?.accPiLebel);
    });
  }, [axiosPublic]);
  //   console.log(pieData, pieLabel);
  const data01 = [
    { name: pieLabel[0], value: pieData[0] },
    { name: pieLabel[1], value: pieData[1] },
    { name: pieLabel[2], value: 500 },
    { name: pieLabel[3], value: 400 },
    { name: pieLabel[4], value: 100 },
    { name: pieLabel[5], value: pieData[5] },
    { name: pieLabel[6], value: pieData[5] },
  ];
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-10 md:flex-row justify-center items-center">
        {/* Pie 1 */}
        <div className="flex flex-col justify-center items-center overflow-clip">
          <h1 className="text-5xl text-center font-bold text-emerald-500 uppercase">
            Accounts
          </h1>
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
        </div>
        <div></div>
        {/* PIE 2 */}
        {/* <div className="flex flex-col justify-center items-center overflow-clip">
          <h1 className="text-4xl  text-center font-bold">Expense</h1>
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
        </div> */}
      </div>
    </div>
  );
};

export default Statistics;
