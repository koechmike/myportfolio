import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageInfo } from '../../typings';
import { urlForImage } from '../../sanity/lib/image'
import Image from 'next/image';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
        `Hi 😀,The Name's ${pageInfo?.name}`,
        "Just-A-Dude-Who-Loves-Tea.tsx",
        "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 1500,
});
  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-x-hidden z-10">
      <BackgroundCircles />
      <Image 
      className="relative rounded-full h-32 w-32 mx-auto object-cover" src={urlForImage(pageInfo.heroImage)}
      alt=''
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-white pb-0 tracking-[13px]'>
        {pageInfo?.role}
        </h2>
        <h2 className='text-white text-5xl lg:text-6xl font-semibold px-10 typefontsize pt-0'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
        </h2>
        <div className='pt-5 xl:space-x-3 md:space-x-2'>
          <Link href="#about"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.005 }} className='heroButton'>About</motion.button></Link>
          <Link href="#experince"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.005 }} className='heroButton'>Experince</motion.button></Link>
          <Link href="#skills"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.005 }} className='heroButton'>Skills</motion.button></Link>
          <Link href="#projects"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.005 }} className='heroButton'>Projects</motion.button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero