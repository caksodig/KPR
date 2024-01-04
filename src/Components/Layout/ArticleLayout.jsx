"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';

const ArticleLayout = ({ image, title, content }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-8 max-w-7xl mx-auto my-12 p-8 ">
      <div className="md:w-1/2 mb-4 md:mb-0 ">
        <Image width={500} height={300} src={image} alt={title} className="rounded-md" loading="lazy" />
      </div>
      <div className="md:w-1/2" data-aos="fade-up">
        <h1 className="text-4xl  font-bold mb-1">Welcome to</h1>
        <h2 className="text-4xl  font-bold mb-1">{title}</h2>
        <h3 className="text-4xl  font-bold mb-4">Culture</h3>
        <p className="text-lg mb-4">{content}</p>
        <p className="text-lg">Indonesia cultural diversity, encompassing a myriad of traditions, languages, and artistic expressions, is a testament to the nation unique identity. By delving into the depths of this cultural wealth, we gain profound insights into the values, history, and spirit that shape the Indonesian people.</p>
      </div>
    </div>
  );
};

export default ArticleLayout;