import React from 'react';
import './VideoRow.styles.scss';

const VideoRow = ({ views, subscribers, description, timestamp, channel, title, image  }) => {
    return (
        <div className="video-row">
            <h1>{title}</h1>
        </div>
    )
}

export default VideoRow;
