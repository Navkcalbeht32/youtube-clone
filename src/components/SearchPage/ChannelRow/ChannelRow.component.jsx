import React from 'react';
import './ChannelRow.styles.scss';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlined';
import CustomButton from '../../CustomButton/CustomButton.component';
import { Link } from 'react-router-dom';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const ChannelRow = ({ image, channel, subscribers, numVideos, description, verified }) => {
    return (
        <div className="channel-row">
            <div className="avatar-container">
                <Avatar className="channel-row-logo" alt={channel} src={image} />
            </div>
            
            <div className="channel-row-text">
                <h4>{channel} {verified && <VerifiedIcon className="verified-tag" />} </h4>
                <h5>{subscribers} subscribers • {numVideos} videos</h5>
                <p>{description}</p>
            </div>

            <Link className="channel-row-subscribe">
                <CustomButton />
                <NotificationsOutlinedIcon className="sub-bell" />
            </Link>

        </div>
    )
}

export default ChannelRow;
