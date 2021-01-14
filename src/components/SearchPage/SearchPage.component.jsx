import React from 'react';
import ChannelRow from './ChannelRow/ChannelRow.component';
import './SearchPage.styles.scss';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow/VideoRow.component';

const SearchPage = () => {
    return (
        <div className="search-page"> 
            <div className="search-page-results">
                <div className="filter">
                    <TuneOutlinedIcon />
                    <h4>FILTER</h4>
                </div>
                <hr/>

                <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Traversy Media"
                verified="true"
                subscribers="1.38M"
                numVideos="860"
                description="Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more"
                /> 

                <hr/>
            </div>

            <VideoRow />

        </div>
    )
}

export default SearchPage;
