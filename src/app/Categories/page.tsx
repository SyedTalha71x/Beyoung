"use client";
import React, { useState } from 'react'
import { Montserrat } from "next/font/google";
import Image from 'next/image';

const montserrat = Montserrat({
    weight: ['500'],
    subsets: ['latin'],
})

const Page = () => {
    const [isForHimVisible, setIsForHimVisible] = useState(true);
    const [isForHerVisible, setIsForHerVisible] = useState(false);

    const handleForHimClick = () => {
        setIsForHimVisible(true);
        setIsForHerVisible(false);
    };

    const handleForHerClick = () => {
        setIsForHerVisible(true);
        setIsForHimVisible(false);
    };
    return (
        <>
            <section className='mt-14'>
                <div className='flex justify-center items-center'>
                    <div className={montserrat.className}>
                        <div className='flex items-center gap-8 cursor-pointer'>
                            <button onClick={handleForHimClick} className='hover-underline-animation text-[23px] uppercase tracking-wider'>
                                For Him
                            </button>
                            <button onClick={handleForHerClick} className='hover-underline-animation text-[23px] uppercase tracking-wider'>
                                For Her
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={montserrat.className}>
                <section className="text-gray-600 body-font text-center" id='menssection' style={{ display: isForHimVisible ? 'block' : 'none' }}>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="categoriessection flex flex-wrap -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/551_black-wash_003_12_12_floor_54f907f3-136a-4e16-b445-dae839c3345b_400x.jpg?v=1701976852" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">551 - DRIPPY SKULL HOODIE</h2>
                                    <p className="mt-1">$86.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/551_black-wash_003_12_12_floor_54f907f3-136a-4e16-b445-dae839c3345b_400x.jpg?v=170197685https://www.youngla.com/cdn/shop/files/8038_black-temple-dragon_003_11_02_jason_ecomm_400x.jpg?v=16994922782" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">8038 - TOKYO LONGSLEEVES</h2>
                                    <p className="mt-1">$21.15</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/79_400x.jpg?v=1691463313" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">340 WIFE LOVERS - 3 PACK</h2>
                                    <p className="mt-1">$12.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/Untitled-3_180c4d3d-ad48-4be4-a54d-32b706de6736_400x.jpg?v=1686157263" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">134 GAME-TIME SHORTS</h2>
                                    <p className="mt-1">$18.40</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/products/YLA4.3.23Soosh-JohnnyD4-12-14_400x.jpg?v=1681319931" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">403 ELITE TEES</h2>
                                    <p className="mt-1">$16.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/476_teal_001_09_02_johnny_ecomm_400x.jpg?v=1707439094" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">476 - STEALTH COMPRESSION TEES</h2>
                                    <p className="mt-1">$21.15</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/DSC05971_400x.jpg?v=1712252994" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">4038 - LAH CASA SHIRTS</h2>
                                    <p className="mt-1">$12.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/YLA1.19_400x.jpg?v=1694206131" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Him</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">245 AUTOGRAPH JOGGERS</h2>
                                    <p className="mt-1">$18.40</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font text-center" id='womensection' style={{ display: isForHerVisible ? 'block' : 'none' }}>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="categoriessection flex flex-wrap -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-10-29T140817.814_400x.png?v=1712769576" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">W232 - URBAN CUFF JOGGER</h2>
                                    <p className="mt-1">$76.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/w605_urban_001_11_21_floor_400x.jpg?v=1699902773" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">W605 - URBAN CREW SOCK 3 PACK</h2>
                                    <p className="mt-1">$11.15</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/03_28_24_YLA_Her_Floor___SM0090_1_400x.jpg?v=1710870412" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">W612 WATER BOTTLE MINI</h2>
                                    <p className="mt-1">$12.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-10-29T140626.190_400x.png?v=1712609455" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">W520 - URBAN LAYER HOODIE</h2>
                                    <p className="mt-1">$18.40</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/04_05_24_YLA_HER_Ariel_Restock_eComm0135_400x.jpg?v=1712772770" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">W437 - URBAN LAYER TEE</h2>
                                    <p className="mt-1">$76.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-42 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-11-13T110621.914_400x.png?v=1712771244" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">W229 - URBAN STRAIGHT LEG JOGGER</h2>
                                    <p className="mt-1">$29.15</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dcd6f638-9ba2-4c5f-901f-ade67427caff/sportswear-tech-fleece-windrunner-womens-full-zip-hoodie-GNXt2C.png" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium uppercase">Sportswear Tech Fleece </h2>
                                    <p className="mt-1">$22.00</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-53 rounded overflow-hidden">
                                    <Image height={1000} width={1000} alt="ecommerce" className="object-top object-cover w-full h-full block" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e14330cb-6673-42ae-b4f1-074adbd6b68a/everyday-plus-cushioned-training-no-show-socks-6-pairs-XXM9xm.png" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">For Her</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium uppercase">Everyday Plus Cushioned</h2>
                                    <p className="mt-1">$12.40</p>
                                    <div className="flex mt-2 justify-center gap-5 items-center border-b-2 border-gray-100">
                                        <div className="flex">
                                            <button className=" w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-gray-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-indigo-500 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-black w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-red-700 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-orange-400 w-5 h-5 focus:outline-none"></button>
                                            <button className=" ml-1 bg-sky-400 w-5 h-5 focus:outline-none"></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Page