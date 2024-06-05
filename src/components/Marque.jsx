import { motion } from 'framer-motion'
import React from 'react'

const marque = () => {
  return (
    <div className='marquee h-[45vh] w-full -mt-3 rounded-tl-xl rounded-tr-xl bg-[#004D43] overflow-hidden'>
      <div className='relative -top-10 px-5 text-[16rem] mb-[5rem] font-["Test_Founders_Grotesk_X"] text-nowrap uppercase'>
        <motion.div className='flex gap-10' >
          <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }}>We are Ochi</motion.h1>
          <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }}>We are Ochi</motion.h1>
          <motion.h1 initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }}>We are Ochi</motion.h1>
        </motion.div>
      </div>
    </div>
  )
}

export default marque
