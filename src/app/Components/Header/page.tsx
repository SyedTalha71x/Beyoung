"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiUser, FiShoppingCart, FiHeart, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import img from '../../../../src/images/logo.jpg';
import { RxCross2 } from "react-icons/rx";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={montserrat.className}>
            <nav className="bg-white sticky top-0 text-black shadow-xl p-3 flex flex-none justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="text-2xl font-bold">
                            <Image alt='logo' src={img} height={40} width={40} className='rounded-full' />
                        </div>
                    </Link>
                </div>
                <div className="md:hidden">
                    {isOpen ? (
                        <RxCross2 className="text-2xl text-purple-900 absolute top-16 z-40 right-2 cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
                    )}
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
                            <Link href="/Products">
                                <div className="my-2 font-medium text-[16px]">Products</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`hidden uppercase md:flex justify-center flex-grow ${isOpen ? 'hidden' : ''}`}>
                    <Link href="/">
                        <div className="mx-2 font-medium text-[16px]">Home</div>
                    </Link>
                    <Link href="/Story">
                        <div className="mx-2 font-medium text-[16px]">Story</div>
                    </Link>
                    <Link href="/Contact">
                        <div className="mx-2 font-medium text-[16px]">Contact</div>
                    </Link>
                    <Link href="/Products">
                        <div className="mx-2 font-medium text-[16px]">Products</div>
                    </Link>

                </div>
                <div className="hidden md:flex items-center">
                    <div className="flex items-center p-2 border py-2 border-gray-200 rounded-lg mx-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-black placeholder-gray-500 bg-transparent"
                        />
                        <FiSearch className='text-2xl cursor-pointer mb-1 text-gray-500 ml-2' />
                    </div>
                    <div className="mx-2 cursor-pointer">
                        <FiHeart className='text-2xl' />
                    </div>
                    <div className="mx-2 cursor-pointer">
                        <FiUser className='text-2xl' />
                    </div>
                    <div className="mx-2 cursor-pointer">
                        <FiShoppingCart className='text-2xl' />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
