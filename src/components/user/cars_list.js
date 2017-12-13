import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from './car';

class CarsList extends Component {

  render(){
    let carList = this.props.cars ? this.props.cars.map(car => {
      return(
        <div key={car.id} className="col-12">
          <Car key={car.id} car={car} />
        </div>
      )
    }) : null;

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

  var filtered = state.cars

  if(state.filtered.make){
    filtered = filtered.filter(car => car.make == state.filtered.make)
  }
  if(state.filtered.body){
    filtered = filtered.filter(car => car.body_type == state.filtered.body)
  }
    filtered = filtered.sort((car1, car2) => state.filtered.priceRange === "lowHigh" ? car1.price - car2.price : car2.price - car1.price)


  return {
    filtered: state.filtered,
    cars: filtered
  }


}

export default connect(mapStateToProps, null)(CarsList);
