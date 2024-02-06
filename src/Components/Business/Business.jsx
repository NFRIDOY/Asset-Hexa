
import { Link } from "react-router-dom"

export default function Business() {

    return (
        <div className="lg:max-h-screen">
            <h1 className="text-center text-4xl font-bold">Manage Your Business</h1>
            <div className=" flex ">


                <div className="w-40 h-40 bg-purple-200">
                    pi
                </div>
                {/* <BusinessForm /> */}
            </div>
            <Link to={"/dashboard/businessForm"} className="btn btn-success w-36 h-36">Post Your Business</Link>
        </div>
    )
}
