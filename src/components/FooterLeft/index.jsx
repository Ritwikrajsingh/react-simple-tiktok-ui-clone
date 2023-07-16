import React from 'react'
import MusicNoteIcon from '../../icons/MusicNoteIcon'
import './index.css'

export default function FooterLeft(props) {
    const {song, channel, description} = props
    
    return (
        <div className='footer-left'>
            <div className='text'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='ticker'>
                    <MusicNoteIcon style={{width: '30px'}}/>
                    <marquee
                        style={{color: "white"}}
                        direction="left"
                        scrollamount="4"
                    >
                        {song}
                    </marquee>
                </div>
            </div>
        </div>
    )
}