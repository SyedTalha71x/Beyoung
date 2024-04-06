"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const MontserratFont = Montserrat({
    weight: ['600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const Page: React.FC = () => {
    const [uniqueProducts, setUniqueProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/GetProducts');
                setUniqueProducts(response.data.fetchproducts);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="text-gray-600 body-font mt-6">
            <div className="container px-5 py-24 mx-auto">
                <div className={MontserratFont.className}>
                    <h1 className='flex justify-center items-center text-xl tracking-wide mb-10 bg-black text-white py-3 w-full'>New Arrivals</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {uniqueProducts.map((item: any, index: any) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link href={`/Products/${item.slug}`} passHref>
                                <div className="block relative h-53 rounded overflow-hidden">
                                    <Image height={400} width={400} alt="ecommerce" className="object-cover object-center  w-full h-full block" src={item.image} />
                                </div>
                            </Link>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                <p className="mt-1">${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;
