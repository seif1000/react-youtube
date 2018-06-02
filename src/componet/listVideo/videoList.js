import React, { Component } from 'react';
import VideoItem from '../VideoItem/VideoItem';


 class Listvideo extends Component {
 
  render() {
    //console.log('list',this.props.listvideo)
    const list = this.props.listvideo.map(video=>{
        return(<VideoItem  key={video.id.videoId}
                            thumnail={video}
                            selectHandler = {this.props.vidoSelected}
                          
                            />)
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default Listvideo;