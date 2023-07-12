import React from "react";

const items = [
  "MongoDb",
  "Express",
  "React",
  "Node",
  "Next.js",
  "Typescript",
  "Tailwind",
  "Material UI",
  "React Native",
];
const About = () => {
  return (
    <section
      className=" max-w-[85%] m-auto xl:mb-[520px] pt-[100px] mb-[250px]  text-black dark:text-white "
      id="About"
    >
      <h3 className=" text-4xl">About Me</h3>
      <div className="flex md:flex-row flex-col">
        <div className="">
          <p>
            Hello! My name is Sanyam Singh, and I enjoy creating things that
            live on the internet. My interest in web development started in 2020
            when I pursued a BTech in computer science and learned about
            programming languages. Then I tried Web Development. Then, after
            exploring some more new technologies to develop web apps, I finally
            chose MERN stack .
          </p>
          <br />
          <p>
            {" "}
            Fast-forward to today, I have built a number of web applications.
            After months of practise and skilling myself with web development
            technologies I am looking for an opportunity as a full stack
            developer.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className=" list-disc p-3 gap-7">
            {items.map((item, index) => {
              return (
                <li className="" key={index}>
                  {item}
                  {item === 5 ? <br /> : <></>}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center items-center md:items-start ">
          <img
            className=" rounded-2xl h-[80%] max-w-[272px]  max-h-[272px]"
            src="https://i.imgur.com/4pZhhzq.jpg"
            alt="profilePicture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
