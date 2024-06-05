import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Projects() {
  const cards = [useAnimation(), useAnimation()];
  const [check, setCheck] = useState("");

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
    setCheck(index);
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
    setCheck("");
  };

  return (
    <div>
      <div className="h-[35vh] w-full bg-zinc-900 border-b-[0.5px] border-zinc-600">
        <h1 className="h-full w-full px-5 py-16 text-[2.5rem] font-['Neue_Montreal']">
          Featured projects
        </h1>
      </div>
      <div className="h-[110vh] w-full flex gap-[1rem] p-4 border-b-[0.5px] border-zinc-600 bg-zinc-900">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className={`cardcontainer bg-blend-lighten hover:bg-blend-exclusion relative ${check === 0 ? "z-[10]" : "z-[5]"} scale-[1] h-[90vh] w-1/2 bg-gray-800 bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png')] rounded-xl`}
        >
          <h1 className="absolute -mr-[84px] right-0 top-[40%] font-bold text-6xl overflow-hidden">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                key={index} // Add key to prevent React warning
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{
                  duration: "0.2",
                  ease: [0.76, 0, 0.24, 1],
                  delay: index * 0.05,
                }}
                className="inline-block text-[#CDEA68]"
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className={`cardcontainer bg-blend-lighten hover:bg-blend-exclusion relative ${check === 1 ? "z-[10]" : "z-[5]"} scale-[1] h-[90vh] w-1/2 border-[1px] border-zinc-500 bg-gray-800 bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg')] rounded-xl`}
        >
          <h1 className="absolute -ml-[70px] left-0 top-[40%] font-bold text-6xl overflow-hidden">
            {"VISE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{
                  duration: "0.2",
                  ease: [0.76, 0, 0.24, 1],
                  delay: index * 0.05
                }}
                className="inline-block text-[#CDEA68]"
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
