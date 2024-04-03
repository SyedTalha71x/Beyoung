import React from 'react'
import Image from 'next/image'
import bgimage from '../../../images/bg.jpg'
import Primaryhome from '../Primaryhome/page'

const page = () => {
    return (
        <>
            <div>
                <Image src={bgimage} height={2041} width={5400} className='h-full w-full object-cover block' alt='bg' />
            </div>
            <Primaryhome />
        </>
    )
}

export default page