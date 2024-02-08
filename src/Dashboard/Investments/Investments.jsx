import { Link } from "react-router-dom";
import InvestmentTable from "./investmentTable";

import { ImBlog } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { IoMdBusiness } from "react-icons/io";
// import verified from "../assets/dashboard/varified.png";
import verified from "../../assets/dashboard/varified.png";
import "../../../src/App.css";


export default function Investments() {
    const data01 = [
        { name: "newsletter subscription", value: 100 },
        { name: "business subscriptions", value: 300 },
    ];

    const COLORS = ["#317DF0", "#F8A11B"];
    return (
        // <div style={{ border: "2px solid red" }} className="h-[calc(100vh-32px)] p-5">

        <div>
            <div>
                <div className="p-4 bg-base-300">
                    <div className="bg-white p-4 flex rounded-xl gap-3 overflow-x-auto min-h-40">
                        <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#449B38] to-[#34D399]  px-8 min-w-48 md:min-w-56 ">
                            <h1 className="text-base font-medium">total Users</h1>
                            <p className="text-3xl md:text-5xl font-semibold">00</p>
                        </div>
                        <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#F49328] to-[#E92A31]  px-8  min-w-48 md:min-w-56 ">
                            <h1 className="text-base font-medium">Total Transection</h1>
                            <p className="text-3xl md:text-5xl font-semibold">00</p>
                        </div>
                        <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#49a7e0] to-[#8fd6ff]  px-8  min-w-48 md:min-w-56">
                            <h1 className="text-base font-medium">Total Blogs</h1>
                            <p className="text-3xl md:text-5xl font-semibold">00</p>
                        </div>
                        <div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-[#FFE338] to-[#e94444]  px-8 min-w-48 md:min-w-56 ">
                            <h1 className="text-base font-medium">
                                {" "}
                                Business posting{" "}
                            </h1>
                            <p className="text-3xl md:text-5xl font-semibold">00</p>
                        </div>
                        <div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-purple-700 to-purple-400  px-8 min-w-48 md:min-w-56 ">
                            <h1 className="text-base font-medium">
                                {" "}
                                Newslater subscitption
                            </h1>
                            <p className="text-3xl md:text-5xl font-semibold">00</p>
                        </div>
                    </div>

                    <div className="flex gap-5 mt-5   ">
                        <div className="bg-white  p-10">
                            <PieChart width={350} height={350}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data01}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={140}
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

                        <div className="bg-white w-full p-6 px-10 flex gap-5 items-center justify-between">
                            <InvestmentTable />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="lg:max-h-screen p-5 border-2"> */}
            <div>

                <h1 className="text-center text-4xl font-bold">Investments</h1>
                <section className="flex">
                    <div>
                        <div className=" border-2 h-60 w-60"> Pi Chart </div>
                        <div className="flex justify-center items-center my-8">
                            <Link to={"/dashboard/business"} className="btn bg-[#00EC25] hover:bg-[#7dbb86]">
                                Manage Your Business
                            </Link>
                        </div>
                    </div>
                    <div className="table investment">

                    </div>
                </section>
            </div>
        </div>
    )
}
