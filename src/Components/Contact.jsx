import React from 'react'

import { motion } from "motion/react"

const Contact = ({darkmodeon}) => {
  return (
    <div id='contact'
     className={` ${darkmodeon?'text-white':''} 2xl:px-20 px-15 h-screen py-28  items-center  flex flex-col gap-5 p-5 `}>
        <h2 className='text-lg  md:text-xl'>Connect With me</h2>
        <h1 className='text-2xl md:text-4xl'>Get in touch</h1>
        <p className='md:text-xl md:max-w-[40%] md:mt-6 font-mono text-sm'> I'd love to hear from you! If you any questions,comment and feedback,please use form below.</p>
        <div className={`flex w-full md:flex-row flex-col md:max-w-[40%] gap-3 `} >
       <input className={`  ${darkmodeon?'bg-transparent border-2 border-white':''} text-xl px-6 py-3 outline-none border-2 border-black rounded-md w-full`} type="text" placeholder='Enter your name' />
       <input className={`  ${darkmodeon?'bg-transparent border-2 border-white':''} text-xl px-6 py-3 outline-none border-2 border-black rounded-md w-full`} type="text" placeholder='Enter your email' />
        </div>

        <textarea rows={13}  className={` md:max-w-[40%] w-full px-6 py-3 outline-none border-2 text-xl border-black rounded-md  ${darkmodeon?'bg-transparent border-2 border-white':''} `} placeholder="Enter your message  " ></textarea>
         <button className='text-2xl bg-green-600 text-white px-8 rounded-r-full rounded-l-full py-3'>Submit <i class="ri-arrow-right-fill"></i></button>
    </div>
  )
}

export default Contact