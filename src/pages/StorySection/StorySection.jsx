import React from 'react';
import Profilepic from '../../components/Profilepic/Profilepic'
import './StorySection.scss'

const StorySection = () => {
    return (
        <>
        <div className="storySection">
        <Profilepic imgpath="images/user-1.jpeg" imgname="user-1"/>
        <Profilepic imgpath="images/user-2.jpeg" imgname="user-2"/>
        <Profilepic imgpath="images/user-3.jpeg" imgname="user-3"/>
        <Profilepic imgpath="images/user-4.jpeg" imgname="user-4"/>
        <Profilepic imgpath="images/user-5.jpeg" imgname="user-5"/>
        </div>
            
        </>
    )
}

export default StorySection
