import { Education } from "./components/Education";
import { Technologies } from "./components/Technologies";
import { Map } from "./components/Map";
import { Nav } from "./components/Nav";
import wordle from './assets/wordle.png';
import mentorloop from "./assets/mentorloop.png";
import { Hero } from "./components/Hero";
import './App.css';
import { useEffect, useState } from "react";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 10); 
    setTimeout(() => {
    setIsLoaded(true);
      clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    !isLoaded ? (
      <div className="text-white text-[50px] font-[Boldonse] flex items-center justify-center  absolute bottom-10 left-10">
        {count}
      </div>
    ) : (
      <div className="min-h-screen overflow-y-auto snap-y snap-mandatory text-[aliceblue]">
        <div className="md:m-auto py-10 md:px-10 md:w-[80%] w-full max-w-screen-lg font-[poppins] flex flex-col">
          {/* Hero & Main Content Section */}
          <div className=" py-5">
            <Nav />
            <div className="cards flex flex-col md:grid grid-cols-3 gap-4 px-10">
              <Hero />
              <Education />
              <Technologies />
              <Map />
            </div>
          </div>
          {/* Projects Section */}
          <div className="flex flex-col items-center gap-4 ">
            <h1 className="text-2xl">Projects</h1>
            <div className="cards flex flex-col md:grid grid-cols-3 gap-4 px-10">
            <ProjectCard title="MentorLoop" bullets={[
"Designed and developed a platform connecting college students with alumni mentors to enhance technical education",
 "Built with React (front end), Node.js, Express.js, and PostgreSQL (back end) using Prisma ORM."]}/>
  <ProjectCard title="Wordle" bullets={[
"Designed and developed a platform connecting college students with alumni mentors to enhance technical education",
 "Built with React (front end), Node.js, Express.js, and PostgreSQL (back end) using Prisma ORM."]}/>
   
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default App;
