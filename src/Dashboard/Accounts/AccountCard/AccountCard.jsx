/* eslint-disable react/prop-types */

import { BiEditAlt } from "react-icons/bi";

// modal

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AccountCard = ({ Balance, Balances, setBalance }) => {
  // console.log(id, Balances._id);
  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();

  //  console.log(id);

  const handleDelete = (_id) => {
    // Confirmation dialog before deletion
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Deleting the account
        await axiosSecure.delete(`/accounts/${_id}`).then((res) => {
          // console.log(res.data);
          if (res.data?.deletedCount > 0) {
            // Notifying the user about successful deletion
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your account has been deleted!",
              showConfirmButton: false,
              timer: 1500,
            });

            // Updating the state to reflect the deleted account
            const remainingAccounts = Balance.filter(
              (deleteAccount) => deleteAccount._id !== Balances?._id
            );
            setBalance(remainingAccounts);
          }
        });
      }
    });
  };

  // Modal close function

  return (
    <div>
      <div>
        <div>
          {/* cash  */}

          <div className="grid grid-cols-3 mb-3 bg-base-300 shadow-sm rounded py-2 border-b-2 border-b-emerald-400 mt-2">
            <div className="flex items-center gap-1 md:gap-5">
              <p className="ml-5  text-black text-xl ">{Balances?.account}</p>
              <BiEditAlt
                className="text-[#E44544] text-2xl"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              />
              {/* <Modal
                setBalance={setBalance}
                Balance={Balance}
                id={Balances?._id}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              /> */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button> */}
              <dialog id="my_modal_2" className="modal ">
                <div className="modal-box">
                  <div className="flex justify-between">
                    {/* Passing the correct function and parameters */}
                    <MdDelete
                      className="text-4xl text-[#db3b3b]"
                      onClick={() => handleDelete(Balances._id)}
                    />
                    <Link to={`/dashboard/accountUpdate/${Balances?._id}`}>
                      <FaEdit className="text-4xl text-[#8CC820]" />
                    </Link>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
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
