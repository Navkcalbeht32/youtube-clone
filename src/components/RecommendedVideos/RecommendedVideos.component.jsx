import React from 'react';
import VideoCard from '../VideoCard/VideoCard.component';
import './RecommendedVideos.styles.scss'

const RecommendedVideos = () => {
    return (
        <div className="recommended-videos">
            
            <div className="recommended-videos-videos">
                <VideoCard 
                image="https://i.ytimg.com/vi/-FlxM_0S2lA/maxresdefault.jpg"
                title="lofi hip hop radio - beats to relax/study to" 
                views="43,785 watching now"
                channel="ChilledCow"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjToEFDnQETlCMEOWOaiDNzqDkdhtXI1XgA5DN6vA=s48-c-k-c0xffffffff-no-rj-mo"
                timestamp="Live"
                />
                
                <VideoCard 
                image="https://i.ytimg.com/vi/E6LbwCKJ0lo/maxresdefault.jpg"
                title="Jocko Podcast 115 with Dakota Meyer - Into The Fire, and Beyond the Call of Duty"
                views="1.6M views"
                channel="Jocko Podcast"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjqnUD_-NU2887NDMbNAU-GCgW40zWf6WCwgZ2M=s48-c-k-c0xffffffff-no-rj-mo"
                timestamp="Feb 28, 2018"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/Pht0qCHsKbA/maxresdefault.jpg"
                title="7 Skills You Need as a JavaScript Developer in 2020"
                views="105,736 views"
                channel="Clever Programmer"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0xffffffff-no-rj-mo"
                timestamp="Apr 1, 2020"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/NknONrsYhIo/maxresdefault.jpg"
                title="' A NEW DECADE ' - Epic Music Mix" 
                views="975,688"
                channel="Pandora Journey"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnh1PakAAzYSOtwTRV4_x1mIxO2RoLx-d5OdJPZxEA=s48-c-k-c0xffffffff-no-rj-mo"
                timestamp="Jan 2, 2020"
                />
                
                <VideoCard 
                image="https://i.ytimg.com/vi/-kgs3RmFVH8/maxresdefault.jpg"
                title="Vivaldi - Violin Concerto in A Minor RV356"
                views="12M"
                channel="HARMONICO101"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnjj9IbDzYh2pFqfLmxgAwPuN-vFXL1lXy7y8HM=s48-c-k-c0xffffffff-no-rj-mo"
                timestamp="Feb 27, 2008"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/HFUD__G16pQ/maxresdefault.jpg"
                title="Music for a Dark Hero - Manifesto"
                views="824,667"
                channel="Secession Studios"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnhu8G3kiPl3V8jt9_sO3ZmtKL2oDv5l2eq-1AmErg=s48-c-k-c0xffffffff-no-nd-rj-mo"
                timestamp="Apr 1, 2020"
                />

                <VideoCard 
                image="https://i.ytimg.com/vi/KJgsSFOSQv0/maxresdefault.jpg"
                title="C Programming Tutorial for Beginners"
                views="3.4M views"
                channel="freeCodeCamp.org"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0xffffffff-no-rj-mo"
                timestamp="Aug 15, 2018"
                />
                
                <VideoCard 
                image="https://i.ytimg.com/vi/gL2qbWdLZig/maxresdefault.jpg"
                title="How to Install a VPN Router"
                views="91,721"
                channel="Rob Braxman Tech"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwni6QiEup005tYebfygKke2l6atQ2mRvei7BK8goRw=s48-c-k-c0xffffffff-no-rj-mo"
                timestamp="Jul 2, 2020"
                />

        
            </div>
        </div>
    )
}

export default RecommendedVideos;
