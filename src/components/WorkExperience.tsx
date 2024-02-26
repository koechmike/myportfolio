import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../../typings';

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-row text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[15px] text-white text-2xl backdrop-blur-[2px] rounded-full pl-2 p-2 aboutfontsize'>
        Experience
      </h3>
      <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-[#00000083]'>
        {/* ExperienceCard */}
        {experiences?.map(experience => (
            <ExperienceCard key={experience._id} experience={experience} />
        ))}
        
        
      </div>
    </motion.div>
  );
}

export default WorkExperience;

