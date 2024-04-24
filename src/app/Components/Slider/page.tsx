"use client";
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ['800'],
    subsets: ['latin'],
})


export default function Index() {
    return (
        <div className={montserrat.className}>
            <div className="container mx-auto mt-[7%]">
                <h1 className="flex justify-center text-center text-3xl uppercase font-semibold tracking-wider">Best Selling</h1>
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider naturalSlideWidth={100}
                        naturalSlideHeight={50} className="lg:block hidden" isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/products/YLAJohnnyD3-14-52_400x.jpg?v=1678817409" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/products/323A2217_400x.jpg?v=1678817409" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/YLA_12.133_400x.jpg?v=1705433242" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/YLA_12.1134_400x.jpg?v=1705434741" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/YLA_1.3_400x.jpg?v=1705434694" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/323A5955_9975c347-2baf-4cbf-8897-8986a53db2ba_400x.jpg?v=1702329821" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/323A6006_400x.jpg?v=1701978278" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/425_black_002_11_02_johnny_lifestyle_400x.jpg?v=1707522156" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/YLA_1143.6_400x.jpg?v=1707522155" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/425_off-white_001_11_02_johnny_lifestyle_400x.jpg?v=1707522155" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/products/YLAGlobalSuperShoot-83_400x.jpg?v=1700094261" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Image height={1000} width={1000} src="https://www.youngla.com/cdn/shop/files/YLAGlobalSuperShoot-90_1_400x.jpg?v=1687895544" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider naturalSlideHeight={50} className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider naturalSlideHeight={50} className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
}
