import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Img from 'react-image';
import { Table } from 'reactstrap';
import Icon from 'react-icons-kit';
import { car } from 'react-icons-kit/fa/car';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';
import ContactForm from './contact';


class OneCar extends Component {



  render(){

    let id = this.props.car ? this.props.car.id : null;
    let year = this.props.car ? this.props.car.year : null;
    let make = this.props.car ? this.props.car.make : null;
    let model = this.props.car ? this.props.car.model : null;
    let trim = this.props.car ? this.props.car.trim : null;
    let image = this.props.car ? this.props.car.link : null;
    let price = this.props.car ? this.props.car.price : null;
    let sale = this.props.car ? this.props.car.sale : null;
    let vin = this.props.car ? this.props.car.vin : null;
    let g66price = price - price * sale/100;

    let electronic = this.props.car ? this.props.car.elect_stab : null;
    let wireless = this.props.car ? this.props.car.wireless : null;
    let seat = this.props.car ? this.props.car.seat : null;
    let keyless = this.props.car ? this.props.car.keyless : null;
    let tripComp = this.props.car ? this.props.car.trip_comp : null;
    let tirePressure = this.props.car ? this.props.car.tire_pressure : null;
    let wiper = this.props.car ? this.props.car.wiper : null;
    let headlight = this.props.car ? this.props.car.headlight : null;

    return (
      <Container>
        <Row>
          <Col md="12">
            <div className="card border-secondary mb-3">
            <div className="card-header">
              <h3>{year} {make} {model} {trim} </h3>
              <p className="vin-stock"><strong>VIN:</strong> {vin},  <strong>STOCK ID: </strong> {id}</p>
            </div>
          </div>
          </Col>
        </Row>
        <div className="container">
          <Row className="image-n-price border-secondary">
            <Col md="8">
              <Img className="singleImage" src={image} />
            </Col>
            <Col md="4">

              <div className="card border-secondary mb-3">
                <div className="card-header text-success"><h5>Detail Pricing</h5></div>
                <div className="card-body one-car-price">
                  <Table size="sm">
                    <tbody>
                     <tr>
                       <td>
                         <strong>
                          MSRP:
                         </strong>
                        </td>
                       <td>
                         <strong>
                           ${price}
                         </strong>
                        </td>
                     </tr>
                     <tr>
                       <td className="text-danger text-right">Dealer's Discount:</td>
                       <td className="text-danger text-right">{sale}%</td>
                     </tr>
                     <tr>
                       <td className="text-success">
                         <strong>
                           G66 Price
                         </strong>
                       </td>
                       <td className="text-success">
                          <strong>
                            ${g66price}
                          </strong>
                        </td>
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

              <div className="card border-secondary mb-3">
                <div className="card-header text-success"><h5>Reach Us</h5></div>
                <div className="card-body text-primary">
                  <div className="row">
                    <h5>Phone: (602) 362-2670</h5>
                  </div>
                  <div className="row">
                    <div className="md=12">
                      515 E Grant St,
                      Phoenix, AZ 85004
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="md=12"></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <br/>
        <Row>
          <Col md="8">
            <div className="card border-secondary mb-3">
              <div className="card-header text-success">
                <h5>Highlighted Features</h5></div>
              <div className="card-body">
                <div className="feature-highlight">
                <Table>
                    <tbody>
                     <tr>
                       <td><Icon className="car-icon" icon={car}/> {electronic}</td>
                       <td><Icon className="car-icon" icon={car}/> {wireless}</td>
                     </tr>
                     <tr>
                       <td><Icon className="car-icon" icon={car}/> {seat}</td>
                       <td><Icon className="car-icon" icon={car}/> {keyless}</td>
                     </tr>
                     <tr>
                       <td><Icon className="car-icon" icon={car}/> {tripComp}</td>
                       <td><Icon className="car-icon" icon={car}/> {tirePressure}</td>
                     </tr>
                     <tr>
                       <td><Icon className="car-icon" icon={car}/> {wiper}</td>
                       <td><Icon className="car-icon" icon={car}/> {headlight}</td>
                     </tr>
                   </tbody>
                </Table>
              </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="card border-secondary mb-3">
            <div className="card-header text-success"><h5>Share This Vehicle</h5></div>
            <div className="card-body">
              <Row>
                <Col md="6">
                  <Icon className="text-muted" icon={facebook} size={90}/>
                </Col>
                <Col md="6">
                  <Icon className="text-muted" icon={twitter} size={90}/>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Icon className="text-muted" icon={instagram} size={90}/>
                </Col>
                <Col md="6">
                  <Icon className="text-muted" icon={googlePlus} size={90}/>
                </Col>
              </Row>







            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="card border-success">
              <div className="card-header text-white bg-success">
                <h5>Schedule Test Drive</h5></div>
                <div className="card-body text-success">
                  <ContactForm id={id}/>
              </div>
            </div>
            <br/>
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
