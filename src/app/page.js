import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Top from "./components/Top";

export default function Home() {
  return (
    <main
      className="  bg-amber-50 dark:bg-slate-800
    overflow-x-hidden transition duration-1000 "
    >
      <Top />

      <About />
      <div className=" bg-gradient-to-b from-amber-50 to-amber-200 dark:from-slate-800 dark:to-black ">
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
