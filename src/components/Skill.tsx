import { motion } from 'framer-motion';
import React from 'react'
import { Skill } from '../../typings';
import { urlForImage } from '../../sanity/lib/image';

type Props = {
    skill:Skill;
    directionLeft?: boolean;
}

function Skill({ skill, directionLeft }: Props) {
  return (
    <motion.div 
    whileHover={{ scale: 1.1 }} 
    whileTap={{ scale: 0.9}}
    className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlForImage(skill?.image)} 
        className='rounded-2xl object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out '
        />
        <div className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:backdrop-blur-[6px] h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-2xl z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {skill?.progress}%
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill