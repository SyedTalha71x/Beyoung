"use client";
import React from 'react'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({
    weight: ['600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})
const Page = () => {
    const router = useRouter();
    const redirecttoNewArrivals = () => {
        router.push('/Newarrivals')
    }
    return (
        <div className=' flex justify-center items-center mb-10'>
            <div className={montserrat.className}>
                <button onClick={redirecttoNewArrivals} className='bg-purple-600 text-white py-3 px-10 text-center hover:bg-black'>Checkout New Arrivals</button>
            </div>
        </div>
    )
}

export default Page