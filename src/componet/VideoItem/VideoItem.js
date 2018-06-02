import React, { Component } from 'react'

 class VideoItem extends Component {
  

  render() {
    return (
    <div>
         <img 
          src={this.props.thumnail.snippet.thumbnails.default.url}
          onClick ={()=>this.props.selectHandler(this.props.thumnail)}
          alt=""/>
          <p>{this.props.thumnail.snippet.title}</p>
    </div>
    )
  }
}
export default VideoItem;