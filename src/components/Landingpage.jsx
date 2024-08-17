import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
      className="w-full h-screen bg-[#252525] bt-1 block"
    >
      <div className="textstructure mt-24 ml-14">
        {["We create", "Eye-opening", "presentations"].map((item, index) => (
          <div key={index} className="masker font-neue leading-snug">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9vw] h-[6vw] relative -top-[.4vw] bg-red-500 mr-4 rounded-lg overflow-hidden"
                >
                  <img
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </motion.div>
              )}
              <h1 className="text-8xl flex items-center leaning-[1vw] h-full uppercase">{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-700 mt-16 font-grotesk text-sm flex justify-between items-center py-5 px-16">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}
        <div className="start flex items-center gap-4">
          <div className="px-5 py-3 border-[1px] border-zinc-300 rounded-full text-md font-light text-sm uppercase">Start the project</div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-300">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landingpage;
