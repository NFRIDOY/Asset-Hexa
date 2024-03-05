import { ImBlog } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { IoMdBusiness } from "react-icons/io";
import verified from "../assets/dashboard/varified.png";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";

import "../../src/App.css";
import useAxios from "../hooks/useAxios";
const AdminOverview = () => {
    const axiosPublic = useAxios();
    const [loading, setLoading] = useState(true);
    const [usersData, SetusersData] = useState([]);

    const { data: adminState = [] } = useQuery({
        queryKey: ["AdminState"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/adminState`);
            return res.data;
        },
    });

    const data01 = [
        {
            name: "newsletter subscription",
            value: adminState?.newsLetterSubscriptionCount,
        },
        { name: "Total Site User", value: adminState?.userCount },
    ];

    const COLORS = ["#317DF0", "#F8A11B"];
    return (
        <div className="p-4 lg:h-screen bg-base-300">
            <div className="bg-white  p-4 flex lg:overflow-x-hidden overflow-x-scroll   rounded-xl gap-3  ">
                <div className="space-y-2 min-w-60 lg:min-w-0  flex-1 py-8  overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#449B38] to-[#34D399]  px-8  ">
                    <h1 className="text-base font-medium">total Users</h1>
                    <p className="text-3xl md:text-5xl font-semibold">
                        <CountUp end={adminState?.userCount} />
                    </p>
                </div>
                <div className="space-y-2 min-w-60 lg:min-w-0 flex-1  py-8  overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#F49328] to-[#E92A31]  px-8    ">
                    <h1 className="text-base font-medium">Total Transection</h1>
                    <p className="text-3xl md:text-5xl font-semibold">
                        <CountUp end={adminState?.transectionsCount} />
                    </p>
                </div>
                <div className="space-y-2 min-w-60 lg:min-w-0 flex-1 py-8  overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#49a7e0] to-[#8fd6ff]  px-8  ">
                    <h1 className="text-base font-medium">Total Blogs</h1>
                    <p className="text-3xl md:text-5xl font-semibold">
                        <CountUp end={adminState?.blogCount} />
                    </p>
                </div>
                <div className="space-y-2 min-w-60 lg:min-w-0 flex-1 overflow-scroll scrollable-content py-8  text-white rounded-xl bg-gradient-to-br from-[#FFE338] to-[#e94444]  px-8  ">
                    <h1 className="text-base font-medium">
                        {" "}
                        Business posting{" "}
                    </h1>

                    <p className="text-3xl md:text-5xl font-semibold">
                        <CountUp end={adminState?.businessCount} />
                    </p>
                </div>
                <div className="space-y-2 min-w-60 lg:min-w-0 flex-1 overflow-scroll scrollable-content py-8  text-white rounded-xl bg-gradient-to-br from-purple-700 to-purple-400  px-8  ">
                    <h1 className="text-base font-medium">
                        {" "}
                        Newslater subscitption
                    </h1>
                    <p className="text-3xl md:text-5xl font-semibold">
                        <CountUp
                            end={adminState?.newsLetterSubscriptionCount}
                        />
                    </p>
                </div>
            </div>

            <div className="flex flex-col  lg:flex-row justify gap-5   md:mt-5 my-5   ">
                <div className="bg-white min-h-[300px] w-full flex justify-center items-center h-0 flex-1 lg:h-[calc(100vh-250px)] mx-auto">
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

                <div className="min-h-[300px] bg-white w-full lg:h-[calc(100vh-260px)]   md:flex-row gap-5  justify-between">

                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="hover">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                <tr className="hover">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                {/* row 3 */}
                                <tr className="hover">
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminOverview;
