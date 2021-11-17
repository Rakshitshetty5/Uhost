import React from 'react'
import Image from 'next/image'
const Logo = () => {
    return (
        <Image 
            src='/vercel.svg'
            width={100}
            height={35}
            objectFit="contain"
        />
    )
}

export default Logo
