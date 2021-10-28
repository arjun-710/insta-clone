import React from 'react'
import Profilepic from '../Profilepic/Profilepic'

import "./Follower.scss";

const Follower = (props) => {
    return (
        <>
            <div className="followerContainer">
                <Profilepic imgpath={props.imgpath} imgname={props.followername}/>
                <div className="followerContainer__name">
                    <p id="name">{props.followername}</p>
                    <p>Follows You</p>
                </div>
                <p>Follow</p>
            </div>
        </>
    )
}

export default Follower
