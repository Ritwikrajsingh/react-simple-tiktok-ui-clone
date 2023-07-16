import React, {useEffect, useState} from 'react'
import Video from '../Video'
import './index.css'

const API_URL = "https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json"

export default function App () {
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetch(API_URL)
            .then(data => data.json())
            .then(data => setVideos(data))
    }, [])

    return (
        <div className='app'>
            <div className='container'>
                {videos.map(video => {
                    return ( 
                        <Video
                            key={video.url} 
                            url={video.url}
                            song={video.song}
                            likes={video.likes}
                            shares={video.shares}
                            channel={video.channel}
                            messages={video.messages}
                            description={video.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}