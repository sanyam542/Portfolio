import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Top from "./components/Top";

// import Home from "../../components/Home";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-amber-50 to-amber-200 dark:from-slate-800 dark:to-black  ">
      <div className="   ">
        {/* <div className="text-4xl"> hello</div> */}

        <Top />
        {/* <div
          className="flex justify-between w-[70%]  m-auto
        "
        >
          <div>helo1</div>
          <div>hell2</div>
        </div> */}

        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
