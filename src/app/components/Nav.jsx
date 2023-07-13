"use client";
import React, { useState } from "react";

const items = ["Home", "About", "Projects", "Contact", "Resume"];

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <nav className="sticky top-0 bg-amber-50 dark:bg-slate-800 z-10">
        <div className="flex justify-between lg:items-center lg:w-[95%] m-auto p-3 relative">
          <a href="#" className="logo   w-[50px]">
            <img
              className=" z-0"
              src="https://i.imgur.com/LFh8Kdi.png"
              alt="s_logo"
            />
          </a>

          <div
            className={`md:flex flex-row items-center md:static fixed md:bg-transparent  dark:md:bg-transparent dark:bg-slate-700 bg-orange-300 
     justify-center

            md:translate-x-[0px]
   m-3  p-[10vh]   pb-60
           ${
             mobileNav
               ? "h-[100vh] w-[100vw] top-0 left-0 "
               : "  translate-x-[800px]"
           } transition duration-300  ease-out p-auto md:m-0 md:p-0 `}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`text-black dark:text-white m-6  md:m-0
                
                ${mobileNav ? " m-20" : ""}
                `}
              >
                {item !== "Resume" ? (
                  <a
                    className="  m-2 p-2 dark:border-l-blue-500  dark:border-white border-l-black border-red-600 border-2 rounded-md"
                    key={index}
                    href={`#${item}`}
                    onClick={() => setMobileNav(false)}
                  >{`${item}`}</a>
                ) : (
                  <a
                    className=" m-2 p-2 dark:border-l-blue-500  dark:border-white border-l-black border-red-600 border-2 rounded-md"
                    key={index}
                    href={`https://drive.google.com/file/d/17kFM6CM-d7jsr0vTB48fF9cck1-kkvn7/view?usp=sharing`}
                  >
                    Resume
                  </a>
                )}
              </div>
            ))}
          </div>

          <button
            className="p-3 md:hidden z-20"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="20px"
                height="20px"
              >
                <path
                  fill="#dff0fe"
                  d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"
                />
                <path
                  fill="#4788c7"
                  d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                width="20px"
                height="20px"
              >
                <path fill="#c2e8ff" d="M2.5 36.5H77.5V43.5H2.5z" />
                <path
                  fill="#7496c4"
                  d="M77,37v6H3v-6H77 M78,36H2v8h76V36L78,36z"
                />
                <path fill="#c2e8ff" d="M2.5 16.5H77.5V23.5H2.5z" />
                <path
                  fill="#7496c4"
                  d="M77,17v6H3v-6H77 M78,16H2v8h76V16L78,16z"
                />
                <g>
                  <path fill="#c2e8ff" d="M2.5 56.5H77.5V63.5H2.5z" />
                  <path
                    fill="#7496c4"
                    d="M77,57v6H3v-6H77 M78,56H2v8h76V56L78,56z"
                  />
                </g>
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div className="  text-black fixed  bottom-0 ml-[20px] lg:ml-[35px] opacity-0  md:opacity-100 bg-transparent">
        <div className="hover:pb-[8px] h-[40px]  items-center mb-[5px]  flex  transition-all duration-300">
          <a
            className="h-[25px] w-[25px]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/sanyam542/"
            title="Linkedin"
          >
            <svg
              className=" dark:fill-white fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>

        <div className="hover:pb-[8px] h-[40px]  items-center mb-[5px] flex  transition-all duration-300">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/sanyam542"
            className="h-[25px] w-[25px]"
            title="Github"
          >
            <svg
              className=" dark:fill-white fill-black"
              xmlns="http://www.w3.org/2000/svg"
              strokeLinecap="round"
              strokeinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
        <div className="fixed dark:text-white bottom-0 right-0 w-[50px] mr-[0px] lg:mr-[25px] opacity-0 md:opacity-100 ">
          <div className="rotate-90  mb-[100px] mx-auto text-[14px] hover:transition-all duration-500  hover:mb-[125px] tracking-widest ml-[0px]">
            <a href="mailto:sanyamsingh5421@gmail.com">
              sanyamsingh5421@gmail.com{" "}
            </a>
          </div>
          <div className="h-[120px] w-[2.4px] bg-lightestSlate mx-auto mt-[10px] "></div>
        </div>
      </div>
    </>
  );
};

export default Nav;
