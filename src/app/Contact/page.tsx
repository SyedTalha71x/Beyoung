import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const Page: React.FC = () => {
    return (
        <>
            {/* <div className='home flex flex-col justify-center items-center shadow-xl'>
                <div className={montserrat.className}>
                    <h1 className='text-6xl font-semibold tracking-wide uppercase'>Contact Us</h1>
                </div>
                <p className='w-full text-[16px] text-center font-medium mt-2'>
                    Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can meet us
                </p>
            </div> */}
            <div className='mt-10 text-xl text-black'>Contact Page Comming Soon</div>
        </>
    );
};

export default Page;
