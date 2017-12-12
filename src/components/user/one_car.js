import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Img from 'react-image'
import { Table } from 'reactstrap';

class OneCar extends Component {
  render(){
    console.log('one car page: ', this.props);
    let id = this.props.car ? this.props.car.id : null;
    let year = this.props.car ? this.props.car.year : null;
    let make = this.props.car ? this.props.car.make : null;
    let model = this.props.car ? this.props.car.model : null;
    let trim = this.props.car ? this.props.car.trim : null;
    let image = this.props.car ? this.props.car.link : null;
    let price = this.props.car ? this.props.car.price : null;
    let sale = this.props.car ? this.props.car.sale : null;
    let g66price = price - sale/100;

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
            <Col md="8">
              <Img className="singleImage" src={image} />
            </Col>
            <Col md="4">
              <div className="one-car-price">
                <h4>Detail Pricing</h4>
                <div className="price">
                   <Table size="sm">
                     <tbody>
                      <tr>
                        <td>MSRP:</td>
                        <td>${price}</td>
                      </tr>
                      <tr>
                        <td>DEALER'S DISCOUNT:</td>
                        <td>{sale}%</td>
                      </tr>
                      <tr>
                        <td>G66 CAR PRICE</td>
                        <td>{g66price}</td>
                      </tr>
                    </tbody>
                   </Table>
                   <hr/>
                   <Table size="sm">
                     <tbody>
                      <tr>
                        <td>Estimated Lease:</td>
                        <td>$199/pm**</td>
                      </tr>
                      <tr>
                        <td>Estimated Finance:</td>
                        <td>$250/pm**</td>
                      </tr>
                    </tbody>
                   </Table>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <Row>
          <Col md="8">
            detail features
          </Col>
          <Col md="4">
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
