import React from 'react';
import './Sidebar.styles.scss';
import SidebarRow from './SidebarRow/SidebarRow.component';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import LearnIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr/>
            <h4>More From Youtube</h4>
            <SidebarRow Icon={YouTubeIcon} title="YouTube Premium" />
            <SidebarRow Icon={TheatersIcon} title="Movies & Shows" />
            <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
            <SidebarRow Icon={LiveTvIcon} title="Live" />
            <SidebarRow Icon={LoyaltyIcon} title="Fashion & Beauty" />
            <SidebarRow Icon={LearnIcon} title="Learn" />
            <hr/>
            <SidebarRow Icon={SettingsIcon} title="Settings" />
            <SidebarRow Icon={FlagIcon} title="Report History" />
            <SidebarRow Icon={HelpIcon} title="Help" />
            <SidebarRow Icon={FeedbackIcon} title="Send Feedback" />
            <hr/>
            <div className="footer-items">
                <div className="footer-wrap">
                    <a href=""><h5>About</h5></a>
                    <a href=""><h5>Press</h5></a>
                    <a href=""><h5>Copyright</h5></a>
                    <a href=""><h5>Contact us</h5></a>
                    <a href=""><h5>Creators</h5></a>
                    <a href=""><h5>Advertise</h5></a>
                    <a href=""><h5>Developers</h5></a>
                </div>
                <div className="footer-wrap">
                    <a href=""><h5>Terms</h5></a>
                    <a href=""><h5>Privacy</h5></a>
                    <a href=""><h5>Policy & Safety</h5></a>
                    <a href=""><h5>How YouTube works</h5></a>
                    <a href=""><h5>Test New Features</h5></a>
                </div>
                <div className="footer-wrap copy">
                    &#169; 2021 Google LLC
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

