import React from 'react'
import Follower from '../../components/Follower/Follower'
import './FollowerSection.scss';

const FollowSection = () => {
    return (
        <>
            <div className="followerSection">
                <div className="followerSection__text">
                    <text>Suggestions for you</text>
                </div>
                <Follower imgpath="images/user-1.jpeg" followername="zack" />
                <Follower imgpath="images/user-2.jpeg" followername="cody" />
                <Follower imgpath="images/user-3.jpeg" followername="monica" />
                <Follower imgpath="images/user-4.jpeg" followername="joey" />
                <Follower imgpath="images/user-5.jpeg" followername="chandler" />
            </div>
        </>
    )
}

export default FollowSection
