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
                <button onClick={redirecttoNewArrivals} className='bg-purple-600 flex items-center text-white py-3 px-10 text-center hover:bg-black'>Checkout New Arrivals
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Page