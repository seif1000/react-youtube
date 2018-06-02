import React ,{Component}from 'react';
import {Button} from 'react-bootstrap';

class VideoPlayer extends Component{
   
    render(){
        if  (!this.props.video){
            return <h3>search for a video...</h3>
        }
        const videoId = this.props.video.id.videoId;
        const url = `https://youtube.com/embed/${videoId}`;
        return (
            <div>
               
                <iframe  width="100%"  height='450px' src={url}></iframe>
               
                <h4>{this.props.video.snippet.channelTitle}</h4>
               
               
              
            </div>
             )
    }
} 
export default VideoPlayer;