import React from 'react';
import Image from 'next/image';

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] 
        lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image
            layout='fill'
            objectFit='cover'
            src='https://links.papareact.com/0fm'
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
                <button className='my-3 font-bold shadow-md px-10 py-4 bg-white 
                text-purple-600 text-sm sm:text-lg rounded-full hover:shadow-xl 
                active:scale-90 transition-all duration-200'>
                    I Am Flexible 
                </button>
            </div>
        </div>
    )
}

export default Banner
