import Link from 'next/link';
import React from 'react';

const SecondSection = () => {
    return (
        <main className="flex flex-col lg:flex-row items-center justify-center w-full flex-1 px-6 text-center lg:text-left">
            <div className="lg:w-1/2 lg:pr-12 mb-8">
                <h1 className="text-8xl font-bold lg:mb-10 mb-3">Pillars of Indonesian Culture</h1>
                <p className="text-2xl">
                    Welcome to our landing page! We're delighted to have you here.
                </p>
                <p className="text-2xl">
                    This page serves as your gateway to a world of information, resources,
                    and opportunities.
                </p>
                <p className="text-2xl">
                    Our goal is to provide you with a seamless and engaging experience,
                    guiding you towards the information you need and the possibilities
                    that await.
                </p>
                <p className="text-2xl mb-4 lg:mb-10">
                    Thank you for visiting, and we hope you find exactly what you're
                    looking for.
                </p>
                <Link href="/About" className="group relative inline-flex items-center overflow-hidden rounded-3xl border border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-black">
                        <span class="absolute -end-full transition-all group-hover:end-4">
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
                        <span class="text-sm font-medium transition-all group-hover:me-4"> Here To Activity </span>
                    </Link>
            </div>
            <div className="lg:w-1/2">
                {/* Replace the placeholder with your actual image */}
                <img
                    src="/image/kotak.png"
                    alt="Image"
                    className="w-full h-auto rounded-md"
                />
            </div>
        </main>
    );
};

export default SecondSection;
