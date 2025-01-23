import React from "react";
import {useTypewriter} from 'react-simple-typewriter'

const Header = ({setdarkmodeon,darkmodeon}) => {
  const [typeEffect] = useTypewriter({
    words: ["..."],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 200,
  });

  return (
    <>
      <div  className=" fixed top-0 left-0 right-0 flex justify-between bg-slate-100 items-center px-10">
        {/* Ashoka Logo on the left */}
        <h2 className="text-4xl font-medium flex items-center">
          <img
            className="object-cover max-sm:h-10 h-20"
            src="https://logos.textgiraffe.com/logos/logo-name/Ashoka-designstyle-birthday-m.png"
            alt="Ashoka Logo"
          />
          <p className="text-red-500 max-sm:text-2xl md:text-7xl">{typeEffect}</p>
        </h2>
         

        <div className="flex gap-8 items-center ">
        <p onClick={()=>setdarkmodeon(prev=>!prev)} className="text-3xl flex cursor-pointer">
            <i className={`max-sm:text-2xl ${darkmodeon?'ri-sun-line':'ri-moon-clear-fill'} `}></i>
          </p>
         <div   className="flex gap-3 cursor-pointer items-center  rounded-full border-2 max-sm:px-3 px-6  mx-sm:py-1 md:py-3  max-sm:mr-1 mr-12 border-black h-fit ">
         <button className="max-sm:text-xl text-xl">Contact</button>
          <p className="text-2xl ">
            <i className="ri-arrow-right-up-line"></i>
          </p>
         </div>
        </div>
        
      </div>

      <div className="flex gap-3 w-full justify-center  fixed bottom-2">
        <div className="flex w-fit hover:bg-slate-800 bg-slate-400 gap-6 px-6 py-1 rounded-full">
       <a className=" rounded-full text-2xl px-2 bg-white cursor-pointer" href="#home"> <i  className="ri-home-2-line"></i></a>
          <img
            onClick={() =>
              window.open("https://www.instagram.com/ashoklande73/?hl=en")
            }
            className="h-10 cursor-pointer object-center rounded-full"
            src="https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg"
            alt="Instagram Logo"
          />
          <img
            onClick={() =>
              window.open("https://www.linkedin.com/in/ashok-lande-492431230/")
            }
            className="object-cover cursor-pointer object-center h-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRQj_W8078FCL2-vDL5oWTJIVLhz8OH5g-A&s"
            alt="LinkedIn Logo"
          />
          <img
            onClick={() =>
              window.open("https://github.com/Ashoklande", "_blank")
            }
            className="object-cover cursor-pointer object-center h-10 rounded-full"
            src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
            alt="GitHub Logo"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
