import React from 'react'
import { Montserrat } from 'next/font/google'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";


const montserrat = Montserrat({
    weight: ['700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})


const page = () => {
    return (
        <div className={montserrat.className}>
            <div className='topheader bg-white p-3 flex justify-between items-center text-black w-full'>
                <div></div>
                <div className='animate-marquee text-purple-950 font-semibold lg:text-xl md:text-xl sm:text-sm text-[11px] text-center '>
                    Exclusive Offer:  <span className='text-blue-900 lg:text-[18px] md:text-[18px] sm:text-sm text-[11px] font-extrabold tracking-wide'>UNLOCK 50% OFF
                    </span>
                </div>
                <div className='flex'>
                    <MdMarkEmailUnread className='lg:text-2xl md:text-2xl sm:text-xl text-xl ml-3' />
                    <FaPhoneAlt className='lg:text-2xl md:text-2xl sm:text-xl text-xl ml-3' />

                </div>
            </div>

        </div>
    )
}

export default page