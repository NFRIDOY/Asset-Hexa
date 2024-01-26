/* eslint-disable react/prop-types */
// import { MdDeleteForever } from "react-icons/md";
// import { GrDocumentUpdate } from "react-icons/gr";

import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const TransectionColumn = ({ transactionType }) => {
  const axiosPublic = useAxios();
  const { user } = useAuth();

  const { data: transection = [] } = useQuery({
    queryKey: ["transection"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/transections?type=${transactionType}&email=${user?.email}`
      );
      return res.data;
    },
  });
  console.log(transection);

  return transection.map((transectionItem) => (
    <div
      key={transectionItem._id}
      className="flex items-center justify-around border rounded-md p-4"
    >
      <h4 className="text-xl font-bold">{transectionItem.category}</h4>
      <div className="felx felx-col">
        <p className="font-medium">{transectionItem.note}</p>
      </div>
      <p className="text-lg font-bold text-blue-500">
        ${transectionItem.amount}
      </p>
      {/* <MdDeleteForever className="text-3xl text-red-600"></MdDeleteForever>
    <GrDocumentUpdate className="text-2xl text-green-600"></GrDocumentUpdate> */}
    </div>
  ));
};

export default TransectionColumn;
