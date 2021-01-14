import React from 'react';
import './VideoRow.styles.scss';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircle';

const VideoRow = ({ views, subscribers, description, timestamp, channel, channelImage ,title, image  }) => {
    return (
        <div className="video-row">
            <Link className="video-row-container">
                <img src={image} alt={title} className="video-thumbnail" />
                <div className="video-row-text">
                    <h3>{title}</h3>
                    <h5>{views} views • {timestamp} ago</h5>
                    <Link className="channel">
                        <Avatar className="channel-image" src={channelImage} />
                        <h5>{channel}</h5>
                        <VerifiedIcon className="verified" />
                    </Link>
                    <h5>{description}</h5>
                </div>
            </Link>
            
        </div>
    )
}

export default VideoRow;
