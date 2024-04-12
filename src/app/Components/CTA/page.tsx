"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import items from './data.json'
import Link from 'next/link';

const Page = () => {
    const router = useRouter();
    function redirectToProducts() {
        router.push('/Shoesproducts');
    }

    return (
        <div className="mx-auto container  flex justify-center gap-11 items-center py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Boost your Performance</p>
                    </div>
                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                        <p className="text-base leading-6 text-gray-600">Step up your game with Beyoung Boost: Elevate every stride</p>
                    </div>
                    <div className="mt-16 w-full">
                        <button onClick={redirectToProducts} className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                            <p className="text-xl font-medium leading-5">See More</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-col justify-center items-center  sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                    {items.map((k: any, index: any) => {
                        return (
                            <div key={index}>
                                <Link href={`/CTAProducts/${k.slug}`}>
                                    <Image
                                        height={600}
                                        width={600}
                                        className=" lg:block"
                                        src={k.image}
                                        alt="sofa"
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page