import React from 'react';
import './Header.styles.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon className="menu-icon" />
                <img
                className="header-logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""/>
            </div>
            <div className="header-input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header-input-button" />
            </div>
            <div className="header-icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar className="header-icon avatar" />
            </div>
        </div>
    )
}

export default Header;