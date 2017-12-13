import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Img from 'react-image'
import { Table } from 'reactstrap';
import Icon from 'react-icons-kit';
import { car } from 'react-icons-kit/fa/car';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { Button, Form, FormGroup, Input } from 'reactstrap';


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
    let vin = this.props.car ? this.props.car.vin : null;
    let g66price = price - sale/100;

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
            <div className="card border-success mb-3">
            <div className="card-header">
              <h3>{year} {make} {model} {trim} </h3>
              <p className="vin-stock"><strong>VIN:</strong> {vin},  <strong>STOCK ID: </strong> {id}</p>
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

              <div className="card border-secondary mb-3">
                <div className="card-header text-white bg-success">Detail Pricing</div>
                <div className="card-body one-car-price">
                  <Table size="sm">
                    <tbody>
                     <tr>
                       <td>MSRP:</td>
                       <td>${price}</td>
                     </tr>
                     <tr>
                       <td>Dealer's Discount:</td>
                       <td>{sale}%</td>
                     </tr>
                     <tr>
                       <td>G66 Price</td>
                       <td>${g66price}</td>
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
                <div className="card-header text-white bg-success">Want To Know More?</div>
                <div className="card-body text-success">
                  <div className="row">
                    <h5>Phone: 888-123-9876</h5>
                  </div>
                  <div className="row">
                    <Button color="btn btn-danger btn-sm">Get ePrice</Button>
                  </div>
                  <br/>
                  <div className="row">
                    <Button color="btn btn-danger btn-sm">Schedule Test Drive</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <br/>
        <Row>
          <Col md="8">
            <div className="card border-success mb-3">
              <div className="card-header text-success">Highlighted Features</div>
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
            <div className="card border-success mb-3">
            <div className="card-header text-success">Share This Vehicle</div>
            <div className="card-body text-success">
              <h4 className="card-title">
                <Icon className="4x" icon={facebook}/>
              </h4>
              <h4 className="card-title">
                <Icon icon={twitter}/>
              </h4>
              <h4 className="card-title">
                <Icon icon={instagram}/>
              </h4>
            </div>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className="card border-success">
              <div className="card-header text-success">Get ePrice or Schedule Test Drive</div>
                <div className="card-body text-success">
                  <Form>
                  <div className="row">
                    <div className="col-3">
                      <FormGroup>
                        <Input type="text" name="uname" placeholder="Name" />
                      </FormGroup>
                    </div>
                    <div className="col-3">
                      <FormGroup>
                        <Input type="email" name="uemail" placeholder="Email" />
                      </FormGroup>
                    </div>
                    <div className="col-3">
                      <FormGroup>
                        <Input type="text" name="uphone" placeholder="Phone" />
                      </FormGroup>
                    </div>
                    <div className="col-3">
                      <FormGroup>
                        <Input type="text" name="uinterest" value={`STOCK ID: ${id}`} />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10">
                      <FormGroup>
                        <Input type="textarea" name="umessage" placeholder="Special Message"/>
                      </FormGroup>
                    </div>
                    <div className="col-2">
                      <FormGroup>
                        <button type="submit" class="btn btn-success">Submit</button>
                      </FormGroup>
                    </div>
                  </div>
                </Form>
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
