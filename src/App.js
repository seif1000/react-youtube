import React, { Component } from 'react';
//import Search from './componet/AppBar';
import YTSearch from 'youtube-api-search';
//import Input from './componet/Input';
import NavBar from './componet/NavBar';
import  VideoPlayer from './componet/videoPlayer/videoPlayer';
import Listvideo from './componet/listVideo/videoList';
import {Grid,Row,Col} from 'react-bootstrap'


const API_KEY='AIzaSyB3G5fxEXDTOCSYwiMy03P0Sjh5pBR2NRA'
class App extends Component {
   
    state = {
       videos :[],
       selectedVideo:null,
      
       searchText:""
    }


    

    changeHandler = (term)=>{
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({
              videos: videos,
              selectedVideo: videos[0],
              searchText:term
             });
          });
    }
    
  render() {
      console.log(this.state.searchText)
      console.log(this.state.videos)
    return (
        
      <div>

          <NavBar  chnageSearch = {(term)=>this.changeHandler(term)}/>
          <Grid>
          <Row className="show-grid">
          <Col xs={12} md={8}>
             <VideoPlayer video={this.state.selectedVideo}/>
          </Col>
          <Col xs={6} md={4}>
            <Listvideo listvideo ={this.state.videos} vidoSelected={(video)=>{this.setState({selectedVideo:video})}}/>
          </Col>
          </Row>
          </Grid>
        
      </div>
   
    )
  }
}

export default App;