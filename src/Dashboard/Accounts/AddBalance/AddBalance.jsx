import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
 
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { AuthContext } from "../../../providers/AuthProvider";



const AddBalance = () => {
   
   const  {user} = useContext(AuthContext)
   const axiosPublic = useAxios();
   const Balance = e => {
      e.preventDefault();
      const form = e.target;
      const group = form.group.value;
      const name = form.name.value;
      const amount = form.amount.value;
      const description = form.description.value;
      const addBalance = {
         group, name, amount, description,  email: user?.email,
      }
      e.target.reset();
      // console.log(addBalance);
      axiosPublic.post('/accounts', addBalance)
      .then(res => {
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
               <h1>Add balance</h1>
            </div>
         </Link>

         <form onSubmit={Balance}  >
            <div className="flex gap-8 mb-2">
               <label className="label">
                  <span className="label-text text-[#7D7D7D]">Group </span>
               </label>
               <select name="group" className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-red-500 rounded hover:outline-none outline-none">
                  <option disabled selected className="text-[#7D7D7D]">Select Option</option>
                  <option className="text-[#7D7D7D]">Cash</option>
                  <option className="text-[#7D7D7D]">Account</option>
                  <option className="text-[#7D7D7D]">Saving</option>
                  <option className="text-[#7D7D7D]">Loan</option>
               </select>
            </div>
            <div className="flex gap-8 mb-2">
               <label className="label">
                  <span className="label-text text-[#7D7D7D]">Name </span>
               </label>
               <input name="name" className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-red-500 rounded outline-none " type="text" />
            </div>
            <div className="flex gap-8 mb-2">
               <label className="label">
                  <span className="label-text text-[#7D7D7D]">Amount</span>
               </label>
               <input name="amount" className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-red-500 rounded outline-none " type="text" />
            </div>
            <div className="flex gap-8 mb-5">
               <label className="label">
                  <span className="label-text text-[#7D7D7D]">Description</span>
               </label>
               <input name="description" className="w-full hover:drop-shadow-lg hover:border-b-2  hover:border-red-500 rounded  outline-none " type="text" />
            </div>
            <div>
               <button className=" btn w-full text-white bg-[#3EEE2A]">Save</button>
            </div>
         </form>

      </div>
   );
};

export default AddBalance;