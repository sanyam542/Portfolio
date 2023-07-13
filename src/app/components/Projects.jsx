"use client";
import React from "react";

import { motion } from "framer-motion";

const projects = [
  {
    title: "GetSocial",
    image: "https://i.imgur.com/v2iGWKP.png",
    description:
      "It's a fully functional social-media application with features like post, follow/unfollow , like posts, user register and login, chat and much more.",
    technologies: [
      "MongoDb",
      "Express.js",
      "React.js",
      "Node.js",
      "Context api",
      "Soket.io",
    ],
    github: "https://github.com/sanyam542/SocialMedia",
    link: "https://social-media542.netlify.app/",
  },
  {
    title: "ImageGallery",
    image: "https://i.imgur.com/3MBR8yr.png",
    description:
      "Image gallery in which users can browse images . Search specific topic of images",
    technologies: ["React.js", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/sanyam542/image-gallery",
    link: "https://image-gallery-542.netlify.app/",
  },
  {
    title: "BlogPage",
    image: "https://i.imgur.com/1YHnYX0.png",
    description:
      "Express app that enables users to save blogs and their daily journal.",
    technologies: ["EJS", "Express.js", "Node.js", "MongoDb"],
    github: "https://github.com/sanyam542/blog_page",
    link: "https://blogpage-m7rp.onrender.com",
  },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      className=" xl:max-w-[70%] max-w-[85%] m-auto xl:mb-[520px] pt-[100px] mb-[250px] text-black dark:text-white"
    >
      <div className="">
        <h3 className="text-4xl mb-6">Some Things I've built</h3>
        <div></div>
      </div>
      {projects.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ once: false, amount: 0.1 }}
            className="container flex  flex-col-reverse mb-40  border-2 dark:border-blue-400  border-red-600 rounded-xl p-2 "
          >
            <div className="img ">
              <img src={item.image} alt="project_snapshot" />
            </div>
            <div>
              <div className="flex items-center  justify-between">
                <h3 className="text-xl dark:text-blue-400 text-red-600">
                  Featured Project
                </h3>
                <div className="flex items-center gap-4">
                  <a href={item.github}>
                    <svg
                      className=" lg:h-9 lg:w-9 h-7 w-7 dark:fill-slate-400 fill-black"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a href={item.link}>
                    <svg
                      className=" lg:h-8 lg:w-8 h-6 w-6 dark:fill-slate-400 fill-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="M492.703 0H353.126c-10.658 0-19.296 8.638-19.296 19.297 0 10.658 8.638 19.296 19.296 19.296h120.281v120.281c0 10.658 8.638 19.296 19.296 19.296S512 169.532 512 158.874V19.297C512 8.638 503.362 0 492.703 0z"></path>
                        <path
                          d="M506.346 5.654c-7.538-7.539-19.747-7.539-27.285 0L203.764 280.95c-7.539 7.532-7.539 19.753 0 27.285a19.219 19.219 0 0 0 13.643 5.654c4.933 0 9.873-1.885 13.643-5.654L506.346 32.939c7.539-7.532 7.539-19.753 0-27.285z"
                          strokeWidth="5"
                        ></path>
                        <path d="M427.096 239.92c-10.658 0-19.297 8.638-19.297 19.296v214.191H38.593V104.201h214.191c10.658 0 19.296-8.638 19.296-19.296s-8.638-19.297-19.296-19.297H19.297C8.638 65.608 0 74.246 0 84.905v407.799C0 503.362 8.638 512 19.297 512h407.799c10.664 0 19.296-8.638 19.296-19.297V259.216c0-10.658-8.638-19.296-19.296-19.296z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <h2 className="">{item.title}</h2>
              <p className=" dark:text-slate-400 text-slate-500 ">
                {item.description}
              </p>
              <div className="skills text-red-700 dark:text-white">
                <ul className="list-disc px-5 py-2">
                  {item.technologies.map((i) => {
                    return <li>{i}</li>;
                  })}
                </ul>
              </div>
              <div className="links"></div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Projects;
