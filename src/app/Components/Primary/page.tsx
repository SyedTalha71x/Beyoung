"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import uniqueProducts from '../../FreshProducts/data.json'
import Shopbutton from '../../Components/CTA/Shopbutton/page'

const MontserratFont = Montserrat({
    weight: ['500'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});
interface Product {
    title: string;
    slug: string;
    image: string;
    color: string;
    size: string;
    price: number;
    availableqty: number;
    category: string;
}

const Page: React.FC = () => {
    const [products, setproducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const processedProducts = uniqueProducts.reduce((acc: any, item: any) => {
                    if (item.title in acc) {
                        if (!acc[item.title].color.includes(item.color) && item.availableqty > 0) {
                            acc[item.title].color.push(item.color);
                        }
                        if (!acc[item.title].size.includes(item.size) && item.availableqty > 0) {
                            acc[item.title].size.push(item.size);
                        }
                    } else {
                        acc[item.title] = { ...item };
                        if (item.availableqty > 0) {
                            acc[item.title].color = [item.color];
                            acc[item.title].size = [item.size];
                        }
                    }
                    return acc;
                }, {});

                const processedProductsArray: Product[] = Object.values(processedProducts);
                const limitedproductsshow = processedProductsArray.slice(0, 8);
                setproducts(limitedproductsshow);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <>
            <section className={MontserratFont.className}>
                <section className="text-gray-600 body-font mt-6">
                    <div className="container  px-5 py-24 mx-auto">
                        <div className={MontserratFont.className}>
                            <h1 className='manygloweffect uppercase flex justify-center items-center text-xl tracking-wide mb-10 bg-black text-white py-3 w-full'>New Arrivals</h1>
                        </div>
                        <div className="flex flex-wrap -m-4 homecontent">
                            {products.map((item: any, index: any) => (
                                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <Link href={`/FreshProducts/${item.slug}`} passHref>
                                        <div className="block relative h-53 rounded overflow-hidden">
                                            <Image height={400} width={400} alt="ecommerce" className="object-cover object-center  w-full h-full block" src={item.image} />
                                        </div>
                                    </Link>
                                    <div className="mt-4 text-center">
                                        <span className='text-gray-500 text-sm font-medium'>{item.category}</span>
                                        <h2 className="text-gray-900 title-font uppercase text-[16px] font-medium">{item.title}</h2>
                                        <p className="mt-1">${item.price}</p>
                                    </div>
                                    <div className='flex items-center text-center justify-center'>
                                        {item.size.map((size: any, sizeIndex: any) => {
                                            return <div key={sizeIndex} className="flex items-center">
                                                <div className="flex font-semibold ">
                                                    {size === 'L' && <option>L</option>}
                                                    {size === 'S' && <option>S</option>}
                                                    {size === 'M' && <option>M</option>}
                                                    {size === 'XL' && <option>XL</option>}
                                                </div>
                                            </div>
                                        })}

                                    </div>
                                    <div className='flex items-center text-center justify-center gap-2'>
                                        {item.color.map((color: any, colorIndex: any) => (
                                            <div key={colorIndex} className="flex gap-2 h-5 w-6 ">
                                                <button className={`border-2 border-gray-300  ${color === "Blue" ? 'bg-blue-600' : color === 'Black' ? 'bg-black' : color === 'White' ? 'bg-white' : color === 'Gray' ? 'bg-gray-700' : color === 'Jade Smoke' ? 'bg-gray-400' : color === 'Charcoal' ? 'bg-gray-700' : color === 'Yellow' ? 'bg-yellow-600' : ''} w-6 h-6 focus:outline-none`}></button>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <Shopbutton />

        </>
    );
};

export default Page;
