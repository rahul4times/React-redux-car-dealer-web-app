import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class TotalInventory extends Component{
  render(){

    let sedan = this.props.totalInventory ? this.props.totalInventory.filter(inventory => inventory.body_type == "Sedan") : null;

    let coupe = this.props.totalInventory ? this.props.totalInventory.filter(inventory => inventory.body_type == "Coupe") : null;

    let suv = this.props.totalInventory ? this.props.totalInventory.filter(inventory => inventory.body_type == "SUV") : null;

    let van = this.props.totalInventory ? this.props.totalInventory.filter(inventory => inventory.body_type == "Van") : null;

    let convertible = this.props.totalInventory ? this.props.totalInventory.filter(inventory => inventory.body_type == "Convertible") : null;

    let hatchback = this.props.totalInventory ? this.props.totalInventory.filter(inventory => inventory.body_type == "Hatchback") : null;

    let truck = this.props.totalInventory ? this.props.totalInventory.filter(inventory => inventory.body_type == "Truck") : null;



    return(
      <div>
        <div className="card text-white bg-info mb-3">
          <div className="card-header">TOTAL INVENTORY</div>
          <div className="card-body">
            <Row>
              <Col md="6">
                Coupe: {coupe.length}
              </Col>
              <Col md="6">
                Convertible: {convertible.length}
              </Col>
            </Row>
            <Row>
              <Col md="6">
                Hatchback: {hatchback.length}
              </Col>
              <Col md="6">
                SUV: {suv.length}
              </Col>
            </Row>
            <Row>
              <Col md="6">
                Sedans: {sedan.length}
              </Col>
              <Col md="6">
                Truck: {truck.length}
              </Col>
            </Row>
            <Row>
              <Col md="6">
                Van: {van.length}
              </Col>
              <Col md="6">

              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalInventory;
