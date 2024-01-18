import aboutImg from '../../../assets/about/AboutPic-removebg-preview.png'
import noman from '../../../assets/about/team-pic/noman-removebg-preview (1).png'
import arif from '../../../assets/about/team-pic/arif-removebg-preview.png'
import rean from '../../../assets/about/team-pic/rean-removebg-preview.png'
import mustafiz from '../../../assets/about/team-pic/mustafiz-removebg-preview.png'
import mehedi from '../../../assets/about/team-pic/mehedi-removebg-preview.png'
import ridoy from '../../../assets/about/team-pic/ridoy-removebg-preview.png'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const About = () => {
    return (
        <div className=' max-w-[1450px] mx-auto bg-[#587EF6]'>
            <div className="pr-6 pl-3 bg-[#212454] h-96 md:h-72 pt-10">
                <h1 className="md:ml-20 ml-20 mb-2 text-6xl font-bold text-white">ABOUT US</h1>
                <h3 className="md:ml-20 ml-36 mb-1 text-[#DDD831] text-xl " >GREAT COMPANY</h3>
                <p className="pt-5 md:ml-20 ml-10 text-[#9BA39e] w-[420px] md:w-[700px]  lg:w-[800px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
            </div>
            <div className="pr-14 pl-14 md:pr-12 md:pl-16  grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                    <p className="text-[#E2D831] text-center  ">Company Value</p>
                    <p className="text-white text-4xl mb-2 text-center">Who Are You</p>
                    <p className="text-white   text-center">Coop Bank is a company of the envato Foundation through its banking activities to contribute in overcoming the structural causes of poverty in Australia.</p>
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
            <div className='mt-10 pb-10'>
                <h2 className='text-3xl text-center mb-2'><span className='text-[#E1DD4A] '>Team </span>Members</h2>
                <p className=' pr-14 pl-14  md:pr-16 md:pl-16 text-2xl text-center mb-10 text-white'>We have created alliances with recognized entities that contribute to improving quality of your life.</p>
                <div className=' pr-14 pl-14  lg:pr-32 lg:pl-32 md:pr-16 md:pl-16 gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>

                    {/* arif information  */}

                    <div className='rounded-xl border'>
                        <p className='rounded-xl bg-[#DDD831] h-5 mb-5 '></p>
                        <div className=' flex justify-center'>
                            <div className='border-l-[10px] border-r-[10px] border-t-[10px] border-b-[10px] border-white rounded-full'>
                                <img className=' h-32 rounded-full ' src={arif} alt="" />
                            </div>

                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white font-serif'>Md Ariful Islam</h2>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider pr-5 pl-5 lg:pr-10 lg:pl-10"></div>

                        </div>

                        <div className='flex justify-center gap-2'>
                            <div className='  bg-[#41AD27] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaPhoneAlt className=' text-white rounded  mt-1' style={20} />
                            </div>
                            <p className='font-sans text-white'>+88 01728103535</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className='   bg-[#6C00D8] mb-1 rounded w-6 h-6 flex justify-center items-center'>
                                <CiMail className='mt-1 text-white' style={20} />
                            </div>
                            <a href="ariful2634@gmail.com"> <button className='font-serif text-white'>Gmail</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#425BF6] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaFacebook className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.facebook.com/arifulislam.ariful.37/"> <button className='font-serif text-white'>Facebook</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#355DBF] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <CiLinkedin className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.linkedin.com/in/mai25cse/"> <button className='font-serif text-white'>Linkedin</button></a>

                        </div>
                    </div>

                    {/* noman information  */}

                    <div className=' border rounded-xl'>
                        <p className='bg-[#DDD831] h-5 mb-5 rounded-xl'></p>
                        <div className='flex justify-center'>
                            <div className='mb-3 border-l-[10px] border-r-[10px] border-t-[10px] border-b-[10px] border-white rounded-full'>
                                <img className=' h-32 rounded-full ' src={noman} alt="" />
                            </div>

                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white font-serif'>Md Noman Faysal Ridoy</h2>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider pr-5 pl-5 lg:pr-10 lg:pl-10"></div>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#41AD27] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaPhoneAlt className=' text-white rounded  mt-1' style={20} />
                            </div>
                            <p className='font-sans text-white'>+88 01967318743</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#6C00D8] mb-1 rounded w-6 h-6 flex justify-center items-center'>
                                <CiMail className='mt-1 text-white' style={20} />
                            </div>
                            <a href="nfridoy@gmail.com"> <button className='font-serif text-white'>Gmail</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#425BF6] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaFacebook className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.facebook.com/nfridoy/"> <button className='font-serif text-white'>Facebook</button></a>
                            <p className='font-serif text-white'></p>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#355DBF] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <CiLinkedin className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://linkedin.com/in/nfridoy"> <button className='font-serif text-white'>Linkedin</button></a>

                        </div>
                    </div>

                        {/* rean information  */}

                    <div className=' border rounded-xl'>
                        <p className='bg-[#DDD831] h-5 mb-5 rounded-xl '></p>
                        <div className='flex justify-center'>
                            <div className='mb-3 border-l-[10px] border-r-[10px] border-t-[10px] border-b-[10px] border-white rounded-full'>
                                <img className=' h-32 rounded-full ' src={rean} alt="" />
                            </div>

                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white font-serif'>Rezuan Alam Rean</h2>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider pr-5 pl-5 lg:pr-10 lg:pl-10"></div>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#41AD27] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaPhoneAlt className=' text-white rounded  mt-1' style={20} />
                            </div>
                            <p className='font-sans text-white'>+88 01780159656</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#6C00D8] mb-1 rounded w-6 h-6 flex justify-center items-center'>
                                <CiMail className='mt-1 text-white' style={20} />
                            </div>

                            <a href="rezuanrean.cse@gmail.com"> <button className='font-serif text-white'>Gmail</button></a>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#425BF6] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaFacebook className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.facebook.com/rean.bhuiyan.94"> <button className='font-serif text-white'>Facebook</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#355DBF] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <CiLinkedin className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.linkedin.com/in/rezuan-alam-rean/"> <button className='font-serif text-white'>Linkedin</button></a>

                        </div>
                    </div>

                        {/* mustafiz information  */}

                    <div className=' border rounded-xl'>
                        <p className='bg-[#DDD831] h-5 mb-5 rounded-xl '></p>
                        <div className='flex justify-center'>
                            <div className='mb-3 border-l-[10px] border-r-[10px] border-t-[10px] border-b-[10px] border-white rounded-full'>
                                <img className=' h-32 rounded-full ' src={mustafiz} alt="" />
                            </div>

                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white font-serif'>Md Mustafiz Rahman</h2>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider pr-5 pl-5 lg:pr-10 lg:pl-10"></div>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#41AD27] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaPhoneAlt className=' text-white rounded  mt-1' style={20} />
                            </div>
                            <p className='font-sans text-white'>+88 01742950624</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#6C00D8] mb-1 rounded w-6 h-6 flex justify-center items-center'>
                                <CiMail className='mt-1 text-white' style={20} />
                            </div>
                            <a href="mustafiz8260@gmail.com"> <button className='font-serif text-white'>Gmail</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#425BF6] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaFacebook className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.facebook.com/mdmustafiz.rahman.988/"> <button className='font-serif text-white'>Facebook</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#355DBF] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <CiLinkedin className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.linkedin.com/in/mustafiz-rahman-8482632a4/"> <button className='font-serif text-white'>Linkedin</button></a>

                        </div>
                    </div>

                        {/* mehedi information  */}

                    <div className=' border rounded-xl'>
                        <p className='bg-[#DDD831] h-5 mb-5 rounded-xl'></p>
                        <div className='flex justify-center'>
                            <div className='mb-3 border-l-[10px] border-r-[10px] border-t-[10px] border-b-[10px] border-white rounded-full'>
                                <img className='  h-32 rounded-full ' src={mehedi} alt="" />
                            </div>

                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white font-serif'>Md Moksedul Haque</h2>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider pr-5 pl-5 lg:pr-10 lg:pl-10"></div>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#41AD27] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaPhoneAlt className=' text-white rounded  mt-1' style={20} />
                            </div>
                            <p className='font-sans text-white'>+88 01834292320</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#6C00D8] mb-1 rounded w-6 h-6 flex justify-center items-center'>
                                <CiMail className='mt-1 text-white' style={20} />
                            </div>
                            <a href="mdmehediislammoksedul@gmail.com"> <button className='font-serif text-white'>Gmail</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#425BF6] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaFacebook className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.facebook.com/mehadihasan.mokcadul"> <button className='font-serif text-white'>Facebook</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#355DBF] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <CiLinkedin className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.linkedin.com/in/mehedi-islam-moksedul-6a83622a4/"> <button className='font-serif text-white'>Linkedin</button></a>

                        </div>
                    </div>

                        {/* ridoy informaiton  */}

                    <div className=' border rounded-xl '>
                        <p className='bg-[#DDD831] h-5 mb-5 rounded-xl'></p>
                        <div className='flex justify-center'>
                            <div className='mb-3 border-l-[10px] border-r-[10px] border-t-[10px] border-b-[10px] border-white rounded-full'>
                                <img className=' h-32 rounded-full ' src={ridoy} alt="" />
                            </div>

                        </div>
                        <h2 className='text-2xl font-bold text-center mb-3 text-white font-serif'>MD Radiat Hossain Ridoy</h2>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider pr-5 pl-5 lg:pr-10 lg:pl-10"></div>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#41AD27] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaPhoneAlt className=' text-white rounded  mt-1' style={20} />
                            </div>
                            <p className='font-sans text-white'>+88 01716014325</p>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#6C00D8] mb-1 rounded w-6 h-6 flex justify-center items-center'>
                                <CiMail className='mt-1 text-white' style={20} />
                            </div>
                            <a href="radiathossainr@gmail.com"> <button className='font-serif text-white'>Gmail</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#425BF6] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <FaFacebook className='mt-1 text-white' style={20} />
                            </div>
                            <a href="https://www.facebook.com/profile.php?id=100009109246385"> <button className='font-serif text-white'>Facebook</button></a>

                        </div>
                        <div className='flex justify-center gap-2'>
                            <div className=' bg-[#355DBF] mb-1 rounded w-6 h-7 flex justify-center items-center'>
                                <CiLinkedin className='mt-1 text-white' style={20} />
                            </div>
                            <a href="www.linkedin.com/in/radiat-hossain-ridoy0"> <button className='font-serif text-white'>Linkedin</button></a>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;