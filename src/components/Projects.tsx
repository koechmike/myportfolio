import { motion } from 'framer-motion';
import React from 'react'
import { Project } from '../../typings';
import { urlForImage } from '../../sanity/lib/image';
import Image from 'next/image';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div 
    initial={{ opacity:  0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute aboutfontsize top-24 uppercase tracking-[15px] text-white backdrop-blur-[2px] text-2xl xl:top-12'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#F7AB0A] scrollbar-track-[#00000083]'>
            {projects?.map((project, i) => (
                <div key={project._id} className='max-w-7xl w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-5 md:p-44 h-screen'>
                    <motion.div
                    whileHover={{ scale: 1.3 }} 
                    whileTap={{ scale: 1.2 }}
                    >
                    <a href={project?.linkToBuild}>
                    <motion.img 
                    initial={{
                        y: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    className="w-64 h-64 mt-5 exImage object-cover md:w-80 md:h-95 xl:w-[700px] xl:h-[600px] rounded-2xl"
                    src={urlForImage(project?.image)} 
                    alt=''
                    />
                    </a>
                    </motion.div>
                    <div className='space-y-2 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl exfontsize font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                        {project?.title}
                        </h4>
                        <div className='flex items-center justify-center space-x-5'>
                            {project?.technologies.map((technology) => (
                            <img
                            className='h-10 w-10 rounded-2xl'
                            key={technology._id}
                            src={urlForImage(technology?.image)}
                            alt='' 
                            />
                        ))}
                        </div>
                        <div>
                        <p className='pgfontsize max-h-60 xl:max-h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-[#00000083] text-lg md:text-left'>
                        {project?.summary}
                        </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#ffffff13] left-0 h-[500px] -skew-y-12 skew'>
        </div>
    </motion.div>
  )
}

export default Projects
