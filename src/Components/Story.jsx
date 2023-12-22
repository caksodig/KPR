import React from 'react'

const Story = ({ title, content, imageUrl }) => {
    return (
        <div className="max-w-md mx-auto lg:my-8 my-4 p-6 bg-transparent border border-gray-300 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{content}</p>
            <img src={imageUrl} alt={`Illustration for ${title}`} className="hover:scale-105 w-full h-auto rounded-md" />
        </div>
    )
}

export default Story
