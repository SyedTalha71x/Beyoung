import React from 'react'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
    weight: ['700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})


const page = () => {
    return (
        <div className={montserrat.className}>
            <div className='topheader bg-white p-3 flex justify-center items-center text-black w-full'>
                <div className='animate-marquee text-purple-950 font-semibold lg:text-xl md:text-xl sm:text-xl text-sm text-center '>
                    Exclusive Offer:  <span className='text-blue-900 lg:text-[18px] md:text-[18px] sm:text-xl text-sm font-extrabold tracking-wide'>UNLOCK 50% OFF
                    </span></div>
            </div>
        </div>
    )
}

export default page