import React from 'react'

const VideoLayout = ({ videoUrl }) => {
    return (
        <div className="max-w-7xl mx-auto lg:my-28 my-12 p-8 bg-white">
            <div className="relative h-0 overflow-hidden" style={{ paddingTop: '56.25%' }}>
                <iframe
                    title="Video"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
        </div>

    )
}

export default VideoLayout
