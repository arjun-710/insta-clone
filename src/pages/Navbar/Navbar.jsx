import React from 'react';
import './Navbar.scss';
import Icon from '../../components/Icon/Icon';
import { ReactComponent as Home} from '../../assets/svgs/home.svg';
import { ReactComponent as Msg} from '../../assets/svgs/msg.svg';
import { ReactComponent as Plus} from '../../assets/svgs/plus.svg';
import { ReactComponent as Accessibility} from '../../assets/svgs/accessibility.svg';
import { ReactComponent as Like} from '../../assets/svgs/like.svg';

const Navbar = () => {

    return (
        <>
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
                    <Icon imgpath = {Msg} />
                    <Icon imgpath = {Plus} />
                    <Icon imgpath = {Accessibility} />
                    <Icon imgpath = {Like} />
                    <div className="navbar__icons-profile">
                        <img src="images/user-1.jpeg" alt="profile pic" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
