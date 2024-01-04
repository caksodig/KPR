import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const SecondSection = () => {
    return (
        <main className="flex flex-col md:flex-row items-center justify-center w-full flex-1 px-6 text-center md:text-left">
            <div className="md:w-1/2 md:pr-12 mb-8">
                <h1 className="text-4xl font-bold md:mb-10 mb-3">Pillars of Indonesian Culture</h1>
                <p className="text-xl mb-4 md:mb-10">
                    Welcome to our landing page! We are delighted to have you here.
                    This page serves as your gateway to a world of information, resources,
                    and opportunities.
                    Our goal is to provide you with a seamless and engaging experience,
                    guiding you towards the information you need and the possibilities
                    that await.
                    Thank you for visiting, and we hope you find exactly what you are
                    looking for.
                </p>
                <Link href="/About" className="group relative inline-flex items-center overflow-hidden rounded-3xl border border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-black">
                    <span className="absolute -end-full transition-all group-hover:end-4">
                        <svg
                            class="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                    <span className="text-sm font-medium transition-all group-hover:me-4"> Here To Activity </span>
                </Link>
            </div>
            <div className="md:w-1/2">
                <Image
                    width={300}
                    height={100}
                    src="/image/kotak.png"
                    alt="Image"
                    className="w-full h-auto rounded-md"
                />
            </div>
        </main>
    );
};

export default SecondSection;
