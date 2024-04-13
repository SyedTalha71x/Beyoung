"use client";
import Link from 'next/link';
import { useState, useEffect, useRef, useContext } from 'react';
import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import img from '../../../../src/images/logo.jpg';
import { RxCross2 } from "react-icons/rx";
import { Montserrat } from 'next/font/google';
import storeContext from '@/app/Context/storeContext';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const montserrat = Montserrat({
    weight: ['600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);



    const context = useContext(storeContext);
    const { addtoCart, removefromCart, cart, subtotal } = context

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={montserrat.className}>
            <nav className="bg-white fixed top-0 z-40 text-black w-full shadow-xl p-3 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="text-2xl font-bold">
                            <Image alt='logo' src={img} height={40} width={40} className='rounded-full' />
                        </div>
                    </Link>
                </div>

                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="absolute top-16 right-0 bg-white w-full shadow-lg">
                        <div className="flex flex-col p-4">
                            <Link href="/">
                                <div className="my-2 font-medium text-[16px]">Home</div>
                            </Link>
                            <Link href="/Story">
                                <div className="my-2 font-medium text-[16px]">Story</div>
                            </Link>
                            <Link href="/Contact">
                                <div className="my-2 font-medium text-[16px]">Contact</div>
                            </Link>
                            <Link href="/Shoesproducts">
                                <div className="my-2 font-medium text-[16px]">Products</div>
                            </Link>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="outline-none text-black placeholder-gray-500 bg-transparent pr-4 py-2 border border-gray-200 rounded-lg w-full"
                                />
                                <FiSearch className='absolute top-0 right-0 bottom-0 m-auto mr-2 text-xl text-gray-500 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden uppercase md:flex justify-start ml-6 flex-grow ${isOpen ? 'hidden' : ''}`}>
                    <Link href="/">
                        <div className="mx-2 font-medium text-[16px]">Home</div>
                    </Link>
                    <Link href="/Story">
                        <div className="mx-2 font-medium text-[16px]">Story</div>
                    </Link>
                    <Link href="/Contact">
                        <div className="mx-2 font-medium text-[16px]">Contact</div>
                    </Link>
                    <Link href="/Shoesproducts">
                        <div className="mx-2 font-medium text-[16px]">Products</div>
                    </Link>

                </div>
                <div className="flex items-center">
                    <div className="hidden md:flex items-center p-2 border py-2 border-gray-200 rounded-lg mx-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-black placeholder-gray-500 bg-transparent"
                        />
                        <FiSearch className='text-xl cursor-pointer mb-1 text-gray-500 ml-2' />
                    </div>
                    <div className="mx-2 cursor-pointer">
                        <Link href={"/Favourites"}>
                            <FiHeart className='text-xl' />
                        </Link>
                    </div>
                    <div className="mx-2 cursor-pointer">
                        <FiUser className='text-xl' />
                    </div>
                    <div className="mx-2 cursor-pointer">
                        <Link href={'/Cart'}>
                            <FiShoppingCart className='text-xl' />
                        </Link>
                    </div>
                    <div className="md:hidden">
                        {isOpen ? (
                            <RxCross2 className="text-2xl mt-2 text-purple-900 absolute top-16 z-40 right-2 cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <FiMenu className="text-xl ml-2 cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
