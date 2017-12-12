import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from './car';

class CarsList extends Component {

  render(){
    let carList = this.props.cars.map(car => {
      return(
        <div className="col-12">
          <Car key={car.id} car={car} />
        </div>
      )
    })


    return(
      <div className="container">
        <div className="row">
          {carList}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    cars: state.cars,
    filter: state.filter
  }
}

export default connect(mapStateToProps, null)(CarsList);
