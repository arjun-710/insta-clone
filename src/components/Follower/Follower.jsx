import React from 'react'
import Profilepic from '../Profilepic/Profilepic'

import "./Follower.scss";

const Follower = (props) => {
    return (
        <>
            <div className="followerContainer">
                <Profilepic imgpath={props.imgpath} imgname={props.followername}/>
                <div className="followerContainer__name">
                    <h2>{props.followername}</h2>
                    <h3>Follows You</h3>
                </div>
                <h2>Follow</h2>
            </div>
        </>
    )
}

export default Follower
