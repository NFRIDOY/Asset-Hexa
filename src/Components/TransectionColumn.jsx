/* eslint-disable react/prop-types */

const TransectionColumn = ({ transection }) => {
  return (
    <div className="flex items-center justify-around border rounded-md p-4 capitalize">
      <h4 className="text-xl font-bold ">{transection?.category || transection?.from}</h4>
      <div className="felx felx-col">
        <p className="font-medium">{transection?.note}</p>
      </div>
      <p className="text-lg font-bold text-blue-500">${transection?.amount || transection?.from}</p>
      {/* <MdDeleteForever className="text-3xl text-red-600"></MdDeleteForever>
    <GrDocumentUpdate className="text-2xl text-green-600"></GrDocumentUpdate> */}
    </div>
  );
};

export default TransectionColumn;
