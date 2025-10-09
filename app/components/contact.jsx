import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dea87515-38d0-4ce1-a9f6-20a99c9445a7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center 
    bg-[length:90%_auto]'>
       <h4 className='text-center  text-4xl'>Connect with me</h4>
                        
        <h2 className='font-semibold text-center'>Get in touch</h2>
        <p className='text-sm text-gray-700 text-center'>I'd love to hear from you!</p>
       

       <form onSubmit={onSubmit} className='max-w-2xl mx-auto '> 
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>
        <input className=' bg-gray-200  p-2' type="text" name='name' placeholder='Enter Your Name' required/>
        <input className=' bg-gray-200 p-2' type="email" name='email'  placeholder='Enter Your Email' required/>
       </div>
       <textarea name='message' className='mt-6 bg-gray-200 w-2xl p-2' rows='6' placeholder='Your Message' required></textarea>
       <button type='submit' className='w-max flex items-center justify-center
                        text-white bg-black px-5 py-2 rounded-full
                        mx-auto my-5 cursor-pointer hover:bg-pink-300 duration-500'>Submit Now</button>
       <p className= 'text-green-500 mt-4'>{result}</p>
       </form>
    </div>
  )
}

export default Contact
