import React, { Component } from 'react';
import { connect } from 'react-redux';
class Specials extends Component{
  render(){
    console.log('special page: ', this.props.cars);

    let specialsOnCars = this.props.cars ? this.props.cars.map(car =>{
      return(
        <li key={car.id}>{car.year} {car.make} {car.model}</li>
      )
    }) : null;

    return(
      <div>
        <div className="card text-white bg-warning mb-3">
          <div className="card-header">SPECIALS</div>
          <div className="card-body">
            <ul>
              {specialsOnCars}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    cars: state.cars.filter(car => car.sale > 0)

  }
}

export default connect(mapStateToProps, null)(Specials);
