import React, { useState } from "react";
import ShareIcon from "../../icons/Share";
import MessageIcon from "../../icons/Message";
import FavouriteIcon from "../../icons/FavouriteIcon";
import FavouriteIconBordered from "../../icons/FavouriteIconBordered";
import './index.css'


export default function FooterRight(props) {
    const { likes, shares, messages } = props
    const [liked, setLiked] = useState([false, likes])

    return (
        <div className="footer-right">
            <div className="sidebar-icon">
                {liked[0]
                ?
                <FavouriteIcon
                    style={{
                        width: "40px",
                        height: "40px"
                    }}
                    onClick={()=> {
                        setLiked([false, likes])
                    }}
                />
                :
                <FavouriteIconBordered
                    style={{
                        width: "40px",
                        height: "40px"
                    }}
                    onClick={()=> {
                        setLiked([true, likes + 1])
                    }}
                />
            }
                <p>{liked[1]}</p>
            </div>
            <div className="sidebar-icon">
                <MessageIcon
                    style={{
                        width: "40px",
                        height: "40px"
                    }}
                />
                <p>{messages}</p>
            </div>
            <div className="sidebar-icon record-below">
                <ShareIcon
                    style={{
                        width: "40px",
                        height: "40px"
                    }}
                />
                <p>{shares}</p>
            </div>
            <div className="sidebar-icon record">
                <img src="https://static.thenounproject.com/png/934821-200.png"/>
            </div>
        </div>
    )
}