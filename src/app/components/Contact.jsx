import React from "react";

const Contact = () => {
  return (
    <section id="Contact">
      <div className=" text-center max-w-[90%] m-auto text-black dark:text-white">
        <h5 className="dark:text-blue-400 text-red-600">what's next?</h5>
        <h2 className=" xl:text-5xl text-4xl">Get In Touch</h2>
        <p className="dark:text-slate-400">
          I’m currently looking for any new opportunities, my inbox is always
          open.
          <br /> Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <a href="mailto:sanyamsingh5421@gmail.com" className="">
          <button className="  xl:mb-[300px] mb-[200px] m-1 rounded-md border-2 dark:border-blue-400 bp border-red-600 p-2">
            Say Hii!
          </button>
        </a>{" "}
        <br />
        <a href="" className=" text-xs  ">
          Designed & Built by <br /> Sanyam Singh
        </a>
      </div>
    </section>
  );
};

export default Contact;
