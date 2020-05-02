import React from 'react';
import VideoItem from './VideoItem.js'

const VideoList = ({ videos, onVideoSelect }) => { // this allows me to not use props all the time
    const renderedVideos = videos.map((video) => {
        return (
            <VideoItem 
                key={video.id.videoId} 
                video={video} 
                onVideoSelect={onVideoSelect} 
            />
        )
    })
    return(
        <div className='ui relaxed divided list'>
            {renderedVideos}
        </div>

    )
}
export default VideoList
