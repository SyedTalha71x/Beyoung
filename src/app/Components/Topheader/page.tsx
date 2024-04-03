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
                <div className='text-purple-950 font-semibold'>
                    Exclusive Offer:  <span className='text-blue-900 font-extrabold tracking-wide'>UNLOCK 50% OFF
                    </span></div>
            </div>
        </div>
    )
}

export default page