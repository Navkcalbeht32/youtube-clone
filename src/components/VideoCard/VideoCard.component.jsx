import React from 'react';
import './VideoCard.styles.scss';
import Avatar from '@material-ui/core/Avatar';



const VideoCard = ( {title, image, time, channel, channelImage, views, timestamp} ) => {
    return (
        <div className="video-card">
                <img src={image} alt="" className="thumbnail-image" />
            <div className="video-info">
                <Avatar className="video-avatar" alt={channel} src={channelImage} />
                <div className="video-text">
                    <h4>{title}</h4>
                    <h5>{channel}</h5>
                    <p>{views} views • {timestamp} </p>
    
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
