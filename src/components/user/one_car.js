import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Img from 'react-image'

class OneCar extends Component {
  render(){
    console.log('one car page: ', this.props);
    let id = this.props.car ? this.props.car.id : null;
    let year = this.props.car ? this.props.car.year : null;
    let make = this.props.car ? this.props.car.make : null;
    let model = this.props.car ? this.props.car.model : null;
    let trim = this.props.car ? this.props.car.trim : null;
    let image = this.props.car ? this.props.car.link : null;


    return (
      <Container>
        <Row>
          <Col md="12">
            <div className="card border-success mb-3">
            <div className="card-header">
              <h3>{year} {make} {model} {trim}</h3>
            </div>
          </div>
          </Col>
        </Row>
        <div className="container">
          <Row className="image-n-price">
            <Col md="7">
              <Img className="singleImage" src={image} />
            </Col>
            <Col md="5">
              <div className="one-car-price">
                <h4>Detail Pricing</h4>
                <div>
                   <Table size="sm">
                     
                   </Table>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <Row>
          <Col md="7">
            detail features
          </Col>
          <Col md="5">
            Schedule Test Drive
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state, props){
  return{
    car: state.cars.find(car => car.id == props.match.params.id)
  }
}

export default connect(mapStateToProps, null)(OneCar);
