"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Image from 'next/image';

const FeatureSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out',
        });/*  */
    }, []);
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mx-auto md:py-16 bg-[#1E1E1E]">
            <div className="md:w-1/2  md:px-[50px] " data-aos="fade-up">
                <h1 className="leading-10 md:text-8xl md:pl-20 text-3xl text-white font-bold mb-2 md:mb-0">Culture <br /> Based Education<br /></h1>
                <Link href="Kids">
                    <p className="text-white md:pl-24 hover:text-sky-200 hover:underline cursor-pointer md:text-2xl md:mt-10 mt-5 leading-loose">
                        For Children as successors of our Heritage
                    </p>
                </Link>
            </div>

            <div className="md:w-1/2 mt-6 md:px-[100px]  flex justify-center md:mt-0">
                <Image
                    width={400}
                    height={400}
                    src="/image/kids.jpg"
                    alt="Indonesian Culture"
                    className="md:w-[400px] /* md */:h-[400px] w-[300px] h-[300px] rounded-md"
                />
            </div>
        </div>


    )
}

export default FeatureSection
