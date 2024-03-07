import Swal from "sweetalert2";
import Lottie from "lottie-react";
import newsletter from '../../lottie/newsletter.json'
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAuth from './../../hooks/useAuth';
import useSubscriptionList from "../../hooks/useSubscriptionList";
import toast from "react-hot-toast";


const NewsLetter = () => {

    const axiosPublic = useAxios();
    const { user } = useAuth();
    const [payments] = useSubscriptionList()
    const mail = payments.find(pay => pay?.email == user?.email)

    const handleClick = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const newsLetterSubscriptionObj = {
            userName: user?.displayName,
            email: email,
            letterSubscriptionType: "free"
        }

        axiosPublic.post("/newsLetterSubscription", newsLetterSubscriptionObj)
            .then((res) => {
                // console.log(res.data);
                if (res?.data?.insertedId) {
                    Swal.fire(
                        'Congratulations',
                        'You Successfully subscribed on monthly newsletter!',
                        'success'
                    )
                    e.target.reset()
                }
            })
            .catch(() => {
                // console.log("Error On Subscribe");
                toast.error("Error");
            })
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="lg:w-[450px] w-[400px] shadow-xl   rounded-lg ">
                    <div className="py-10 md:py-14 px-8 color-charcoalGrey">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-center">Stay updated!</h1>
                        <p className="max-w-[380px] mb-5 text-center text-green-600 font-bold">
                            More than 2000+ people receiving monthly updates on:
                        </p>

                        <div className="flex flex-col items-center gap-4 mb-4">
                            <div>

                                <div className="text-center lg:text-left rounded">
                                    <div className="mx-auto w-full">
                                        <Lottie
                                            className="mx-auto w-[210px] md:w-72 lg:w-[250px]"
                                            animationData={newsletter}
                                            loop={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="font-bold text-green-600">Subscribe our newsletter for monthly update </p>
                        </div>

                        <form onSubmit={handleClick}>
                            <div className=" form-control flex justify-center" >
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6 flex flex-row justify-evenly">
                                <div>
                                    <button

                                        className=" text-white font-[700] rounded-lg px-2 py-3 lg:py-4 lg:px-3   bg-gradient-to-r from-green-600 to-green-400 cursor-pointer transition-all duration-700 hover:scale-105"
                                    >
                                        Free Subscribtion
                                    </button>
                                </div>
                                {
                                    mail ? <div>
                                        <button

                                            className=" text-white font-[700] rounded-lg px-2 py-3 lg:py-4 lg:px-3 cursor-pointer transition-all duration-700 hover:scale-105  bg-gradient-to-r from-green-600 to-green-400 "
                                        >
                                            Already Subscribed
                                        </button>
                                    </div> :
                                        <div>
                                            <Link to='/newsPayment'><button

                                                className=" text-white font-[700] rounded-lg px-2 py-3 lg:py-4 lg:px-3 cursor-pointer transition-all duration-700 hover:scale-105  bg-gradient-to-r from-green-600 to-green-400 "
                                            >
                                                Premium Subscrbtion
                                            </button></Link>
                                        </div>
                                }
                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;