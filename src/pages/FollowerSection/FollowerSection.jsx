import React from 'react'
import Follower from '../../components/Follower/Follower'
import './FollowerSection.scss';

const FollowSection = () => {
    return (
        <>
            <div className="followerSection">
                <Follower imgpath="images/user-1.jpeg" followername="user-1" />
                <Follower imgpath="images/user-2.jpeg" followername="user-2" />
                <Follower imgpath="images/user-3.jpeg" followername="user-3" />
                <Follower imgpath="images/user-4.jpeg" followername="user-4" />
            </div>
        </>
    )
}

export default FollowSection
