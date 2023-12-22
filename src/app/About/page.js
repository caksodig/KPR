"use client";
import Footer from "@/Components/utilities/Footer";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#B2E6ED]">
      <div className="relative w-full h-[400px] lg:h-[600px] xl:h-[800px] overflow-hidden">
        <h1 className="absolute lg:bottom-52 lg:left-20 text-4xl lg:text-9xl font-bold m-2 right-[10px] bottom-[150px] text-center lg:text-left">
          Our Mission <br /> For Continuation Indonesia Culture
        </h1>
        <hr className="absolute bottom-14 left-1/2 transform -translate-x-1/2 lg:w-[1400px] w-[300px] border-t-2 border-black pt-2" />
      </div>

      <div className="flex flex-col-reverse mb-5 md:flex-row md:mb-0 lg:mb-[117px]">
        <div data-aos="fade-right" className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl md:text-7xl font-bold mb-5">
            Safeguard and <br /> protect.{" "}
          </h2>
          <p className="text-lg md:text-3xl text-gray-600">
            Protect the diverse cultural heritage of Indonesia by implementing
            comprehensive preservation strategies, including documentation,
            conservation
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            className="lg:w-[300px] lg:h-[300px] p-2 max-w-full h-auto"
            src="/image/about/about1.png"
            alt="Gambar Konten"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse mb-5 md:flex-row md:mb-0 lg:mb-[117px]">
        <div className="w-full md:w-1/2 p-8">
          <h2
            data-aos="fade-right"
            className="text-4xl md:text-7xl font-bold mb-5"
          >
            Actively showcase Indonesia cultural.{" "}
          </h2>
          <p
            data-aos="fade-right"
            className="text-lg md:text-3xl text-gray-600"
          >
            Showcase Indonesia cultural richness through various mediums, such
            as arts, literature, and media, to raise awareness and appreciation
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            className="lg:w-[300px] lg:h-[300px] p-2 max-w-full h-auto"
            src="/image/about/about2.png"
            alt="Gambar Konten"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse mb-5 md:flex-row lg:mb-12 ">
        <div data-aos="fade-right" className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl md:text-7xl font-bold mb-5">
            Safeguard and protect.{" "}
          </h2>
          <p className="text-lg md:text-3xl text-gray-600">
            Foster active participation and involvement of communities in
            cultural activities, events, and initiatives, creating a sense of
            ownership
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            className="lg:w-[300px] lg:h-[300px] p-2 max-w-full h-auto"
            src="/image/about/about3.png"
            alt="Gambar Konten"
          />
        </div>
      </div>

      <section className="bg-[#D4DC7880] w-full h-full flex flex-col justify-center items-center py-10 md:py-20">
        <h1 className="text-4xl md:text-8xl font-bold text-center mb-5 md:mb-10">
          Dig deeper into <br /> our activities
        </h1>
        <Link
          href="/Kegiatan"
          className="group relative inline-flex items-center overflow-hidden rounded-3xl border border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-black"
        >
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
          <span class="text-sm font-medium transition-all group-hover:me-4">
            {" "}
            About Activity{" "}
          </span>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default About;
