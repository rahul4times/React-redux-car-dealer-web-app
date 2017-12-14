import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { deleteCar } from '../../actions/cars';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { pencil } from 'react-icons-kit/icomoon';
import { Link } from 'react-router-dom';

class Cars extends Component {

  handleDelete = (id) => {
    console.log("delete car id: ", id);
    this.props.deleteCar(id);
    //this.props.history.push('/admin/messages');
  }

  render(){
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
          <td>{car.status ? "Available" : "Sold"}</td>
          <td>
            <Link to={`/admin/editcar/${car.id}`}>
              <Icon icon={pencil} />
            </Link>
          </td>
          <td><Icon
            className="text-danger"
            icon={bin}
            onClick={(e)=>this.handleDelete(car.id)}
          /></td>
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
                <th>STATUS</th>
                <th>EDIT</th>
                <th>DELETE</th>
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

export default connect(mapStateToProps, {deleteCar})(Cars);
