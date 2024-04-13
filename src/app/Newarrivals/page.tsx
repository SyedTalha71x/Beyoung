"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import uniqueProducts from '../FreshProducts/data.json'

const MontserratFont = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const Page = () => {
    return (
        <section className="text-gray-600 body-font mt-6">
            <div className="container  px-5 py-24 mx-auto">
                <div className={MontserratFont.className}>
                    <h1 className='manygloweffect flex justify-center items-center text-xl tracking-wide mb-10 bg-black text-white py-3 w-full'>New Arrivals</h1>
                </div>
                <div className="flex flex-wrap -m-4 homecontent">
                    {uniqueProducts.map((item: any, index: any) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link href={`/FreshProducts/${item.slug}`} passHref>
                                <div className="block relative h-53 rounded overflow-hidden">
                                    <Image height={400} width={400} alt="ecommerce" className="object-cover object-center  w-full h-full block" src={item.image} />
                                </div>
                            </Link>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                <span className='text-gray-500 font-semibold'>{item.category}</span>
                                <p className="mt-1">${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Page