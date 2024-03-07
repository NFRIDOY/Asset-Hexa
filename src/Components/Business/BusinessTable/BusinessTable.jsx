import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import BusinessTableRow from "./BusinessTableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function BusinessTable() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [myBusiness, setMyBusiness] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/business/query/${user?.email}`).then((res) => {
      setMyBusiness(res?.data);
    });
    // .catch((error) => console.log(error))
  }, [user?.email, axiosSecure]);

  return (
    <div className="table table-pin-rows table-md md:table-lg  text-center">
      <table className="table table-xs lg:table-lg">
        {/* head */}
        <thead>
          <tr className="">
            <th></th>
            <th>Brand Logo</th>
            <th>BrandName</th>
            <th>Collection</th>
            <th>Profit(%)</th>
            <th>Profit Amount</th>
          </tr>
        </thead>
        <tbody className="">
          {myBusiness.length !== 0 || myBusiness
            ? myBusiness?.map((investment, index) => (
                <BusinessTableRow
                  key={investment?._id}
                  investment={investment}
                  index={index + 1}
                />
              ))
            : null}
        </tbody>
      </table>
      {myBusiness.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-10">
          <div>
            <div className=" w-fit  col-span-12 text-center flex justify-center">
              <span className="text-3xl w-fit text-red-500 font-bold text-center flex justify-center">
                No Data
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
