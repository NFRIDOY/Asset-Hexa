import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import arif from "../../../assets/about/team-pic/arif-removebg-preview.png";
import noman from "../../../assets/about/team-pic/noman-removebg-preview (1).png";
import rean from "../../../assets/about/team-pic/rean-removebg-preview.png";
import mustafiz from "../../../assets/about/team-pic/mustafiz-removebg-preview.png";
import mehedi from "../../../assets/about/team-pic/mehedi-removebg-preview.png";
import redoy from "../../../assets/about/team-pic/ridoy-removebg-preview.png";

const OurTeam = () => {
  return (
    <div>
      <div className="my-6 text-center">
        <h1 className="text-3xl mb-2 font-semibold ">OUR TEAM</h1>
        <p className="px-2">
          Our team collaborates passionately to achieve excellence in every
          endeavor.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
        <div
          style={{ boxShadow: "#23A455 0px 3px 8px" }}
          className="card  bg-base-100 m-10 "
        >
          <figure className="px-10 pt-10">
            <img src={arif} alt="Shoes" className="rounded-full w-40 h-40  " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md. Ariful Islam</h2>
            <p className="-m-2">ariful2634@gmail.com</p>

            <div className=" flex gap-4 mt-5  ">
              <div className="flex text-xl">
                <a href="https://github.com/Ariful2634" target="__blank">
                  <FaGithub
                    className="mt-1 text-primaryColor"
                    style={20}
                    size={40}
                  />
                </a>
                {/* <span>Email</span> */}
              </div>
              <div className="flex text-xl">
                <a href="https://www.facebook.com/arifulislam.ariful.37/">
                  <FaFacebook
                    className="mt-1 text-primaryColor"
                    style={30}
                    size={40}
                  />
                </a>
                {/* <span>Facebook</span> */}
              </div>
              <div className="flex text-xl gap-2">
                <a href="https://www.linkedin.com/in/mai25cse/">
                  <FaLinkedin
                    className="mt-1 text-primaryColor"
                    style={40}
                    size={40}
                  />
                </a>
                {/* <span>LinkedIn</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "#23A455 0px 3px 8px" }}
          className="card  bg-base-100 m-10 "
        >
          <figure className="px-10 pt-10">
            <img src={noman} alt="Shoes" className="rounded-full w-40 h-40  " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md Noman Faysal Ridoy</h2>
            <p className="-m-2">nfridoy@gmail.com</p>

            <div className=" flex gap-4 mt-5  ">
              <div className="flex text-xl">
                <a href="https://github.com/NFRIDOY" target="__blank">
                  <FaGithub
                    className="mt-1 text-primaryColor"
                    style={20}
                    size={40}
                  />
                </a>
                {/* <span>Email</span> */}
              </div>
              <div className="flex text-xl">
                <a href="https://www.facebook.com/nfridoy/">
                  <FaFacebook
                    className="mt-1 text-primaryColor"
                    style={30}
                    size={40}
                  />
                </a>
                {/* <span>Facebook</span> */}
              </div>
              <div className="flex text-xl gap-2">
                <a href="https://linkedin.com/in/nfridoy">
                  <FaLinkedin
                    className="mt-1 text-primaryColor"
                    style={40}
                    size={40}
                  />
                </a>
                {/* <span>LinkedIn</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "#23A455 0px 3px 8px" }}
          className="card  bg-base-100 m-10 "
        >
          <figure className="px-10 pt-10">
            <img src={rean} alt="Shoes" className="rounded-full w-40 h-40  " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Rezuan Alam Rean</h2>
            <p className="-m-2">rezuanrean.cse@gmail.com</p>

            <div className=" flex gap-4 mt-5  ">
              <div className="flex text-xl">
                <a href="https://github.com/Rezuan-Alam-Rean" target="__blank">
                  <FaGithub
                    className="mt-1 text-primaryColor"
                    style={20}
                    size={40}
                  />
                </a>
                {/* <span>Email</span> */}
              </div>
              <div className="flex text-xl">
                <a href="https://www.facebook.com/rean.bhuiyan.94">
                  <FaFacebook
                    className="mt-1 text-primaryColor"
                    style={30}
                    size={40}
                  />
                </a>
                {/* <span>Facebook</span> */}
              </div>
              <div className="flex text-xl gap-2">
                <a href="https://www.linkedin.com/in/rezuan-alam-rean/">
                  <FaLinkedin
                    className="mt-1 text-primaryColor"
                    style={40}
                    size={40}
                  />
                </a>
                {/* <span>LinkedIn</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "#23A455 0px 3px 8px" }}
          className="card  bg-base-100 m-10 "
        >
          <figure className="px-10 pt-10">
            <img
              src={mustafiz}
              alt="Shoes"
              className="rounded-full w-40 h-40  "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md Mustafiz Rahman</h2>
            <p className="-m-2">mustafiz8260@gmail.com</p>

            <div className=" flex gap-4 mt-5  ">
              <div className="flex text-xl">
                <a href="https://github.com/Mustafiz82" target="__blank">
                  <FaGithub
                    className="mt-1 text-primaryColor"
                    style={20}
                    size={40}
                  />
                </a>
                {/* <span>Email</span> */}
              </div>
              <div className="flex text-xl">
                <a href="https://www.facebook.com/mdmustafiz.rahman.988/">
                  <FaFacebook
                    className="mt-1 text-primaryColor"
                    style={30}
                    size={40}
                  />
                </a>
                {/* <span>Facebook</span> */}
              </div>
              <div className="flex text-xl gap-2">
                <a href="https://www.linkedin.com/in/mustafiz-rahman-8482632a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin
                    className="mt-1 text-primaryColor"
                    style={40}
                    size={40}
                  />
                </a>
                {/* <span>LinkedIn</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "#23A455 0px 3px 8px" }}
          className="card  bg-base-100 m-10 "
        >
          <figure className="px-10 pt-10">
            <img
              src={mehedi}
              alt="Shoes"
              className="rounded-full w-40 h-40  "
            />
          </figure>
          <div className="card-body items-center text-center whitespace-nowrap overflow-hidden text-ellipsis">
            <h2 className="card-title">Md Moksedul Haque</h2>
            <p className="-m-2">mdmehediislammoksedul@gmail.com</p>
            <div className=" flex gap-4 mt-5  ">
              <div className="flex text-xl">
                <a href="https://github.com/mehediislamm" target="__blank">
                  <FaGithub
                    className="mt-1 text-primaryColor"
                    style={20}
                    size={40}
                  />
                </a>
                {/* <span>Email</span> */}
              </div>
              <div className="flex text-xl">
                <a href="https://www.facebook.com/mehadihasan.mokcadul">
                  <FaFacebook
                    className="mt-1 text-primaryColor text-black"
                    style={30}
                    size={40}
                  />
                </a>
                {/* <span>Facebook</span> */}
              </div>
              <div className="flex text-xl gap-2">
                <a href="https://www.linkedin.com/in/mehedi-islam-moksedul-6a83622a4/">
                  <FaLinkedin
                    className="mt-1 text-primaryColor text-black"
                    style={40}
                    size={40}
                  />
                </a>
                {/* <span>LinkedIn</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ boxShadow: "#23A455 0px 3px 8px" }}
          className="card  bg-base-100 m-10 "
        >
          <figure className="px-10 pt-10">
            <img src={redoy} alt="Shoes" className="rounded-full w-40 h-40  " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MD Radiat Hossain Ridoy</h2>
            <p className="-m-2">radiathossainr@gmail.com</p>

            <div className=" flex gap-4 mt-5  ">
              <div className="flex text-xl">
                <a href="https://github.com/Radiat09" target="__blank">
                  <FaGithub
                    className="mt-1 text-primaryColor text-black"
                    style={20}
                    size={40}
                  />
                </a>
                {/* <span>Email</span> */}
              </div>
              <div className="flex text-xl">
                <a href="https://www.facebook.com/profile.php?id=100009109246385">
                  <FaFacebook
                    className="mt-1 text-primaryColor text-black"
                    style={30}
                    size={40}
                  />
                </a>
                {/* <span>Facebook</span> */}
              </div>
              <div className="flex text-xl gap-2">
                <a href="http://www.linkedin.com/in/radiat-hossain-ridoy0">
                  <FaLinkedin
                    className="mt-1 text-primaryColor text-black"
                    style={40}
                    size={40}
                  />
                </a>
                {/* <span>LinkedIn</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
