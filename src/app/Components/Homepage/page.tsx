"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import bgimage from '../../../images/bg.jpg'
import Primaryhome from '../Primaryhome/page'
import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";
import { Montserrat } from 'next/font/google';
import Slider from '../Slider/page'
const MontserratFont = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const Page = () => {
    const [open, setopen] = useState(false)

    const handleClose = () => {
        setopen(!open);
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setopen(true);
        }, 3000);

        return () => { clearTimeout(timeout) }

    }, [])

    return (
        <>
            {open && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-12 relative w-full mx-4 max-w-full md:max-w-2xl lg:max-w-3xl transition-opacity duration-300">
                        <button onClick={handleClose} className="absolute top-2 right-2">
                            <RxCross2 className="text-3xl text-purple-900 font-bold" />
                        </button>
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-[65%] md:w-[70%] pr-6 mb-6 md:mb-0">
                                <Image src="https://www.spl.com.pk/wp/wp-content/uploads/2020/09/NIKE-LOGO-PNG-300x300.png" className="h-full w-full" alt="Dummy Image" width={800} height={600} />
                            </div>
                            <div className="w-[65%] text-center md:w-[70%]">
                                <div className={MontserratFont.className}>
                                    <h2 className="lg:text-3xl md:text-3xl sm:text-xl w-full text-[16px] font-extrabold tracking-wide text-purple-950 text">UNLOCK 50% OFF</h2>
                                </div>
                                <h3 className="lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px] font-semibold text-center w-full mt-4 ">Exclusive Offer: 50% Off All Products!</h3>

                                <div className="mt-4">
                                    <h4 className="lg:text-[15px] md:text-[15px] sm:text-[14px] text-[14px] font-medium text-center w-full mt-1">Use the code</h4>
                                    <span className="lg:text-[20px] md:text-[17px] sm:text-[13px] text-[13px] font-extrabold text-center w-full mt-1">G294KQX8</span>
                                </div>
                                <div className="mt-4">
                                    <button className="lg:text-[18px] md:text-[17px] sm:text-[12px] text-[12px] bg-purple-700 text-white rounded-md w-[60%] py-2 text-center hover:bg-purple-700 transition duration-300">
                                        <Link href="/" >Contact Us</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <Image src={bgimage} height={2041} width={5400} className='h-full w-full object-cover object-center block' alt='bg' />
            </div>
            <Primaryhome />
            {/* <Slider/> */}
        </>
    )
}

export default Page