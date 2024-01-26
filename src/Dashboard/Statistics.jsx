import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const Statistics = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Pie 1 */}
        <div className="flex flex-col justify-center items-center overflow-clip">
          <h1 className="text-4xl  text-center font-bold">Income</h1>
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
            />
            <Tooltip />
          </PieChart>
        </div>
        <div></div>
        {/* PIE 2 */}
        <div className="flex flex-col justify-center items-center overflow-clip">
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
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
