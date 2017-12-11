import React, { Component } from 'react';
import JumboTron from './jumbotron';
import Services from './services';


class UserHomePage extends Component {
  render(){
    return(
      <div>
        <JumboTron />
        <Services />
      </div>

    );
  }
}
export default UserHomePage;
