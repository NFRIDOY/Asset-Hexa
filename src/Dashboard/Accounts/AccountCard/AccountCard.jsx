/* eslint-disable react/prop-types */

import Modal from "../AccountModal/Modal";
import { BiEditAlt } from "react-icons/bi";

const AccountCard = ({Balance, Balances, isOpen, setIsOpen ,setBalance }) => {
  return (
    <div>
      <div>
        <div>
          {/* cash  */}

          <div className="grid grid-cols-3 mb-3 shadow-sm rounded h-10 border-b-2 border-b-emerald-400 mt-2">
            <div className="flex items-center gap-5">
              <p className="ml-5  text-black text-xl ">{Balances?.account}</p>
              <BiEditAlt className="text-[#E44544] text-2xl" onClick={()=>setIsOpen(!isOpen)} />
              <Modal setBalance={setBalance} Balance={Balance} id={Balances._id} isOpen={isOpen} setIsOpen={setIsOpen} > </Modal>
            </div>
            <p className="text-black flex justify-center text-xl">
              {Balances?.group}
            </p>
            <p className="mr-5 text-black flex justify-end text-xl">
              $ {Balances?.amount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
