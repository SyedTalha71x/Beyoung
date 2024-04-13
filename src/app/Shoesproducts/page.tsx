"use client";
import React, { useState, useEffect, SetStateAction } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/utils/db';
import Products from '@/utils/Models/Products';
import axios from 'axios';

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

const Page = () => {
    const [products, setproducts] = useState<Product[]>([]);
    const [color, setcolor] = useState<string[]>([]);
    const [size, setsize] = useState<string[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/GetProducts');
                const fetchedProducts = response.data.fetchproducts;
                const processedProducts = fetchedProducts.reduce((acc: any, item: any) => {
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
                setproducts(processedProductsArray);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="text-gray-600 body-font mt-10 cursor-pointer">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((item: any, index: any) => {
                        return <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-70 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-top w-full h-full block" height={400} width={400} src={item.image} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                <p className="mt-1">${item.price}</p>
                            </div>

                            <div className="flex items-center justify-between mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                                {item.color.map((color: any, colorIndex: any) => (
                                    <div key={colorIndex} className="flex gap-2 ">
                                        <button className={`border-2 border-gray-300 ${color === "Blue" ? 'bg-blue-600' : color === 'Black' ? 'bg-black' : color === 'White' ? 'bg-white' : color === 'Gray' ? 'bg-gray-700' : ''} w-6 h-6 focus:outline-none`}></button>
                                    </div>
                                ))}
                                {item.size.map((size: any, sizeIndex: any) => {
                                    return <div key={sizeIndex} className="flex items-center">
                                        <div className="flex ">
                                            {size === 'L' && <option>L</option>}
                                            {size === 'S' && <option>S</option>}
                                            {size === 'M' && <option>M</option>}
                                            {size === 'XL' && <option>XL</option>}
                                        </div>
                                    </div>
                                })}
                            </div>

                        </div>

                    })}
                </div>
            </div>
        </div>
    )
}

export default Page