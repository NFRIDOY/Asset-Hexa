import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import BusinessTableM from "./BusinessTableM";

const MybusinessTable = () => {

  const { user } = useAuth();

  const axiosPublic = useAxios();

  const [myBusiness, setMyBusiness] = useState([]);

  // console.log(`${user?.email}`)
  useEffect(() => {
      axiosPublic.get(`/bussiness?email=${user?.email}`)
          // axios.get(`http://localhost:5000/bussiness?email=${user?.email}`)
          .then((res) => {
              setMyBusiness(res.data)
              // console.log(res.data)
          })
      // .catch((error) => console.log(error))
  }, [axiosPublic,user])


  return (
    <div>
       <div className="table table-pin-rows table-md md:table-lg  text-center">
            {/* <div className="bg-white w-full overflow-auto"> */}
            {/* <h1>
                BusinessTable
            </h1> */}
            <table className="table table-xs lg:table-lg">
                {/* head */}
                <thead >
                    <tr className="">
                        <th></th>
                        <th>Brand Logo</th>
                        <th>BrandName</th>
                        {/* <th>Invesment</th> */}
                        <th>Collection</th>
                        <th>Profit(%)</th>
                        <th>Profit Amount</th>
                        {/* <th>view Business</th> */}
                    </tr>
                </thead>
                <tbody className="">
                    {
                        ((myBusiness.length !== 0) || myBusiness) ? myBusiness?.map((investment, index) => <BusinessTableM key={investment?._id} investment={investment} index={index + 1} />) : null
                    }
                </tbody>

            </table>
            {
                (myBusiness.length === 0) ? <div
                    className="flex flex-col justify-center items-center my-10">
                    <div>
                        <div className=" w-fit  col-span-12 text-center flex justify-center">
                            <span className="text-3xl w-fit text-red-500 font-bold text-center flex justify-center">
                                No Data
                            </span>
                        </div>
                       
                    </div>
                </div> : null
            }
        </div >
    </div>
  );
};

export default MybusinessTable;