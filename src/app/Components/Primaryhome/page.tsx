"use client";
import React from 'react'
import { Montserrat } from 'next/font/google'
import Primary from '../Primary/page'
import Slider from '../Slider/page'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const Page: React.FC = () => {
    const router = useRouter();

    const redirecttoProducts = ()=>{
        router.push('/Shoesproducts')
    }
    return (
        <>
            <div className='lg:flex lg:justify-center lg:items-center flex justify-center items-center text-center mt-[5%] flex-col mb-4 sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center'>
                <div className='text-xl font-semibold mb-2'>Feel the unreal</div>
                <div className={montserrat.className}>
                    <span className='lg:text-6xl md:text-4xl sm:text-2xl text-2xl mt-1  font-bold tracking-wide uppercase'>
                        Beyoung Module
                    </span>
                </div>
                <div className='mt-3'>
                    <button onClick={redirecttoProducts} className='semibtn lg:text-[18px] md:text-[18px] sm:text-[15px] text-[14px] bg-purple-700 text-white py-3 px-10 capitalize text-center rounded-sm'>Shop Now</button>
                </div>
            </div>
            {/* <Slider /> */}
            <Primary />
        </>
    )
}

export default Page