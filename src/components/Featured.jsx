import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "FYDE",
    image: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
  },
  {
    name: "VISE",
    image: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
  },
  {
    name: "TRAWA",
    image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
  },
  {
    name: "BEAN",
    image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
  },
];

function Featured() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (projectName, index) => {
    setActiveProject(projectName);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
    setActiveIndex(null);
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-16">
        <h1 className="text text-7xl font-inter mt-5">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full grid grid-cols-2 gap-10 px-10 mt-10 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cardcontainer relative"
              onMouseEnter={() => handleMouseEnter(project.name, index)}
              onMouseLeave={handleMouseLeave}
            >
              <h1
                className={`absolute flex ${
                  activeProject === project.name ? "left-1/2" : "hidden"
                } overflow-hidden ${
                  activeIndex === index ? `-translate-y-1/2` : `translate-y-0`
                } top-[50%] -translate-x-1/2 z-[9] text-8xl text-[##95b334] font-neue leading-none`}
              >
                {project.name.split("").map((item, index) => (
                  <motion.div
                    key={index}
                    className="inline-block "
                    initial={{ y: "100%" }}
                    animate={
                      activeProject === project.name ? { y: "0" } : { y: "100%" }
                    }
                    transition={{
                      ease: [0.68, -0.6, 0.32, 1.6],
                      delay: index * 0.05,
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </h1>
              <div className="card w-full h-96 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full bg-cover bg-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
