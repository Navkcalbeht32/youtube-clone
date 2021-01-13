import React from 'react';
import MicroRow from './MicroRow/MicroRow.component';
import './MicroSidebar.styles.scss';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

const MicroSidebar = () => {
    return (
        <div className="micro-sidebar">
            <MicroRow selected Icon={HomeIcon} title="Home" />
            <MicroRow Icon={WhatshotIcon} title="Trending" />
            <MicroRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <MicroRow Icon={VideoLibraryIcon} title="Library" />
            <MicroRow Icon={HistoryIcon} title="Histroy" />
        </div>
    )
}

export default MicroSidebar;
