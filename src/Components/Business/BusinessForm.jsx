import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import formattedDate from "../../functions/formatDate"
import { io } from "socket.io-client";


export default function BusinessForm() {
    const { user } = useAuth()
    const axiosPublic = useAxios();
    // console.log(formattedDate);
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const CompanyName = form.CompanyName.value;
        const CompanyEmail = form.CompanyEmail.value;
        const BrandImage = form.BrandImage.value;
        const BannerImage = form.BannerImage.value;
        const Designation = form.Designation.value;
        const userEmail = form.userEmail.value;
        const CompanyDescription = form.CompanyDescription.value;
        const Minimum = parseFloat(form.Minimum.value);
        const Maximum = parseFloat(form.Maximum.value);
        const Profit = parseFloat(form.Profit.value);

        const getTotalInvestment = () => {
            return 0;
        }

        const newBusinessObj = {
            CompanyName,
            CompanyEmail,
            BrandImage,
            BannerImage,
            Designation,
            userEmail,
            CompanyDescription,
            Minimum,
            Maximum,
            Profit,
            time: formattedDate,
            userName: user?.displayName,
            photoURL: user?.photoURL,
            companyVarification: false,
            investmentOwner: new Array(),
            totalInvestment: 0,
            // totalInvestment: getTotalInvestment(),
        }
        // console.log(newBusinessObj);
        
    const details = {message : ` posted a business ` , userName : user?.displayName , image : user?.photoURL}


        // axios.post("http://localhost:5000/bussiness", newBusinessObj)
        axiosPublic.post("/bussiness", newBusinessObj)
            .then((res) => {
                // console.log("res.data", res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Blog has been posted!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    // console.log("connected to Socet io");
                    const socket = io("https://asset-hexa-server-notification.glitch.me/" , {transports : ["websocket"]})
                    socket.emit("new_business_posted" ,details)
                }
            })

    }
    return (
        <div className="w-full p-4">
            {/* add Business */}

            <form className="card-body bg-green-300 flex gap-y-2 rounded-3xl" onSubmit={handleSubmit}>
                <div className="font-bold text-center w-full py-5 bg-zinc-800 text-white">
                    <span className=" text-3xl">Company Info</span>
                </div>
                <div className="flex gap-x-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Company Name</span>
                        </label>
                        <input type="text" name="CompanyName" placeholder="Company Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Company Email</span>
                        </label>
                        <input type="email" name="CompanyEmail" placeholder="email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-x-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Brand Image</span>
                        </label>
                        <input type="text" name="BrandImage" placeholder="Brand Image" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Banner Image</span>
                        </label>
                        <input type="text" name="BannerImage" placeholder="Brand Image" className="input input-bordered" required />
                    </div>
                </div>
                <div className="font-bold text-center w-full py-5 my-5 bg-zinc-800 text-white">
                    <span className=" text-3xl">User Info</span>
                </div>
                <div className="flex gap-x-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Your Designation</span>
                        </label>
                        <input type="text" name="Designation" placeholder="Designation" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Your Email</span>
                        </label>
                        <input type="email" name="userEmail" placeholder="Email" className="input input-bordered" defaultValue={user?.email} required />
                    </div>

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-3xl">Company Description</span>
                    </label>
                    <textarea className="p-4" name="CompanyDescription" id="CompanyDescription" cols="30" rows="10" placeholder="Minimum 200 Words"></textarea>
                </div>
                <div className="font-bold text-center w-full py-5 my-5 bg-zinc-800 text-white">
                    <span className="text-3xl">Invesment Info</span>
                </div>
                <div className="flex gap-x-5 flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Minimum Amount</span>
                        </label>
                        <input type="number" name="Minimum" placeholder="Minimum" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Maximum Amount </span>
                        </label>
                        <input type="number" name="Maximum" placeholder="Maximum" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Profit %</span>
                        </label>
                        <input type="number" name="Profit" placeholder="%" className="input input-bordered" required />
                    </div>

                </div>


                <div className="form-control mt-16">
                    <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white border-blue-600">Post</button>
                </div>
            </form>

            
        </div>
    )
}
