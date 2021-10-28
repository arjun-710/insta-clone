import React from 'react';
import Profilepic from '../../components/Profilepic/Profilepic'
import './StorySection.scss'

const StorySection = () => {
    return (
        <>
        <div className="storySection">
        <div className="storySection__story">
            <Profilepic imgpath="images/user-1.jpeg" imgname="user-1"/>
            <text>Zack</text>
        </div>
        <div className="storySection__story">
            <Profilepic imgpath="images/user-2.jpeg" imgname="user-2"/>
            <text>Cody</text>
        </div>
        <div className="storySection__story">
            <Profilepic imgpath="images/user-3.jpeg" imgname="user-3"/>
            <text>Monica</text>
        </div>
        <div className="storySection__story">
            <Profilepic imgpath="images/user-4.jpeg" imgname="user-4"/>
            <text>Joey</text>
        </div>
        <div className="storySection__story">
            <Profilepic imgpath="images/user-5.jpeg" imgname="user-5"/>
            <text>Chandler</text>
        </div>
        
        
        
        
        </div>
            
        </>
    )
}

export default StorySection
