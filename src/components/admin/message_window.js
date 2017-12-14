import React, { Component } from 'react';



class MessageWindow extends Component{
  render(){
    return(
        <div className="card border-primary mb-3">
        <div className="card-header">Message</div>
        <div className="card-body text-primary">
          <h4 className="card-title">From: {this.props.message.uname}</h4>
          <p className="card-text">Phone: {this.props.message.uphone}</p>
          <p className="card-text">Email: {this.props.message.uemail}</p>
          <p className="card-text">Interest: {this.props.message.uinterest}</p>
          <hr/>
          <p className="card-text">Message:</p>
          <p className="card-text">Message: {this.props.message.umessage}</p>
        </div>
      </div>

    );
  }
}

export default MessageWindow;
