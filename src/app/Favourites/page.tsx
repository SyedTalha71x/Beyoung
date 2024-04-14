"use client";
import React, { useEffect, useState, useContext } from "react";
import storeContext from "../Context/storeContext";
import Image from "next/image";

export default function Index() {
    const context = useContext(storeContext);
    const { favourite, addtoFavourite, removefromfavoruite, ClearFavourite, Favoruitelength } = context;
    const [show1, setshow1] = useState(true);

    return (
        <div className="mx-auto mt-24 container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
            <div className="flex flex-col jusitfy-start items-start">
                <div className="mt-3">
                    <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800">Favourites</h1>
                </div>
                {/* <div className="mt-4">
                    <p className="text-2xl tracking-tight leading-6 text-gray-600">{Favoruitelength}</p>
                </div> */}



                {Object.keys(favourite).map((item: any, index: any) => {
                    return <div key={index} className=" mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
                        <div className="flex flex-col">
                            <div className="relative">
                                <Image height={1000} width={1000} className="hidden lg:block" src={favourite[item].image} alt="bag" />
                                <Image height={1000} width={1000} className="hidden sm:block lg:hidden" src={favourite[item].image} alt="bag" />
                                <Image height={1000} width={1000} className=" sm:hidden" src={favourite[item].image} alt="bag" />
                                <button aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400">
                                    <svg className="fil-current" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">{favourite[item].name}</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button aria-label="show menu" onClick={() => setshow1(!show1)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400">
                                        <svg className={`fill-stroke ${show1 ? "block" : "hidden"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg className={`fill-stroke ${show1 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div id="menu1" className={` flex-col jusitfy-start items-start mt-12 ${show1 ? "flex" : "hidden"}`}>
                                <div className="mt-2">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">{favourite[item].qty}</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">{favourite[item].size}</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">{favourite[item].color}</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">${favourite[item].price}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                })}
                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                    <div className="w-full">
                        <button onClick={ClearFavourite} className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">Empty Favourite</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
