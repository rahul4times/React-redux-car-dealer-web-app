import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';

class Messages extends Component {

  render(){
    console.log('messages on admin page: ', this.props.messages);
    return(
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
        <div className="card-header text-white bg-primary">Messages</div>
          <div className="card-body text-primary">

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  console.log('state: ', state);
  return{
    messages: state.messages
  }
}

export default connect(mapStateToProps, null)(Messages);
