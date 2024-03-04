import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PageInfo } from '../../typings';
    
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

type Props = {
    pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:koechmike77@gmail.com?subject=${formData.subject}&body=Hi, my name ${formData.name}. ${formData.message} (${formData.email})`;
    };


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'>
         <h3 className='absolute aboutfontsize top-24 uppercase tracking-[15px] text-white backdrop-blur-[2px] text-2xl'>
            Contact Me
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center cmFont'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 cmFont justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
                </div>
                <div className='flex items-center space-x-5 cmFont justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.email}</p>
                </div>
                <div className='flex items-center space-x-5 cmFont justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo.address}</p>
                </div>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input
                    {...register('name')} 
                    placeholder='Name'
                    className='outline outline-1 outline-[#f7ac0a91] bg-white bg-opacity-60 rounded-sm border-b-4 px-6 py-4 border-[#ffffff] backdrop-blur-[1px]
                    text-black placeholder-[#000000] transition-all focus:border-[#F7AB0A] focus:backdrop-blur-[0px] focus:outline focus:outline-1 
                    focus:outline-[#ffffff] focus:text-black hover:border-[#F7AB0A] cursor-text hover:backdrop-blur-[0px] cmNameInput' type='text'/>
                    <input
                    {...register('email')} 
                    placeholder='Email'
                    className='outline outline-1 outline-[#f7ac0a91] bg-white bg-opacity-60 rounded-sm border-b-4 px-6 py-4 border-[#ffffff] backdrop-blur-[1px]
                    text-black placeholder-[#000000] transition-all focus:border-[#F7AB0A] focus:backdrop-blur-[0px] focus:outline focus:outline-1 
                    focus:outline-[#ffffff] focus:text-black hover:border-[#F7AB0A] cursor-text hover:backdrop-blur-[0px] cmEmailInput' type='email'/>
                </div>
                <input
                {...register('subject')} 
                placeholder='Subject'
                className='contactInput' type='text'/>
                <textarea
                {...register('message')} 
                placeholder="Message"
                className='contactInput' />
                <button 
                type='submit'
                className='bg-[#F7AB0A] py-5 px-10 rounded-md text-white font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe