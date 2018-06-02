import React, { Component } from 'react';

import { Navbar,FormControl,FormGroup} from 'react-bootstrap';

 class NavBar extends Component {
    state = { 
        searchTerm:""
    }
    chnageTrem = (e)=>{
        this.setState({
            searchTerm:e.target.value
        },this.props.chnageSearch(this.state.searchTerm))
    }

  render() {
      const style={
          width:"500px",
          marginLeft:"50px"
      }
    return (
      <Navbar inverse collapseOnSelect >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Youtube search</a>
    </Navbar.Brand>
    
    <Navbar.Form pullLeft>
        <FormGroup>
            <FormControl type="text" placeholder="Search" autofocus="autofocus"
              value= {this.state.searchTerm}
              onChange= {(e)=>{this.chnageTrem(e)}}
              style={style}
             />
        </FormGroup>
       
  </Navbar.Form>

  </Navbar.Header>
 
 
</Navbar>
    )
  }
}
export default NavBar;