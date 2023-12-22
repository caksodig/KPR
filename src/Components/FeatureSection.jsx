"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const FeatureSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out',
        });
    }, []);
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full mx-auto lg:py-16 bg-[#1E1E1E]">
            <div className="lg:w-1/2 py-5 lg:px-[50px] " data-aos="fade-up">
                <h1 className="leading-10 lg:text-8xl lg:pl-20 md:text-4xl text-3xl text-white font-bold mb-2 lg:mb-0">Culture <br/> Based Education<br/></h1>
                <Link href="Kids">
                <p className="text-white lg:pl-20 hover:text-sky-200 hover:underline cursor-pointer lg:text-2xl lg:mt-10 mt-5 leading-loose">
                    For Children as successors of our Heritage
                </p>
                </Link>
            </div>

            <div className="lg:w-1/2 mt-6 lg:px-[100px]  flex justify-center lg:mt-0">
                <img
                    src="/image/kids.jpg"
                    alt="Indonesian Culture"
                    className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-md"
                />
            </div>
        </div>


    )
}

export default FeatureSection
