"use client";
import React, { useState } from "react";
import Footer from "@/Components/utilities/Footer";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/image/gallery/g3.jpg",
      title: "Batik Art",
      description:
        "Traditional Indonesian batik art, known for its intricate patterns.",
      culturalIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 15l-9-9 9-9M3 15l9-9-9-9"
          />
        </svg>
      ),
    },
    {
      src: "/image/gallery/g1.jpg",
      title: "Wayang Kulit",
      description:
        "Traditional Indonesian shadow puppetry, Wayang Kulit performance.",
      culturalIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l-7-7 7-7 7 7-7 7zm0 0l-7-7 7-7 7 7-7 7zm0 0l-7-7 7-7 7 7-7 7z"
          />
        </svg>
      ),
    },
    {
      src: "/image/gallery/g2.jpg",
      title: "Kecak Dance",
      description:
        "Balinese Kecak dance, a traditional dance and musical drama.",
      culturalIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
    },
    {
      src: "/image/gallery/g4.jpg",
      title: "Traditional Games Fest",
      description:
        "Join in the fun and excitement of traditional Indonesian games during cultural festivals.",
      culturalIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageDetails = (image) => {
    setSelectedImage(image);
  };

  const closeImageDetails = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container mx-auto mt-10 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Cultural Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover rounded-md transition-transform transform group-hover:scale-105 cursor-pointer"
                onClick={() => openImageDetails(image)}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                  onClick={() => openImageDetails(image)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-bold mb-2">{selectedImage.title}</h2>
              <div className="flex items-center mb-2">
                {selectedImage.culturalIcon}
              </div>
              <p className="text-gray-700">{selectedImage.description}</p>
              <button
                className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md"
                onClick={closeImageDetails}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
