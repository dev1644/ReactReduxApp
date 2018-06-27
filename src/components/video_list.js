import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) =>{

    const videos = props.videos;

   const videoItems = videos.map( (index) =>{
        return <VideoListItem key = {index.etag} video = {index} />
    } );

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;