import React from 'react';
import Post from '../../components/Post/Post';
import './PostSection.scss';
import '../../components/Post/Post';

const PostSection = () => {
    return (
        <>
            <div className="postSection">
                <Post postimage="images/post-1.jpg" profilepath="images/user-1.jpeg" username="zack" caption="Nice"/>
                <Post postimage="images/post-2.jpg" profilepath="images/user-2.jpeg" username="zack" caption="Nice"/>
                <Post postimage="images/post-3.jpg" profilepath="images/user-3.jpeg" username="zack" caption="Nice"/>
                <Post postimage="images/post-4.jpg" profilepath="images/user-4.jpeg" username="zack" caption="Nice"/>
            </div>
        </>
    )
}

export default PostSection
