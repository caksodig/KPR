"use client";
import Story from "@/Components/Story";
import React, { useState } from "react";
import Head from "next/head";
import Footer from "@/Components/utilities/Footer";

const Kids = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleStories, setVisibleStories] = useState(6); // Number of stories to initially display
  const stories = [
    {
      title: "Indo Batik Heritage",
      content:
        "Explore the rich history of Indonesian batik, a UNESCO-recognized cultural heritage.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Wayang Kulit's Myths",
      content:
        "Dive into the enchanting world of Wayang Kulit, traditional shadow puppetry.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Balinese Dance Tales",
      content:
        "Discover the beauty of traditional Balinese dance forms passed down through generations.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Kecak Monkey Art",
      content:
        "Explore the rhythmic Kecak dance, a captivating form of storytelling through vocal chants.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Rendang Culinary Art",
      content:
        "Delve into the history and culinary artistry behind Rendang, an iconic Indonesian dish.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Prambanan Marvel",
      content:
        "Uncover the brilliance and cultural significance of Prambanan, a Hindu temple complex.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Toraja Rituals",
      content:
        "Learn about the elaborate funeral rituals in Toraja, a testament to ancestral reverence.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Sasando Sounds",
      content:
        "Explore the traditional music of Sasando, a unique harp-like instrument from East Nusa Tenggara.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Bali Aga Traditions",
      content:
        "Discover the customs and way of life in Tenganan, a Bali Aga village dedicated to preserving traditions.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Malin Kundang Tale",
      content:
        "Read the folk tale of Malin Kundang, deeply rooted in the cultural fabric of West Sumatra.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Javanese Batik Art",
      content:
        "Meet the skilled artisans behind Javanese batik, masters of the intricate wax-resist dyeing technique.",
      imageUrl: "/image/cover.jpg",
    },
    {
      title: "Borobudur Journey",
      content:
        "Embark on a journey through the history and symbolism of Borobudur, the world's largest Buddhist temple.",
      imageUrl: "/image/cover.jpg",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    // Increase the number of visible stories when "Load More" is clicked
    setVisibleStories((prevVisibleStories) => prevVisibleStories + 6);
  };

  const filteredStories = stories
    .filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, visibleStories); // Only display the specified number of stories

  return (
    <div className="bg-gradient-to-b from-sky-200 to-zinc-50">
      <Head>
        <title>Children Stories - My Storybook</title>
        <meta
          name="description"
          content="Enjoy delightful stories for children."
        />
      </Head>
      <div className="relative flex items-center">
        {" "}
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full mt-5 bg-transparent hover:bg-white rounded-md border-gray-200 py-2.5 pe-10 px-4 shadow-sm sm:text-sm"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center w-full flex-3 px-20 text-center">
        <h1 className="text-6xl mt-10 font-bold col-span-full">
          Children Stories
        </h1>
        {filteredStories.map((story, index) => (
          <Story key={index} {...story} />
        ))}
      </main>

      {visibleStories < stories.length && (
        <div className="flex justify-center my-4">
          <button
            onClick={handleLoadMore}
            className="hover:outline text-black px-4 py-2 rounded-md"
          >
            Load More
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Kids;
