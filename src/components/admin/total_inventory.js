import React, { Component } from 'react';

class TotalInventory extends Component{
  render(){
    console.log('inventory page: ', this.props);
    return(
      <div>
        <div className="card text-white bg-danger mb-3">
          <div className="card-header">INVENTORY</div>
          <div className="card-body">
            <h4 className="card-title">Danger card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalInventory;
