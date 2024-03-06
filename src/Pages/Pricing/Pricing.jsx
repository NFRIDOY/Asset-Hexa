import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Pricing = () => {

    const axiosPublic = useAxios();
    const  {user} = useContext(AuthContext)
    const BrongeInfo = e => {
        e.preventDefault();
        // const form = e.target;
        const bronge = "bronge"
        const brongeTwo = "1 business Post";
        const brongePrice = "10";
        const featureOne = "Weekly subscription";
        const featureTwo = "Weekly technical support";
        const brongeInfo = {
            bronge, brongeTwo, brongePrice, featureOne, featureTwo, email: user?.email,
            name:user?.displayName
        }
        // console.log(brongeInfo);
        // e.target.reset();

        axiosPublic.post('/price', brongeInfo)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    // console.log('user balance added to the data base ');
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


    const SelverInfo = e => {
        e.preventDefault();
        // const form = e.target;

        const silver = "silver"
        const silverTwo = "20 business Post";
        const silverPrice = "20";
        const featureOne = "Weekly subscription";
        const featureTwo = "Weekly technical support";
        const selverInfo = { 
            silver, silverTwo, silverPrice,featureOne, featureTwo, email: user?.email,
            name:user?.displayName
         
        }
        // console.log(Info);
        // e.target.reset();

        axiosPublic.post('/price', selverInfo)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    // console.log('user balance added to the data base ');
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

// goldInfo 
    const goldInfo = e => {
        e.preventDefault();
        // const form = e.target;

        const gold = "gold"
        const goldTwo = "50 business Post";
        const goldPrice = "30";
        const featureOne = "Weekly subscription";
        const featureTwo = "Weekly technical support";
        const GoldInfo = {
             
            
            gold, goldTwo, goldPrice, featureOne, featureTwo, email: user?.email,
            name:user?.displayName
        }
        // console.log(Info);
        // e.target.reset();

        axiosPublic.post('/price', GoldInfo)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    // console.log('user balance added to the data base ');
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
            <div className="max-w-[1300px] min-h-[calc(100vh-336px)] mx-auto pr-3 pl-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div  >
                        <div className="card lg:w-96 glass bg-[#BA7245]">
                            <h2 name="bronge" className="text-center text-xl pt-4">Bronge</h2>
                            <h1 className="text-center text-5xl pt-4 font-bold">$ 10</h1>
                            <div className="card-body">
                                <ul className="timeline timeline-vertical mr-44">
                                    <li>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-800"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="timeline-end  w-32 lg:w-60 "><h1>1 business Post</h1></div>
                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-800"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="timeline-end  w-32 lg:w-60 "><h1>Weekly subscription</h1></div>
                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-800"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="timeline-end w-32 lg:w-60"><h1>Weekly technical support</h1></div>

                                    </li>
                                </ul>
                                <div className="card-actions justify-center pt-9">
                                    <button onClick={BrongeInfo} className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline  mt-2 rounded-md">
                                        buy now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 2nd card  */}
                    <div>
                        <div  >
                            <div className="card lg:w-96 glass   bg-[#C3C3C4]">
                                <h2 className="text-center text-xl pt-4">Silver</h2>
                                <h1 className="text-center text-5xl pt-4 font-bold">$ 20</h1>
                                <div className="card-body">
                                    <ul className="timeline timeline-vertical mr-44">
                                        <li>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end  w-32 lg:w-60 "><h1>10 business Post</h1></div>
                                            <hr />
                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end  w-32 lg:w-60 "><h1>Weekly subscription</h1></div>
                                            <hr />
                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-700"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end  w-32 lg:w-60"><h1>Weekly technical support</h1></div>

                                        </li>
                                    </ul>
                                    <div className="card-actions justify-center pt-9">
                                        <button onClick={SelverInfo} className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline  mt-2 rounded-md">
                                            buy now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 3rd card  */}
                    <div>
                        <div  >
                            <div className="card lg:w-96 glass bg-[#EFCC0D]">
                                <h2 className="text-center text-xl pt-4">Gold</h2>
                                <h1 className="text-center text-5xl pt-4 font-bold">$ 30</h1>
                                <div className="card-body">
                                    <ul className="timeline timeline-vertical mr-44">
                                        <li>
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end  w-32 lg:w-60 "><h1>50 business Post</h1></div>
                                            <hr className="" />
                                        </li>
                                        <li>
                                            <hr />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end  w-32 lg:w-60 "><h1>Weekly subscription</h1></div>
                                            <hr />
                                        </li>
                                        <li>
                                            <hr className="" />
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className="timeline-end  w-32 lg:w-60"><h1>Weekly technical support</h1></div>

                                        </li>
                                    </ul>
                                    <div className="card-actions justify-center pt-9">
                                        <button onClick={goldInfo} className="btn bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white  btn-outline  mt-2 rounded-md">
                                            buy now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        );
    };
export default Pricing;