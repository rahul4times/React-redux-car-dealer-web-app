import React, { Component } from 'react';
import { connect } from 'react-redux';

class OneCar extends Component {
  render(){
    console.log('one car page: ', this.props.car);

    return(
      <div>
        One Car
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    car: state.cars.filter(car => car.id == props.match.params.id)[0]
  }
}

export default connect(mapStateToProps, null)(OneCar);
