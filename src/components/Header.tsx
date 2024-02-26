import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons'
import { Social } from '../../typings'

type Props = {
    socials: Social[];
  //children: React.ReactNode; // Allow the Header component to accept children
}

function Header({ socials }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Get in touch",
        ],
        loop: 3,
        delaySpeed: 1000,
    });
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        {/* Render children here */}
        {/* {children} */}
        
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
        className='flex flex-row items-center space-x-2'
        >
            {/* Social Icons */}
            {socials.map((social) => (
            <motion.div key={social._id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.1 }}><SocialIcon key={social._id} url={social.url} bgColor='transparent' className='border rounded-md'/></motion.div>))}
            {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.1 }}><SocialIcon url="https://www.instagram.com/mi.chael_10k_b/" bgColor='transparent' className='border rounded-md'/></motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.1 }}><SocialIcon url="https://www.linkedin.com/in/mikekoech1ok" bgColor='transparent' className='border rounded-md'/></motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.1 }}><SocialIcon url="https://www.facebook.com/micky.qiuksilver" bgColor='transparent' className='border rounded-md'/></motion.div> */}
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
        className='flex flex-row items-center text-gray-300 cursor-pointer space-x-2'
        >
            {/* <Link href="#contact"> */}
            <p className='text-white text-sm font-serif uppercase hidden md:inline-flex'><span>{text}</span></p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9}} transition={{ duration: 0.1 }}>
            <SocialIcon href="#contact" className='cursor-pointer border rounded-md' network='email' bgColor='transparent'/>
            
        </motion.div>
        {/* </Link> */}
        </motion.div>
    </header>
  )
}

export default Header
