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

                <VideoRow 
                image="https://i.ytimg.com/vi/bnzVL0a5h5w/maxresdefault.jpg"
                title="10 Ways to Make Money as a Developer"
                views="49k"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Traversy Media"
                description="10++ Ways to Make Money as a Developer eBook: https://gumroad.com/a/304084083 20% OFF CODE: BRAD20 Timestamps: ..."
                />

                <VideoRow 
                image="https://i.ytimg.com/vi/8MgpE2DTTKA/maxresdefault.jpg"
                title="Create a Website With Video Background | HTML & CSS"
                views="66k"
                timestamp="Jan 4, 2021"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Traversy Media"
                description="Create a beautiful, custom landing page for a Travel website using HTML, CSS and a little JavaScript"
                />
                
                <VideoRow 
                image="https://i.ytimg.com/vi/GcFJjpMFJvI/maxresdefault.jpg"
                title="Build a C# .NET Application in 60 Minutes"
                views="728,303"
                timestamp="Jun 9, 2017"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Traversy Media"
                description="10++ Ways to Make Money as a Developer eBook: https://gumroad.com/a/304084083 20% OFF CODE: BRAD20 Timestamps: ..."
                />
                
                <VideoRow 
                image="https://i.ytimg.com/vi/VfGW0Qiy2I0/maxresdefault.jpg"
                title="Web Development In 2021 - A Practical Guide"             
                views="264,133"
                timestamp="Dec 30, 2020"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Traversy Media"
                description="This is my yearly guide to web development. I describe web technologies that are commonly needed as well as new trends and give you multiple options to create and plan your learning path to reach your goals."
                />
                
                <VideoRow 
                image="https://i.ytimg.com/vi/zT62eVxShsY/maxresdefault.jpg"
                title="Multi Step Form With React & Material UI"
                views="317,076"
                timestamp="Nov 5, 2018"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Traversy Media"
                description="In this project we will build a React multi step form with multiple componenets including user & personal details, confirmation and success. We will use Material UI as well
                "
                />
            
            </div>
        </div>
    )
}

export default SearchPage;
