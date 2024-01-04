import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Activty = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-[#FEFFED]">
            <h1 className="text-4xl sm:text-6xl md:text-8xl text-center font-bold mb-8">
                Dive Deep <br /> Indonesia
            </h1>
        
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 pr-16">
                    <p className="text-lg md:text-left mb-6 md:mb-10">
                        Diving deep into the rich tapestry of Indonesian culture unveils a vibrant and diverse mosaic that reflects the archipelagos unique blend of history, traditions, and ethnicities. Indonesia, with its over 17,000 islands, is a melting pot where influences from Malay, Javanese, Sundanese, Balinese, and myriad other communities converge. The cultural landscape is characterized by a harmonious interplay of indigenous customs and foreign elements, resulting from centuries of trade, migration, and colonialism. From the enchanting gamelan music that resonates through Java and Bali to the intricate Batik patterns adorning fabrics, each region contributes its distinct flavor to the overall cultural symphony.
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

                <div className="md:w-1/2 mt-6 md:mt-0">
                    <div className="mb-4 md:mb-10 flex items-center">
                        <Image width={30} height={30} src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold text-center md:text-left">Discuss About <br /> Indonesia Culture</h2>
                    </div>
                    <div className="mb-4 md:mb-10 flex items-center">
                        <Image width={30} height={30} src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold text-center md:text-left">Discuss About <br /> Indonesia Culture</h2>
                    </div> <div className="mb-4 md:mb-10 flex items-center">
                        <Image width={30} height={30} src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold text-center md:text-left">Discuss About <br /> Indonesia Culture</h2>
                    </div> <div className="mb-4 md:mb-10 flex items-center">
                        <Image width={30} height={30} src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold text-center md:text-left">Discuss About <br /> Indonesia Culture</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activty;