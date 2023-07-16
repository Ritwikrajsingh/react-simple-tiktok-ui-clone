import React, {useRef} from 'react'
import FooterLeft from '../FooterLeft'
import FooterRight from '../FooterRight'
import './index.css'

export default function Video (props) {
    const videoRef = useRef(null)

    const {
        url,
        channel,
        description,
        song,
        likes,
        shares,
        messages
    } = props

    const playPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }
    
    return (
        <div className='video'>
            <video
                loop
                onClick={playPause}
                src={url}
                ref={videoRef}
                className='player'
            >
            </video>
            <div className='bottom-controls'>
                <FooterLeft
                    song={song}
                    channel={channel}
                    description={description}
                />
                <FooterRight
                    likes={likes}
                    shares={shares}
                    messages={messages}
                />
            </div>
        </div>
    )
}