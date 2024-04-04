"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';

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
    const [startImageIndex, setStartImageIndex] = useState(0);
    const [numImagesToShow, setNumImagesToShow] = useState(4); // Initially, show 4 images
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        intervalRef.current = setInterval(goToNext, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        function handleResize() {
            // Adjust the number of images to show based on the screen width
            if (window.innerWidth < 768) {
                setNumImagesToShow(1); // On mobile, show 1 image
            } else if (window.innerWidth < 1024) {
                setNumImagesToShow(3); // On medium screens, show 3 images
            } else {
                setNumImagesToShow(4); // On large screens, show 4 images
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial adjustment on component mount

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToPrevious = () => {
        setStartImageIndex((previous) => Math.max(0, previous - numImagesToShow));
    };

    const goToNext = () => {
        setStartImageIndex((previous) => {
            const nextIndex = previous + numImagesToShow;
            return nextIndex >= images.length ? 0 : nextIndex;
        });
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const startAutoSlide = () => {
        intervalRef.current = setInterval(goToNext, 3000);
    };

    return (
        <div className="relative mt-[6%]" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
            <span>
                <h1 className='text-3xl m-5 capitalize font-semibold mb-10'>Most Trending</h1>
            </span>
            <div className="flex gap-10 m-4 overflow-hidden transition-transform ease-in-out duration-500">
                {images.slice(startImageIndex, startImageIndex + numImagesToShow).map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Image ${startImageIndex + index + 1}`}
                        className="w-full max-w-max h-auto max-h-[400px] shadow-xl"
                    />
                ))}
            </div>
            <div className="absolute top-[58%] transform -translate-y-1/2 left-2">
                <button onClick={goToPrevious} className="text-white bg-gray-700 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>
            <div className="absolute top-[58%] transform -translate-y-1/2 right-2">
                <button onClick={goToNext} className="text-white bg-gray-700 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Slider;
