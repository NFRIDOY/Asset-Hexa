
import { useRef } from "react";
import toast from "react-hot-toast";
import animate from "../../lottie/Animation - 1702402794506.json";
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
      .then(() => {
        toast.success('Message Sent');
        form.current.reset();
      })
      .catch((error) => {
        // console.error('Email error:', error);
        toast.error("Error");
      });
  };


  return (
    <div id="contact" className="mt-4 mb-20 ">
      <p className="text-3xl font-bold text-center text-black mb-5 mt-10">
        CONTACT US
      </p>
     
      <div id="contact" className="xl:mt-12 flex md:flex-row flex-col gap-10  overflow-hidden">
        {/* Lottie */}
        <div className="text-center md:mt-10 mt-1 md:w-1/2">
          <Lottie className="md:h-[550px] " animationData={animate} loop={true} height={50} width={50} />
        </div>
        {/* Form */}
        <div className='flex-[0.75] bg-gradient-to-tr from-[#8dc487] to-[#b7f4b1f7]   rounded-2xl md:w-1/2'>
          <form ref={form} onSubmit={sendEmail} className='mt-6 px-10 py-8 flex flex-col gap-8 text-black'>
            <div className="flex flex-col md:flex-row md:justify-between gap-3">
              <label className='flex flex-col w-full'>
                <span className='text-black font-medium mb-4'>Name</span>
                <input
                  type='text'
                  name='name'
                  required
                  placeholder=" Your Name :"
                  className='bg-tertiary py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col w-full'>
                <span className='text-black font-medium mb-4'>Email</span>
                <input
                  type='email'
                  name='email'
                  required
                  placeholder="Your Email :"
                  className='bg-tertiary py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
                />
              </label>
            </div>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4'>Subject</span>
              <input
                type='text'
                name='subject'
                required
                placeholder="Subject :"
                className='bg-tertiary py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4'>Your Message</span>
              <textarea
                rows={4}
                name='message'
                required
                placeholder='Message :'
                className='bg-tertiary py-4 px-6 text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button className="bg-gradient-to-r from-[#23A455] via-[#2ecc71] to-[#34D399] hover:border-none  border-none hover:bg-primaryColor  text-white btn-outline btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
