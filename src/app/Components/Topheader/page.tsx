import React from 'react'
import { Montserrat } from 'next/font/google'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { SiNike } from "react-icons/si";


const montserrat = Montserrat({
    weight: ['700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})


const page = () => {
    return (
        <div className={montserrat.className}>
            <div className='topheader cursor-pointer bg-[#E6F6F5]  p-2 flex justify-between items-center text-black w-full'>
                <SiNike className='text-2xl' />
                <div className='flex'>
                    <MdMarkEmailUnread className='lg:text-2xl md:text-2xl sm:text-xl text-xl ml-3' />
                    <FaPhoneAlt className='lg:text-2xl md:text-2xl sm:text-xl text-xl ml-3' />

                </div>
            </div>

        </div>
    )
}

export default page