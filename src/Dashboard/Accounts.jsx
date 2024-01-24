import { FaRegChartBar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";



const Accounts = () => {
    return (
        <div>
            <div className="border-t-2 border-b-2 h-16 flex justify-between pt-4 pl-4 pr-4 mb-2 ">
                <div>
                    <h1 className=" text-[#6C6C6C]"> Accounts</h1>
                </div>

                <div className="flex justify-end gap-10 ">
                    <div>
                        <FaRegChartBar style={20} />
                    </div>
                    <div>
                        <BsThreeDotsVertical style={20} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 justify-between pl-16 pr-16 mb-2">
                {/* Assets  */}
                <div>
                    <h2 className="text-[#6C6C6C]">Assets</h2>
                    <p className="text-[#3493FF]">0.00</p>
                </div>
                {/* Liabilities  */}
                <div>
                    <h2 className="flex justify-center text-[#6C6C6C]">Liabilities</h2>
                    <p className="text-[#FF6541] flex justify-center">0.00</p>
                </div>
                {/* Total  */}
                <div>
                    <h2 className="flex justify-end text-[#6C6C6C]">Total</h2>
                    <p className="text-[#181818] flex justify-end">0.00</p>
                </div>
            </div>
            <div>
                {/* cash  */}
                <div className="flex justify-between bg-[#F7F7FA] h-10 border-t-2">
                    <p className="mt-2 ml-5 text-[#AEAEAF]">Cash</p>
                    <p className="mt-2 mr-5">$0.00</p>
                </div>
                <div className="flex justify-between h-10  ">
                    <p className="mt-2 ml-5 text-[#6C6C6C]">Cash</p>
                    <p className="mt-2 mr-5 text-[#6C6C6C]">$0.00</p>
                </div>
                {/* amount  */}
                <div className="flex justify-between bg-[#F7F7FA] h-10">
                    <p className="mt-2 ml-5 text-[#AEAEAF]">Account</p>
                    <p className="mt-2 mr-5">$0.00</p>
                </div>
                <div className="flex justify-between h-10">
                    <p className="mt-2 ml-5 text-[#6C6C6C]">Account</p>
                    <p className="mt-2 mr-5 text-[#6C6C6C]">$0.00</p>
                </div>
                {/* card  */}
                <div className="flex justify-between bg-[#F7F7FA] h-14">
                    <p className="mt-3 ml-5 text-[#AEAEAF]">Card</p>
                    <div className="flex justify-end gap-7 mt-1 mr-5">
                        <div>
                            <p className="text-[#AEAEAF] ">Balance Payble</p>
                            <p className="flex justify-end text-[#AEAEAF]">$ 0.00</p>
                        </div>
                        <div>
                            <p className="text-[#AEAEAF]">Ounst Balance</p>
                            <p className="flex justify-end text-[#AEAEAF]">$ 0.00</p>
                        </div>
                    </div>
                </div>
                {/* card  */}
                <div className=" flex justify-between mr-5 ">
                    <p className="mt-2 ml-5 text-[#6C6C6C]">Card</p>
                    <div className=" flex justify-end gap-[86px] mt-2 ml-5 h-10">
                        <div>

                            <p className="flex justify-end text-[#6C6C6C]">$ 0.00</p>
                        </div>
                        <div>

                            <p className="flex justify-end text-[#6C6C6C] ">$ 0.00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F7F7FA] h-36">

                </div>

            </div>


        </div>
    );
};

export default Accounts;