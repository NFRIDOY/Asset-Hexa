/* eslint-disable react/prop-types */

import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const TransectionColumn = ({ transection }) => {
  return (
    <div className="max-w-6xl mx-auto h-24 overflow-hidden grid grid-cols-3 place-items-center gap-10 border ring-8 ring-[#38d626] py-3 px-3 md:px-10 capitalize ">
      <div className="place-self-start flex flex-col  gap-2">
        <h4 className="text-xl font-bold text-slate-600">
          {transection?.category || transection?.from}
        </h4>
        <p className="text-xs font-medium text-slate-600">
          {transection?.note}
        </p>
      </div>
      <p className="text-xl font-bold text-slate-600">
        ${transection?.amount || transection?.from}
      </p>

      <div className="flex items-center justify-end gap-1 md:gap-8">
        <button>
          <MdDeleteForever className="text-3xl text-red-600"></MdDeleteForever>
        </button>
        <button>
          <GrDocumentUpdate className="text-2xl text-green-600"></GrDocumentUpdate>
        </button>
      </div>
    </div>
  );
};

export default TransectionColumn;
