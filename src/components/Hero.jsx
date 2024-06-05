import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='hero h-[86vh] w-full px-5 py-[80px] uppercase leading-[3.5rem] tracking-wide text-[75px] font-["Test_Founders_Grotesk_X"] bg-zinc-900'>
      <div>We Create</div>
      <div className="flex items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "85px" }}
          transition={{ease: [0.76, 0, 0.24, 1], duration:0.8}}
          className="h-[12vh] bottom-0 w-[85px] overflow-hidden rounded-lg mt-2 mr-2">
          <img className="h-full" src="src\components\ss.png"></img>
        </motion.div>
        Eye-Opening
      </div>
      <div>Presentations</div>
    </div>
  );
};

export default Hero;
