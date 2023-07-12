"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const Top = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section
        id="Home"
        className=" xl:m-72 max-w-[85%] m-auto xl:mb-[420px] mb-[150px] xl:mt-0"
      >
        {dark ? (
          <div className="">
            <img
              onClick={() => {
                setDark(false);
                setTheme("light");
              }}
              className=" cursor-pointer xl:h-64 xl:w-64 w-48 h-48 animate-pulse "
              src="https://i.imgur.com/IKUxBDj.png"
              alt="moon"
            />
          </div>
        ) : (
          <div>
            <img
              className=" xl:h-64 xl:w-64 w-48 h-48 animate-pulse "
              src="https://i.imgur.com/HUN3qyv.png"
              alt="sun"
              onClick={() => {
                setDark(true);
                setTheme("dark");
              }}
            />
          </div>
        )}
        <h5 className=" text-lg text-black dark:text-white">Hi, my name is</h5>
        <h1 className="xl:text-7xl  dark:text-white text-4xl text-black sm:text-red-600 ">
          Sanyam Singh
        </h1>
        <h1 className="xl:text-7xl text-4xl text-slate-400">
          {" "}
          I build things for web & mobile.
        </h1>
        <p className="text-slate-400 ">
          I’m a 20 year old undergraduate computer science student from India
          pursuing <br /> BTech at the SSIPMT, Raipur. I’m passionate about
          building apps and learning new <br /> technologies.
        </p>
        <a href="https://drive.google.com/file/d/17kFM6CM-d7jsr0vTB48fF9cck1-kkvn7/view?usp=sharing">
          <button className="m-1 dark:text-white text-red-600 border-red-600  rounded-md border-2 dark:border-blue-400 p-2">
            Check Out My Resume!
          </button>
        </a>
      </section>
    </>
  );
};

export default Top;
