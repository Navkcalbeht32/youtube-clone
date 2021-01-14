import React from 'react';
import './VideoCard.styles.scss';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';


const VideoCard = ( {title, image, time, channel, channelImage, views, timestamp} ) => {
    return (
        <div className="video-card">
                <a href="">
                    <img src={image} alt="" className="thumbnail-image" />
                </a>
            <div className="video-info">
                <Avatar className="video-avatar" alt={channel} src={channelImage} />
                <div className="video-text">
                    <a href="">
                        <h4>{title}</h4>
                    </a>
                
                    <a href="#" className="channel-link">
                        <Tooltip title={channel}>
                            <h5>{channel}</h5>
                        </Tooltip>
                    </a>
                    
                    <p>{views} views • {timestamp} </p>
    
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
