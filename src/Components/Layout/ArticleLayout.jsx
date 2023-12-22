"use client"
import React, {useEffect} from 'react';
import AOS from 'aos';

const ArticleLayout = ({ image, title, content }) => {
  useEffect(() => {
    AOS.init({
        duration: 800,
        offset: 200,
        easing: 'ease-in-out',
    });
}, []);
  return (
    <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center gap-8 max-w-7xl mx-auto my-12 p-8 ">
      <div className="lg:w-1/2 mb-4 lg:mb-0 ">
        <img src={image} alt={title} className="w-full h-auto rounded-md" />
      </div>
      <div className="lg:w-1/2" data-aos="fade-up">
        <h1 className="text-4xl lg:text-[100px] lg:mb-[45px] font-bold mb-1">Welcome to</h1>
        <h2 className="text-4xl lg:text-[100px] lg:mb-[45px] font-bold mb-1">{title}</h2>
        <h3 className="text-4xl lg:text-[100px] lg:mb-[75px] font-bold mb-4">Culture</h3>
        <p className="text-lg mb-4">{content}</p>
        <p className="text-lg">Indonesia's cultural diversity, encompassing a myriad of traditions, languages, and artistic expressions, is a testament to the nation's unique identity. By delving into the depths of this cultural wealth, we gain profound insights into the values, history, and spirit that shape the Indonesian people.</p>
      </div>
    </div>
  );
};

export default ArticleLayout;