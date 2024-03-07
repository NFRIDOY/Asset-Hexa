import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BusinessTable from "./BusinessTable/BusinessTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

export default function Business() {
  const { user } = useAuth();
  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();

  const { data: adminState = [] } = useQuery({
    queryKey: ["AdminState"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/adminState`);
      return res.data;
    },
  });
  const [total, setTotal] = useState(0);
  const [accountData, setAccountData] = useState([]);
  const [myTotalBusiness, setMyTotalBusiness] = useState([]);
  const [totalInvestments, setTotalInvestments] = useState(0);
  const [totalProfitDist, setTotalProfitDist] = useState(0);
  const [myBlogs, setMyBlogs] = useState(0);

  useEffect(() => {
    axiosSecure.get(`/accounts?email=${user?.email}`).then((data) => {
      setAccountData(data?.data);
    });

    axiosSecure.get(`/business/query/${user?.email}`).then((res) => {
      setMyTotalBusiness(res?.data);
    });

    axiosSecure.get(`/blogs/byemail/${user?.email}`).then((res) => {
      setMyBlogs(res?.data);
    });
  }, [axiosSecure, user?.email]);

  useEffect(() => {
    const totalInvestment = myTotalBusiness?.reduce(
      (total, item) => total + parseFloat(item?.totalInvestment),
      0
    );
    setTotalInvestments(totalInvestment);
    const getTotalProfitDist = myTotalBusiness?.reduce(
      (total, item) =>
        total + parseFloat((item?.totalInvestment * item?.Profit) / 100),
      0
    );
    setTotalProfitDist(getTotalProfitDist);
    const totalAmount = accountData?.reduce(
      (total, item) => total + parseInt(item.amount),
      0
    );
    setTotal(totalAmount);
  }, [accountData, myTotalBusiness]);
  return (
    <div className="h-[calc(100vh-32px)] p-5 relative">
      <div className=" border-purple-600 bg-green-400">
        <div className="md:max-h-screen p-4 bg-base-300">
          <div className="bg-white p-4 flex rounded-xl gap-3 overflow-x-auto min-h-40">
            <div className="flex justify-center gap-5 w-full">
              <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#F49328] to-[#E92A31]  px-8  min-w-48 md:min-w-56 ">
                <h1 className="text-base font-medium">My Blog Post</h1>
                <p className="text-3xl md:text-5xl font-semibold">
                  {myBlogs.length}
                </p>
              </div>
              <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#49a7e0] to-[#8fd6ff]  px-8  min-w-48 md:min-w-56">
                <h1 className="text-base font-medium">Total Collection</h1>
                <p className="text-3xl md:text-5xl font-semibold">
                  {totalInvestments}
                </p>
              </div>
              <div className="space-y-2 py-8 overflow-scroll scrollable-content  text-white rounded-xl bg-gradient-to-br from-[#8773cc] to-[#6637db]  px-8  min-w-48 md:min-w-56">
                <h1 className="text-base font-medium">Total Profit</h1>
                <p className="text-3xl md:text-5xl font-semibold">
                  {totalProfitDist}
                </p>
              </div>
              <div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-[#38ffca] to-[#20ae65]  px-8 min-w-48 md:min-w-56 ">
                <h1 className="text-base font-medium"> My Business posted </h1>
                <p className="text-3xl md:text-5xl font-semibold">
                  {myTotalBusiness.length}
                </p>
              </div>
              <div className="space-y-2 overflow-scroll scrollable-content py-8 text-white rounded-xl bg-gradient-to-br from-[#FFE338] to-[#e94444]  px-8 min-w-48 md:min-w-56 ">
                <h1 className="text-base font-medium">
                  {" "}
                  Total Business posted{" "}
                </h1>
                <p className="text-3xl md:text-5xl font-semibold">
                  {adminState?.businessCount}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-5 flex-col md:flex-row  ">
            <div className="flex-1  min-h-[300px] overflow-y-scroll scrollable-content lg:h-[calc(100vh-270px)] bg-white ">
              <BusinessTable />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-10 bottom-0 ">
        <Link
          to={"/dashboard/businessForm"}
          className="btn btn-success text-white "
        >
          Post Your Business
        </Link>
      </div>
    </div>
  );
}
