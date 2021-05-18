import React, { useState } from 'react';
import './Header.styles.scss';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import TemporaryDrawer from '../Sidebar/Drawer';
import { Link } from 'react-router-dom';

const Header = () => {
    const onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header-left">
                <TemporaryDrawer />
                <Link to='/'>
                    <img
                    className="header-logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""
                    />
                </Link>
                
            </div>
            <div className="header-input">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} type="text" placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-input-button" />
                </Link>
                
            </div>
            <div className="header-icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar className="header-icon avatar" />
                <div className="g-signin2" data-onsuccess="onSignIn" ></div>
            </div>
            <div className="header-mobile-icons">
                <Avatar className="header-icon avatar" />
            </div>


            
        </div>
    )
}

export default Header;