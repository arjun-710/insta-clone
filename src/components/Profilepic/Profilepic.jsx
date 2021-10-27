import React from 'react'
import './Profilepic.scss'
const Profilepic = (props) => {
    return (
        <>
        <div className="profilepicContainer">
            <img  src={props.imgpath} alt={props.imgname}/>
        </div>
        </>
    )
}

export default Profilepic
