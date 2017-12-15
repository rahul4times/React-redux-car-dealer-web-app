import React, { Component } from 'react';

class TotalMessage extends Component{
  render(){
    return(
      <div>
        <div className="card text-white bg-success mb-3">
          <div className="card-header">TOTAL MESSAGES</div>
          <div className="card-body">
            <h4 className="card-title">Success card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalMessage;
