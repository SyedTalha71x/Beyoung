import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const page: React.FC = () => {
    return (
        <>
            <div className='home flex flex-col justify-center items-center shadow-xl'>
                <div className={montserrat.className}>
                    <h1 className='text-6xl font-bold tracking-wide capitalize'>Contact Us</h1>
                </div>

                <p className='w-full text-[16px] text-center font-medium  mt-2'>Want to get in touch? We'd love to hear from you, Here's how you can meet us</p>


            </div>

        </>

    )
}

export default page