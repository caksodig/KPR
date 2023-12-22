import Link from 'next/link'
import React from 'react'

const Activty = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-[#FEFFED]">
            {/* Judul besar di atas */}
            <h1 className="text-4xl md:text-6xl lg:text-left lg:text-8xl md:text-center lg:pl-2 md:w-full font-bold mb-8">
                Dive Deep <br /> Indonesia
            </h1>

            {/* Container untuk paragraf panjang dan Our Activity */}
            <div className="flex flex-col md:flex-row items-center justify-center">
                {/* Paragraf panjang di sebelah kiri */}
                <div className="md:w-full lg:w-1/2 pr-8">
                    <p className="text-lg lg:text-left mb-6 md:mb-10">
                        Diving deep into the rich tapestry of Indonesian culture unveils a vibrant and diverse mosaic that reflects the archipelagos unique blend of history, traditions, and ethnicities. Indonesia, with its over 17,000 islands, is a melting pot where influences from Malay, Javanese, Sundanese, Balinese, and myriad other communities converge. The cultural landscape is characterized by a harmonious interplay of indigenous customs and foreign elements, resulting from centuries of trade, migration, and colonialism. From the enchanting gamelan music that resonates through Java and Bali to the intricate Batik patterns adorning fabrics, each region contributes its distinct flavor to the overall cultural symphony.
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

                {/* Our Activity di sebelah kanan */}
                <div className="md:w-full lg:w-1/2  flex flex-col justify-center lg:pl-[150px] lg:pt-0 mt-6 md:mt-0">
                    {/* Logo dan judul Our Activity */}
                    <div className="mb-4 lg:mb-10 flex items-center">
                        <img src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold">Discuss About <br /> Indonesia Culture</h2>
                    </div>

                    <div className="mb-4 lg:mb-10 flex items-center">
                        <img src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold">Explorer <br /> Indonesian art</h2>
                    </div>

                    <div className="mb-4 lg:mb-10 flex items-center">
                        <img src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold">Learn About  <br /> Indonesia Culture</h2>
                    </div>

                    <div className="mb-4 flex items-center">
                        <img src="/image/k.png" alt="Logo" className="w-16 h-16 object-contain mr-4" />
                        <h2 className="text-xl font-bold">Any Other About <br /> Indonesia</h2>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Activty
