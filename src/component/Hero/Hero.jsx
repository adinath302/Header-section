import React from 'react'
import styles from '../Hero/Hero.module.css';

const Herosection = () => {
    return (
        <>
            <section >
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative '>
                    {/* Brand info */}
                    <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                        <div className='text-center md:text-left space-y-6'>
                            <h1 className='text-5xl lg:text-5xl font-bold leading-relaxed xl:leading-normal'>Consistency with the focus gives you the
                                <span className='text-[#fb923c]'>{" "}confidence</span>
                            </h1>
                            <p className='text-gray-600 xl:max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                            {/* button section  */}
                            <div className='flex justify-center gap-8 md:justify-start'>
                                <button className='primary-btn flex items-center gap-2 mt-4 '> Order Now</button>
                                <button> Watch Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Hero info */}
                </div>
            </section>
        </>
    )
}

export default Herosection