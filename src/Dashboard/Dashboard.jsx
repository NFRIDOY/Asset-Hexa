
import { Link, NavLink, Outlet } from 'react-router-dom';
import home from '../assets/logo/logo.png'
import money from '../lottie/Animation - 1706022352528.json'
import Lottie from "lottie-react";

import { AiOutlineMenu } from 'react-icons/ai'


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-10   ">
                {/* Page content here */}
                <div className="-mt-3 ml-0 lg:ml-10">
                    <Outlet></Outlet>
                </div>
                <label htmlFor="my-drawer-2" className=" absolute top-0 justify-start flex w-20 mx-auto lg:mt-6 drawer-button lg:hidden"><AiOutlineMenu className='text-2xl m-4 '></AiOutlineMenu></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <div className="w-44 ">
                    <div className="  rounded-lg lg:mt-3">
                        <figure>
                            <Link to='/'><img src={home} alt="" /></Link>
                        </figure>

                    </div>
                    <ul className="menu h-[300px] italic font-bold bg-green-200 rounded-lg mt-4">


                        <>

                            <li>
                                <NavLink to='/dashboard/overView'>OverView</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/transection'>Transection</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/statistics'>Statistics</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/accounts'>Accounts</NavLink>
                            </li>

                        </>
                    </ul>


                    <div className=''>
                       <p className='italic mt-4 p-3 font-bold bg-pink-100  rounded-lg'>
                            <NavLink to='/dashboard/profile'>Profile</NavLink>

                       </p>
                       
                    </div>

                    <div className="bg-pink-100 p-2 rounded-lg mt-4">
                        <div className="mx-auto ">
                            <Lottie
                                className="mx-auto w-[150px] md:[w-150px] lg:w-[150px]"
                                animationData={money}
                                loop={true}
                          />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Dashboard;