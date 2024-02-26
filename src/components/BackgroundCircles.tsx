import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center mt-48'>
      <div className='circle1 absolute border border-[#ffffff] rounded-full xl:h-[200px] xl:w-[200px] md:h-[200px] md:w-[200px] mt-52 animate-ping'/>
      <div className='absolute border border-[#ffffff] rounded-full xl:h-[300px] xl:w-[300px] md:h-[300px] md:w-[300px] mt-52 opacity-30'/>
      <div className='circle3 absolute border border-[#ffffff] rounded-full xl:h-[500px] xl:w-[500px] md:h-[500px] md:w-[500px] mt-52 opacity-60'/>
      <div className='circle4 absolute border border-[#F7AB0A] rounded-full xl:h-[650px] xl:w-[650px] md:h-[650px] md:w-[650px] mt-52 animate-pulse'/>
      <div className='circle5 absolute border border-[#ffffff] rounded-full xl:h-[800px] xl:w-[800px] md:h-[800px] md:w-[800px] mt-52 opacity-35'/>
    </motion.div>
  )
}

export default BackgroundCircles;
