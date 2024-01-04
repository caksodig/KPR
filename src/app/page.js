"use client";
import React, { useEffect, useState } from "react";
import ArticleLayout from "@/Components/Layout/ArticleLayout";
import FeatureSection from "@/Components/FeatureSection";
import Hero from "@/Components/Hero";
import SecondSection from "@/Components/SecondSection";
import VideoLayout from "@/Components/Layout/VideoLayout";
import Footer from "@/Components/utilities/Footer";
import Activty from "@/Components/Activty";

const Home = () => {
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUpButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-ambark-200">
      <Hero />
      <ArticleLayout
        image="/image/artcle.png"
        title="Indonesian"
        content="Indonesia has a rich history and culture. With various tribes and customs, Indonesia offers unique diversity. This country's long history includes the period of colonialism, the struggle for independence, and modern development. Indonesian culture includes art, music, dance and various traditions."
      />
      <SecondSection />
      <VideoLayout videoUrl="https://www.youtube.com/embed/rBoYIDWghZc?si=2lD0vvqm93OSLOD3" />
      <FeatureSection />
      <Activty />
      {showScrollUpButton && (
        <button
          onClick={scrollUp}
          className="fixed bottom-8 right-8 bg-black text-white px-4 py-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Home;
