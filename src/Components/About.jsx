import React from 'react'
import { assets, infoList, toolsData } from '../assets/images/assets.js'
import { motion } from "motion/react"

const About = ({darkmodeon}) => {
  return (
    <div className={` ${darkmodeon?'text-white':''} h-screen  items-center  flex flex-col gap-2 p-5 `}>
        <motion.h2 
         initial={{x:-20,opacity:0}}
         whileInView={{x:1,opacity:1}}
         transition={{duration:0.9,delay:0.6}}
        className='text-lg font-light md:text-xl'>Introduction</motion.h2>
        <motion.h1
         initial={{x:-20,opacity:0}}
         whileInView={{x:1,opacity:1}}
         transition={{duration:0.9,delay:0.6}}
         className='text-3xl md:text-5xl'>About me</motion.h1>
       <div className='items-center justify-center  flex h-full flex-col'>
       <motion.p
        initial={{x:-20,opacity:0}}
        whileInView={{x:1,opacity:1}}
        transition={{duration:0.9,delay:0.6}}
        className='md:text-xl md:max-w-[40%] max-sm:hidden font-mono text-lg mb-8' > I am  Frontend Devloper .thoughout my career,I have the privilages of collerborating with prestigious organzations,contributing their success and grouth.
        </motion.p>

        <div className= ' flex w-fit max-sm:w-full max-sm:flex-col md:gap-7 '>
           {infoList.map((item)=>{
            return <motion.div
            initial={{x:-20,opacity:0}}
            whileInView={{x:1,opacity:1}}
            transition={{duration:0.9,delay:0.6}}
             className={`border-2 ${darkmodeon?'border-white':' border-black'} w-full  items-start mt-6 max-h-64 rounded-lg flex flex-col gap-3 p-6`}>
                <img className=' ' src={item.icon} alt={item.title} />
                <h3 className='font-semibold text-lg'>{item.title}</h3>
                <p className='text-base'>{item.description}</p>
             </motion.div>
            
           })}
        </div >
        < h2 className='flex items-start w-full md:max-w-[40%] mt-11 text-xl  text-gray-500'>Tools I used </h2>
       <div className='flex md:max-w-[40%] items-start w-full gap-4 mt-11'>
       {toolsData.map((item)=>{
            return <img className={`h-16 border-2 border-black p-2 rounded-xl  ${darkmodeon?'border-white':''}`} src={item}  />
        })}
       </div>
       </div>
    </div>
  )
}

export default About