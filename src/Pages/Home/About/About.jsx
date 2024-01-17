import aboutImg from '../../../assets/about/AboutPic.png'
import avaterImg from '../../../assets/about/avater.png'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const About = () => {
    return (
        <div className=' max-w-[1000vh] mx-auto bg-[#587EF6]'>
            <div className="bg-[#212454] h-96 md:h-72 pt-10">
                <h1 className="md:ml-20 ml-20 mb-2 text-6xl font-bold text-white">ABOUT US</h1>
                <h3 className="md:ml-20 ml-36 mb-1 text-[#DDD831] text-xl " >GREAT COMPANY</h3>
                <p className="pt-5 md:ml-20 ml-10 text-[#9BA39e] w-[420px] md:w-[700px]  lg:w-[800px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                    <p className="text-[#E2D831] text-center  ">Company Value</p>
                    <p className="text-white text-4xl mb-2 text-center">Who Are You</p>
                    <p className="text-white text-center">Coop Bank is a company of the envato Foundation through its banking activities to contribute in overcoming the structural causes of poverty in Australia.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                        <div>
                            <p className="text-[#333776] mb-1 text-center">Our Mission</p>
                            <p className="text-white text-center">Lorem iur adipiscing elit. Ut vehicula dapibus augue nec maximustiam eleifend magna erat, quis vestibulum lacus mattis sit ametec pellentesque lorem sapien.</p>
                        </div>
                        <div>
                            <p className="text-[#333776] mb-1 text-center">Responsibilty</p>
                            <p className="text-white text-center">Lorem iur adipiscing elit. Ut vehicula dapibus augue nec maximustiam eleifend magna erat, quis vestibulum lacus mattis sit ametec pellentesque lorem sapien.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-3xl text-center mb-2'><span className='text-[#E1DD4A] '>Team </span>Members</h2>
                <p className='text-2xl text-center mb-10 text-white'>We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                <div className='gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                    <div className=' border '>
                        <p className='bg-[#DDD831] h-5 mb-5 '></p>
                        <div className='flex justify-center'>
                            <img className='mb-3 h-32 rounded-full ' src={avaterImg} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white'>Mehedi</h2>
                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider"></div>
                           
                        </div>

                        <div className='flex justify-center gap-2'>
                            <FaPhoneAlt className='mt-1' style={20} />
                            <p>+88 017********</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiMail className='mt-1' style={20} />
                            <p>ggg@gmail.com</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaFacebook className='mt-1' style={20} />
                            <p>facebook</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiLinkedin className='mt-1' style={20} />
                            <p className='pb-10'>Linkdin</p>
                        </div>
                    </div>
                    <div className=' border '>
                        <p className='bg-[#DDD831] h-5 mb-5 '></p>
                        <div className='flex justify-center'>
                            <img className='mb-3 h-32 rounded-full ' src={avaterImg} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white'>Mehedi</h2>
                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider"></div>
                           
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaPhoneAlt className='mt-1' style={20} />
                            <p>+88 017********</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiMail className='mt-1' style={20} />
                            <p>ggg@gmail.com</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaFacebook className='mt-1' style={20} />
                            <p>facebook</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiLinkedin className='mt-1' style={20} />
                            <p className='pb-10'>Linkdin</p>
                        </div>
                    </div>
                    <div className=' border '>
                        <p className='bg-[#DDD831] h-5 mb-5 '></p>
                        <div className='flex justify-center'>
                            <img className='mb-3 h-32 rounded-full ' src={avaterImg} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white'>Mehedi</h2>
                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider"></div>
                           
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaPhoneAlt className='mt-1' style={20} />
                            <p>+88 017********</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiMail className='mt-1' style={20} />
                            <p>ggg@gmail.com</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaFacebook className='mt-1' style={20} />
                            <p>facebook</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiLinkedin className='mt-1' style={20} />
                            <p className='pb-10'>Linkdin</p>
                        </div>
                    </div>
                    <div className=' border '>
                        <p className='bg-[#DDD831] h-5 mb-5 '></p>
                        <div className='flex justify-center'>
                            <img className='mb-3 h-32 rounded-full ' src={avaterImg} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white'>Mehedi</h2>
                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider"></div>
                           
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaPhoneAlt className='mt-1' style={20} />
                            <p>+88 017********</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiMail className='mt-1' style={20} />
                            <p>ggg@gmail.com</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaFacebook className='mt-1' style={20} />
                            <p>facebook</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiLinkedin className='mt-1' style={20} />
                            <p className='pb-10'>Linkdin</p>
                        </div>
                    </div>
                    <div className=' border '>
                        <p className='bg-[#DDD831] h-5 mb-5 '></p>
                        <div className='flex justify-center'>
                            <img className='mb-3 h-32 rounded-full ' src={avaterImg} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white'>Mehedi</h2>
                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider"></div>
                           
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaPhoneAlt className='mt-1' style={20} />
                            <p>+88 017********</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiMail className='mt-1' style={20} />
                            <p>ggg@gmail.com</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaFacebook className='mt-1' style={20} />
                            <p>facebook</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiLinkedin className='mt-1' style={20} />
                            <p className='pb-10'>Linkdin</p>
                        </div>
                    </div>
                    <div className=' border '>
                        <p className='bg-[#DDD831] h-5 mb-5 '></p>
                        <div className='flex justify-center'>
                            <img className='mb-3 h-32 rounded-full ' src={avaterImg} alt="" />
                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white'>Mehedi</h2>
                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider"></div>
                           
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaPhoneAlt className='mt-1' style={20} />
                            <p>+88 017********</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiMail className='mt-1' style={20} />
                            <p>ggg@gmail.com</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <FaFacebook className='mt-1' style={20} />
                            <p>facebook</p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <CiLinkedin className='mt-1' style={20} />
                            <p className='pb-10'>Linkdin</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;