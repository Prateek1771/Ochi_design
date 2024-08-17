import { motion } from "framer-motion";

function Marque() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full bg-[#004D43] rounded-tr-[50px] rounded-tl-[50px] -ml-[2px] overflow-hidden"
    >
      <div className="border-b-2 border-zinc-300 flex whitespace-nowrap">
        <div className="border mt-10"></div>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ type: "tween", ease: "linear", repeat: Infinity, duration: 100 }}
          className="text-[22vw] leading-none font-neue font-semibold mt-2 ml-6 inline-block pr-3"
        >
           We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi We are Ochi
        </motion.h1>
        {/* Add motion components to other h1 elements */}
      </div>
    </motion.div>
  );
}

export default Marque;
