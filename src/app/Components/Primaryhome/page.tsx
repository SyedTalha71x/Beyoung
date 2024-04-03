import React from 'react'
import { Montserrat } from 'next/font/google'
import Primary from '../Primary/page'

const montserrat = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const page: React.FC = () => {
    return (
        <>
            <div className='lg:flex lg:justify-center lg:items-center flex justify-center items-center text-center mt-[5%] flex-col mb-4 sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center'>
                <div className='text-xl font-semibold mb-2'>Feel the unreal</div>
                <div className={montserrat.className}>
                    <span className='text-6xl mt-2  font-bold tracking-wide uppercase'>
                        Beyoung Module
                    </span>
                </div>
                <div className='mt-4'>
                    <button className='semibtn bg-purple-700 text-white py-3 px-10 capitalize text-center rounded-sm'>Shop Now</button>
                </div>
            </div>
            <Primary />
        </>
    )
}

export default page