

export default function Business() {
    return (
        <div className="bg-base-300 lg:min-h-screen flex ">
            {/* <div className="w-40 h-40 bg-white">
                pi
            </div> */}
            <div className="w-full p-4">
                {/* add Business */}

                <form className="card-body bg-green-300 flex gap-y-2 rounded-3xl">
                    <div className="font-bold text-center w-full py-5 bg-zinc-800 text-white">
                        <span className=" text-3xl">Company Info</span>
                    </div>
                    <div className="flex gap-x-5 flex-col lg:flex-row">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Company Name</span>
                            </label>
                            <input type="text" placeholder="Company Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Company Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-x-5 flex-col lg:flex-row">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Brand Image</span>
                            </label>
                            <input type="text" placeholder="Brand Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Banner Image</span>
                            </label>
                            <input type="text" placeholder="Brand Image" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-x-5 flex-col lg:flex-row">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Your Designation</span>
                            </label>
                            <input type="text" placeholder="Designation" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-3xl">Company Description</span>
                        </label>
                        <textarea className="p-4" name="CompanyDescription" id="CompanyDescription" cols="30" rows="10" placeholder="Min 200 Word"></textarea>
                    </div>
                    <div className="font-bold text-center w-full py-5 my-5 bg-zinc-800 text-white">
                        <span className="text-3xl">Invesment Info</span>
                    </div>
                    <div className="flex gap-x-5 flex-col lg:flex-row">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Minimum Amount</span>
                            </label>
                            <input type="number" placeholder="Minimum" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-3xl">Maximum Amount </span>
                            </label>
                            <input type="number" placeholder="Maximum" className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white border-blue-600">Post</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
