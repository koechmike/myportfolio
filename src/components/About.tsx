import { motion } from 'framer-motion'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image';
import { PageInfo } from '../../typings';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-white text-2xl backdrop-blur-[2px] rounded-full pl-2 p-2 aboutfontsize'>
         About
        </h3>
        <motion.img
            initial={{
                x: -100,
                z: 100,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x:0, z:0 }}
            // viewport={{ once :true }}
            src={urlForImage(pageInfo.profilePic)}
            className="-mb-10 md:mb-0 flex-shrink-0 w-48 h-48 mt-16 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold aboutfontsize'>
            Here is a {" "}
            <span className='underline decoration-[#F7AB0A] text-4xl font-semibold'>little</span>{" "} background
          </h4>
        </div>
        <p className='backdrop-blur-[1px] md:text-2xl xl: text-3xl aboutfontsize'>
         {/* Hi😀 I'm Mike. Originally from Northside Atlanta, Georgia, USA, I moved to Kenya with my family at the age of seven.
         Growing up immersed in 
         {" "}
          <span className='text-[#f70a0a] font-semibold underline decoration-[#000000] text-2xl'>K</span>
          <span className='text-[#ffffff] font-semibold underline decoration-[#ff1c1c] text-2xl'>e</span>
          <span className='text-[#0af7bc] font-semibold underline decoration-[#000000] text-2xl'>n</span>
          <span className='text-[#000000] font-semibold underline decoration-[#ffffff] text-2xl uppercase'>y</span>
          <span className='text-[#0af7bc] font-semibold underline decoration-[#000000] text-2xl'>a</span>
          <span className='text-[#ffffff] font-semibold underline decoration-[#0af7bc] text-2xl'>'</span>
          <span className='text-[#ff5252] font-semibold underline decoration-[#0af7bc] text-2xl'>s</span>
         {" "} 
         vibrant and beautiful culture, I attended local schools where my fascination with the 
         intricate world of computer technology and programming began to take root. After earning a bachelor's degree in 
         Mathematics and Computer Science from The Multimedia University of Kenya, I embarked on my career as a Software engineer 
         at White Label Tracking. I am deeply passionate about software development and eager to continue learning and contributing 
         to impactful projects for the betterment of society. */}
         {pageInfo?.backgroundInformation}
        </p>
    </div>
  )
}

export default About