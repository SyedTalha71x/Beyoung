"use client";
import React, { useContext } from 'react'
import { Montserrat } from 'next/font/google';
import storeContext from '../Context/storeContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({
    weight: ['600'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})


const Page = () => {
   

    const context = useContext(storeContext);
    const { addtoCart, removefromCart, cart, subtotal, Delievry, finalsubtotal, ClearCart } = context;

    return (
        <div className={montserrat.className}>
            <section className="py-24 relative mt-10">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
                    </h2>
                    <div className="hidden lg:grid grid-cols-2 py-6">
                        <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                        <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                            <span className="w-full max-w-[260px] text-center">Quantity</span>
                            <span className="w-full max-w-[200px] text-center">Total</span>
                        </p>
                    </div>

                    {Object.keys(cart).map((item) => {
                        return <div key={cart[item].ItemCode} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                            <div
                                className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                <div className="img-box"><Image height={400} width={400} src={cart[item].image} alt="perfume bottle image" className="xl:w-[140px]" /></div>
                                <div className="pro-data w-full max-w-sm ">
                                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                                        {cart[item].name}
                                    </h5>
                                    <p
                                        className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                        {cart[item].size}</p>
                                    <p
                                        className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                        {cart[item].color}</p>
                                    <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${cart[item].price} </h6>

                                </div>
                            </div>
                            <div
                                className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                                <div className="flex items-center w-full mx-auto justify-center">
                                    <button onClick={() => { removefromCart(item, 1, cart[item].image, cart[item].price, cart[item].name, cart[item].size, cart[item].color) }}
                                        className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                            fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                                        placeholder="1" value={cart[item].qty} />
                                    <button onClick={() => { addtoCart(item, 1, cart[item].image, cart[item].price, cart[item].name, cart[item].size, cart[item].color) }}
                                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                            fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <h6
                                    className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                                    ${cart[item].price}</h6>
                            </div>
                        </div>
                    })}
                    <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                        <div className="flex items-center justify-between w-full mb-6">
                            <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">${subtotal}</h6>
                        </div>
                        <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                            <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                            <h6 className="font-semibold text-xl leading-8 text-gray-900">${Delievry}</h6>
                        </div>
                        <div className="flex items-center justify-between w-full py-6">
                            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                            <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${finalsubtotal}</h6>
                        </div>
                    </div>
                    <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                        <button
                            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                            to Checkout
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                fill="none">
                                <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button onClick={ClearCart}
                            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Empty Cart
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                                fill="none">
                                <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Page