import React from "react";
import resume from '../assets/Doc/Resume.pdf'
import { motion } from "motion/react"

import { useTypewriter, Cursor } from "react-simple-typewriter";
import myimage from "../assets/images/Ashoka.jpg";

const Home = ({darkmodeon}) => {
  const [typeEffect] = useTypewriter({
    words: ["Ashok Lande 👋 </>", "React Devloper </>" , "Student </>", "MERN Stack Dev </>"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      <div id="home" className={` ${darkmodeon?'text-white':''} 2xl:px-20 px-15 py-28 items-center h-screen  flex md:flex-row flex-col p-6 md:gap-5  `}>
        <motion.div
        initial={{ scale:0, opacity: 0 }}
        whileInView={{ scale:1, opacity: 1 }}
        transition={{duration:0.8,type:'spring',stiffness:100}}
        className="photo md:w-1/2  items-center gap-2 flex flex-col justify-center">
         <img
            className="rounded-full object-cover bg-green-700 border-[30px] border-green-500 w-full h-auto max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-md"
            src={myimage}
            alt="Description"
          />
          <h2 className=" md:text-2xl  font-mono">
          Hi I'am a Ashok Lande 👋
          </h2>
        </motion.div>
        <div className="content  md:w-1/2  flex flex-col items-start md:justify-center">
          <h1 className={` ${darkmodeon?'text-white':''}  md:text-3xl max-sm:text-xl  font-mono text-3xl text-black font-semibold`}>
            <br />
            {'<>'}  I&apos;m a
            <span className="md:text-3xl ml-2 text-green-700 max-sm:text-xl text-3xl font-medium">
              {typeEffect}
            </span>
            <Cursor />
          </h1>
          <div
           className="content mt-10">
            <motion.p
               initial={{x:-20,opacity:0}}
               whileInView={{x:1,opacity:1}}
               transition={{duration:0.9,delay:0.6}}
             className="md:text-base font-mono text-sm ">
              Hi, I'm , a passionate web developer. I specialize in creating
              intuitive and responsive websites using modern technologies.
               Let's
              collaborate and build something amazing together! Feel free to
              replace Ashoka with your actual name and adjust the phrasing to
              match your style or area of expertise.
            </motion.p>
          </div>
          <div
           className="gap-3  flex mt-10">
            <button className={` ${darkmodeon?'border-white':''} text-xl px-6 max-sm:text-base border-2 py-3 bg-black hover:bg-slate-300 hover:text-black text-white rounded-3xl`}>Contact me <i class="ri-arrow-right-fill"></i></button>
            <button onClick={()=>window.open(resume)}  className={` ${darkmodeon?'border-white  hover:text-black':''} max-sm:text-base text-xl px-6 py-3 hover:bg-slate-300 border-2  border-slate-600 rounded-3xl`}>my resume <i className="ri-download-2-line"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
