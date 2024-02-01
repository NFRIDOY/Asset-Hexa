import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
 
// import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddBalance = () => {
   
   const  {user} = useContext(AuthContext)
   const axiosPublic = useAxios();
   const Balance = e => {
      e.preventDefault();
      const form = e.target;
      const group = form.group.value;
      const account = form.name.value;
      const amount = form.amount.value;
      const description = form.description.value;
      const addBalance = {
         group, account, amount, description,  email: user?.email,
      }
      e.target.reset();
      // console.log(addBalance);
      axiosPublic.post('/accounts', addBalance)
      .then(res => { 
         console.log(res.data);
         if (res.data.insertedId) {
             console.log('user balance added to the data base ');
             Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: "  Your has been added",
                 showConfirmButton: false,
                 timer: 1500
             });
         }
     })
   }
   
    

   return (
      <div>
         <Link to={"/dashboard/accounts"}>
            <div className="flex gap-4 mb-10">
               <AiOutlineArrowLeft className="mt-[5px]" style={20} />
               <h1>Add Account</h1>
            </div>
         </Link>

         <form onSubmit={Balance}  >
            <div className="flex gap-20 mb-2">
               <label className="label w-fit">
                  <span className="label-text text-[#000]">Group </span>
               </label>
               <select name="group" className="w-full h-10 hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded hover:outline-none outline-none">
                  <option disabled selected className="text-[#000]">Select Option</option>
                  <option className="text-[#000]">Cash</option>
                  <option className="text-[#000]">Account</option>
                  <option className="text-[#000]">Saving</option>
                  <option className="text-[#000]">Loan</option>
               </select>
            </div>
            <div className="flex gap-20 mb-2">
               <label className="label w-24">
                  <span className="label-text text-[#000]">Account Name </span>
               </label>
               <input name="account" className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded outline-none " type="text" />
            </div>
            <div className="flex gap-20 mb-2">
               <label className="label w-fit">
                  <span className="label-text text-[#000]">Amount</span>
               </label>
               <input name="amount" className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded outline-none " type="text" />
            </div>
            <div className="flex gap-20 mb-5">
               <label className="label w-fit">
                  <span className="label-text text-[#000]">Description</span>
               </label>
               <input name="description" className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-green-500 rounded  outline-none " type="text" />
            </div>
            <div>
               <button className=" btn w-full text-white bg-[#3EEE2A]">Save</button>
            </div>
         </form>
      </div>
   );
};

export default AddBalance;