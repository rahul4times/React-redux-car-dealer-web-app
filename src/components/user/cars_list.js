import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from './car';

class CarsList extends Component {

  render(){
    console.log('test: ', this.props);
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




  return {

    filtered: state.filtered,
    cars: state.filtered ? state.cars.find(car => car.make ==  state.filtered.make || car.model == state.filtered.model) : state.cars
  }


}

export default connect(mapStateToProps, null)(CarsList);
