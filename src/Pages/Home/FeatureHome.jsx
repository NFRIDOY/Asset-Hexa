import { Link } from "react-router-dom";
// import incomePic from "../../assets/Income/Mint.com-ZoneB-X-Small-2.jpg"
import Lottie from "lottie-react";

import loti from '../../lottie/Animation - 1705574820979.json'
import loti1 from '../../lottie/Animation - 1705575110332.json'
import loti2 from '../../lottie/Animation - 1705568847598.json'

const FeatureHome = () => {
    return (
        <div>

        <p className="text-4xl font-bold text-center text-black mb-5 mt-10">
            Discover what’s so amazing about Asset Hexa
        </p>
        <h1 className="font-5xl font-poppins font-extrabold border-b-4 border-dimBlue text-white mb-10"></h1>

        {/* first */}
        <div
            id="about"
            className="xl:mt-12 flex md:flex-row flex-col items-center justify-evenly  overflow-hidden">

            <div >
                {/* <img className=" shadow-md rounded-full h-full w-96" src={incomePic} alt="profile" />
                 */}

                <div className="text-center lg:text-left rounded">
                    <div className="mx-auto w-full">
                        <Lottie
                            className="mx-auto w-72 md:w-72 lg:w-[420px]"
                            animationData={loti}
                            loop={true}
                        />
                    </div>
                </div>
            </div>
            {/* Form */}
            <div className="flex-[0.75] p-8 rounded-2xl  my-auto items-center ">
                <div className="p-3 leading-6 ">
                    <h3 className=" mb-5 text-black text-3xl lg:text-5xl font-bold" > Track Your Income</h3>

                    <p className="text-gray-700 font-poppins text-justify ">
                        Effortlessly track your income and gain insights that’ll help you see easy opportunities to save.
                    </p>
                    < Link to="" >
                        <button className="btn  text-white bg-emerald-400 mt-4 md:mt-6">
                            Add Income
                        </button>
                    </ Link >
                </div>
            </div>
        </div>

        {/* second */}
        <div
            id="about"
            className="xl:mt-12 flex md:flex-row-reverse flex-col items-center justify-evenly  overflow-hidden">

            <div >
                {/* <img className=" shadow-md rounded-full h-full w-96" src={incomePic} alt="profile" />
                 */}

                <div className="text-center lg:text-left rounded">
                    <div className="mx-auto w-full">
                        <Lottie
                            className="mx-auto w-72 md:w-72 lg:w-[420px]"
                            animationData={loti1}
                            loop={true}
                        />
                    </div>
                </div>
            </div>
            {/* Form */}
            <div className="flex-[0.75] p-8 rounded-2xl  my-auto items-center ">
                <div className="p-3 leading-6 ">
                    <h3 className=" mb-5 text-black text-3xl lg:text-5xl font-bold" > Track Your Expence</h3>

                    <p className="text-gray-700 font-poppins text-justify ">
                        Effortlessly track your expence and gain insights that’ll help you see easy opportunities to save.
                    </p>
                    < Link to="" >
                        <button className="btn  text-white bg-emerald-400 mt-4 md:mt-6">
                           Add Expence
                        </button>
                    </ Link >
                </div>
            </div>
        </div>
        {/* third */}
        <div
            id="about"
            className="xl:mt-12 flex md:flex-row flex-col items-center justify-evenly  overflow-hidden">

            <div >
                {/* <img className=" shadow-md rounded-full h-full w-96" src={incomePic} alt="profile" />
                 */}

                <div className="text-center lg:text-left rounded">
                    <div className="mx-auto w-full">
                        <Lottie
                            className="mx-auto w-72 md:w-72 lg:w-[420px]"
                            animationData={loti2}
                            loop={true}
                        />
                    </div>
                </div>
            </div>
            {/* Form */}
            <div className="flex-[0.75] p-8 rounded-2xl  my-auto items-center ">
                <div className="p-3 leading-6 ">
                    <h3 className=" mb-5 text-black text-3xl lg:text-5xl font-bold" > Visualize Your Cashflow</h3>

                    <p className="text-gray-700 font-poppins text-justify ">
                        Effortlessly track your cashflow and gain insights that’ll help you see easy opportunities to save.
                    </p>
                    < Link to="" >
                        <button className="btn  text-white bg-emerald-400 mt-4 md:mt-6">
                           Dashboard
                        </button>
                    </ Link >
                </div>
            </div>
        </div>

    </div>
    );
};

export default FeatureHome;