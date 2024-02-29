/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Modal({ setBalance, Balance, isOpen, setIsOpen, id }) {
  // console.log(id);


  const axiosPublic = useAxios();

  //  console.log(id);

  const handleDelete = (_id) => {
    // Confirmation dialog before deletion
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover this account!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Deleting the account
        await axiosPublic.delete(`/accounts/${_id}`).then((res) => {
          // console.log(res.data);
          if (res.data?.deletedCount > 0) {
            // Notifying the user about successful deletion
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your account has been deleted!',
              showConfirmButton: false,
              timer: 1500,
            });

            // Updating the state to reflect the deleted account
            const remainingAccounts = Balance.filter((deleteAccount) => deleteAccount._id !== id);
            setBalance(remainingAccounts);
          }
        });
      }
    });
  };

  // Modal close function
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    {/* Passing the correct function and parameters */}
                    <MdDelete className='text-4xl text-[#db3b3b]' onClick={() => handleDelete(id)} />
                    <Link to={`/dashboard/accountUpdate/${id}`}>
                      <FaEdit className='text-4xl text-[#8CC820]'/>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
