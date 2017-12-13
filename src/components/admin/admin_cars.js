import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';


class Cars extends Component {
  render(){

    console.log('admin dashboard: ', this.props.cars);

    let inventory = this.props.cars ? this.props.cars.map(car => {
      return(
        <tr>
          <th scope="row">{car.id}</th>
          <td>{car.year}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.body_type}</td>
          <td>{car.int_color}</td>
          <td>{car.price}</td>
          <td>{car.sale}</td>
          <td>{car.status ? "Available" : "Sold"}</td>
          <td>Edit | Delete</td>
        </tr>
      )
    }) : null;

    return(
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
        <div className="card-header text-white bg-primary">Inventory</div>
        <div className="card-body">
          <Table hover>
            <thead className="text-success">
              <tr>
                <th>ID</th>
                <th>YEAR</th>
                <th>MAKE</th>
                <th>MODEL</th>
                <th>BODY</th>
                <th>COLOR</th>
                <th>PRICE</th>
                <th>SALE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {inventory}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(Cars);
