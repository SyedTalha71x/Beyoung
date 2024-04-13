"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const Slider = () => {

    return (
        <section className='mt-10 mb-10'>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <Image alt='' src={"https://media1.calvinklein.com/images/20240409/HP/Logo_Shop_1_2x.webp"} height={1000} width={1000} className='h-auto w-full object-cover object-center row-span-3' />
                <Image alt='' src={"https://media1.calvinklein.com/images/20240307_misc/PLP_Banner/Activewear_Men_2x.webp"} height={1000} width={1000} className="h-auto w-full object-cover object-center col-span-2 ..." />

                <Image alt='' src={"https://media1.calvinklein.com/images/20240307_misc/PLP_Banner/Activewear_Men_2x.webp"} height={1000} width={1000} className="h-auto w-full object-cover object-center col-span-2 ..." />
                <Image alt='' src={"https://media1.calvinklein.com/images/20240307_misc/PLP_Banner/Bestsellers_Men_2x.webp"} height={1000} width={1000} className="h-auto w-full object-cover object-center row-span-2 col-span-2 ..." />
            </div>
        </section>
    );
};

export default Slider
