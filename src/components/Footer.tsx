import { motion } from 'framer-motion';
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Footer({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            " Get in touch",
        ],
        loop: 2,
        delaySpeed: 2000,
    });
  return (
    <footer className='sticky p-5 flex flex-row items-start justify-between max-w-full mx-auto space-x-5 z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration:1.5,
        }}
        >

        <div className='flex flex-row items-center space-x-2'>
            {/* Social Icons */}
            <SocialIcon url="https://twitter.com/Mquick72117110" bgColor='transparent' className='border rounded-md'/>
            <SocialIcon url="https://www.instagram.com/mi.chael_10k_b/" bgColor='transparent' className='border rounded-md'/>
            <SocialIcon url="https://www.linkedin.com/in/mikekoech1ok" bgColor='transparent' className='border rounded-md'/>
            <SocialIcon url="https://www.facebook.com/micky.qiuksilver" bgColor='transparent' className='border rounded-md'/>
        </div>
        
        </motion.div>
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration:1.7,
        }}
        >
        <div className='flex flex-row items-center text-gray-300 cursor-pointer space-x-2'>
            
            <p className='text-white text-sm uppercase hidden md:inline-flex'><span>{text}</span></p>
            <SocialIcon className='cursor-pointer border rounded-md' network='email' bgColor='transparent'/>
        </div>
        </motion.div>
    </footer>
  )
}

export default Footer