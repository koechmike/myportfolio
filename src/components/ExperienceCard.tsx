import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../../typings'
import { urlForImage } from '../../sanity/lib/image';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-3xl hover:border hover:border-[#f7ac0a5b] items-center space-y-5 flex-shrink-0 w-[600px] md:w-[600px] xl:w-[900px] 
    snap-center hover:backdrop-blur-[1.5px] cursor-pointer transition-opacity duration-200 overflow-hidden exArticle'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
             duration: 0.9,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-48 h-32 exImage rounded-xl xl:w-[300px] xl:h-[200px] object-cover object-center"
        src={urlForImage(experience?.companyImage)}
        alt=''
        /> 
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light exfontsize text-center'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1 exfontsize text-center'>{experience?.company}</p>
            <div className='flex space-x-5 my-2 object-center'>
                {experience.technologies.map((technology) => (
                    <motion.img 
                        whileHover={{ scale: 1.2 }} 
                        whileTap={{ scale: 0.9}} 
                        transition={{ duration: 0.1 }} 
                        className='h-8 w-8 rounded-sm' 
                        key={technology._id}
                        src={urlForImage(technology.image)} alt=''/>
                ))}
            </div>
            <p className='uppercase py-5 text-white'>
                {new Date(experience.dateStarted).toDateString()} -{" "}
                {experience.isCurrentlyWorkingHere
                ? "present"
                : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-2 ml-5 text-lg max-h-60 xl:max-h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-[#00000083] exfontsize'>
                {experience.points.map((point, i ) => (
                    <li key={i}> ▫️ {point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard