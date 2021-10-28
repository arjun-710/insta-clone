import React from 'react';
import { useState } from 'react';
import './Navbar.scss';
import Icon from '../../components/Icon/Icon';
import { ReactComponent as Home} from '../../assets/svgs/home.svg';
import { ReactComponent as Msg} from '../../assets/svgs/msg.svg';
import { ReactComponent as Plus} from '../../assets/svgs/plus.svg';
import { ReactComponent as Accessibility} from '../../assets/svgs/accessibility.svg';
import { ReactComponent as Like} from '../../assets/svgs/like.svg';
import Profiledropdown from '../../components/Profiledropdown/Profiledropdown';

const Navbar = () => {

    const [click, setclick] = useState(false);

    const handleclick = () => {
        setclick(!click);
    }

    return (
        <>
            <div className="parent">
                <div className="navbar">
                    <div className="navbar__logo">
                        <img src="images/logo.png" alt="logo" />
                    </div>   
                    <div className="navbar__search">
                        <div className="navbar__search-inputContainer">
                            <input placeholder="Search" />
                        </div>
                    </div>
                    <div className="navbar__icons">
                        <Icon imgpath = {Home} />
                        <div className="navbar__icons-message">
                            <Icon imgpath = {Msg} />
                            <div>2</div>
                        </div>
                        <Icon imgpath = {Plus} />
                        <Icon imgpath = {Accessibility} />
                        <Icon imgpath = {Like} />
                        <div className="navbar__icons-profile" onClick={handleclick}>
                            <img src="images/profile.jpg" alt="profile pic" />
                        </div>
                    </div>
                    {click && <Profiledropdown />}
                </div>
            <div className="fakebox"></div>
            </div>
        </>
    )
}

export default Navbar;
