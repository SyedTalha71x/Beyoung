"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const images: string[] = [
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b97896a7-3a6d-4b89-b829-0c9d9645d33d/air-jordan-1-mid-se-womens-shoes-wkMdft.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f64924b-0da5-49fd-857a-533684e27b96/blazer-mid-77-little-kids-shoes-Bnnf4k.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9b764b1-834c-413e-aec2-f460112b2de6/air-max-dn-womens-shoes-dFBSQh.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5bf444c9-5e5b-4bd7-a2fa-c6f866a87c3c/air-vapormax-plus-mens-shoes-nC0dzF.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6969944c-c00b-4a59-83e8-7a5e2bb80f12/dunk-low-retro-mens-shoes-76KnBL.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13aa0ba2-e4f9-4bff-8e5b-fb4e0ac222c6/force-1-low-easyon-little-kids-shoes-hrvqN1.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f07f36c-b98b-4f2f-ab68-e96761e9eb93/air-max-ishod-mens-shoes-DwRtpQ.png',
    'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/27f2c551-0b4d-45ce-9e6e-76e430ea540e/free-metcon-5-mens-workout-shoes-H0Qszz.png'
];

const Slider = () => {


    const itemsPerSlide = 4;
    const slides = images.reduce((acc: any[], curr, index) => {
        const slideIndex = Math.floor(index / itemsPerSlide);
        if (!acc[slideIndex]) {
            acc[slideIndex] = [];
        }
        acc[slideIndex].push(curr);
        return acc;
    }, []);

    const totalSlides = slides.length;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % totalSlides);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentSlide, totalSlides]);

    return (
        <div className="carousel w-full mt-[4%]">
            {slides.map((slideImages, slideIndex) => (
                <div key={slideIndex} id={`slide${slideIndex + 1}`} className={`carousel-item relative w-full gap-10  flex ${slideIndex === currentSlide ? '' : 'hidden'}`}>
                    {slideImages.map((item: any, index: any) => (
                        <div key={index} className="w-1/4">
                            <Image height={400} width={400} src={item} alt={`Slide ${slideIndex + 1}`} className="w-full" />
                        </div>
                    ))}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button onClick={prevSlide} className="btn btn-circle">❮</button>
                        <button onClick={nextSlide} className="btn btn-circle">❯</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider
