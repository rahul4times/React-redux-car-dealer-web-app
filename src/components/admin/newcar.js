import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createCar } from '../../actions/cars';
import { Link } from 'react-router-dom';

class NewCar extends Component {

  state = {
    year: '',
    make: '',
    model: '',
    trim: '',
    engine: '',
    drive_type: '',
    body_type: '',
    ext_color: '',
    int_color: '',
    transmission: '',
    price: 0,
    sale: 0,
    status: true,
    vin: '',
    link: '',
    elect_stab: '',
  	wireless: '',
  	seat: '',
  	keyless: '',
  	trip_comp: '',
  	tire_pressure: '',
  	wiper: '',
  	headlight: '',
    alertMsg: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createCar(this.state);
    this.setState({
      alertMsg: true,
      year: '',
      make: '',
      model: '',
      trim: '',
      engine: '',
      drive_type: '',
      body_type: '',
      ext_color: '',
      int_color: '',
      transmission: '',
      price: 0,
      sale: 0,
      status: true,
      vin: '',
      link: '',
      elect_stab: '',
    	wireless: '',
    	seat: '',
    	keyless: '',
    	trip_comp: '',
    	tire_pressure: '',
    	wiper: '',
    	headlight: ''
    })
  }

  alertMsgClose = () => {
    this.setState({ alertMsg: false });
  }

  render() {

    return (
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-header text-white bg-primary">ADD NEW CAR</div>
          <div className="card-body text-primary">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="year">Year</Label>
                    <Input type="select" name="select" id="year"
                      value={this.state.year}
                      onChange={(e) => this.setState({year: e.target.value})}
                      >
                      <option value="" disabled selected>Select Year</option>
                      <option>2018</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="make">Make</Label>
                    <Input type="select" name="select" id="make"
                      value={this.state.make}
                      onChange={(e) => this.setState({make: e.target.value})}
                      >
                      <option value="" disabled selected>Select Make</option>
                      <option>Audi</option>
                      <option>Honda</option>
                      <option>Lamborghini</option>
                      <option>Maserati</option>
                      <option>Subaru</option>
                      <option>Toyota</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="model">Model</Label>
                    <Input type="select" name="select" id="model"
                      value={this.state.model}
                      onChange={(e) => this.setState({model: e.target.value})}
                      >
                      <option value="" disabled selected>Select Model</option>
                      <option>Accord</option>
                      <option>Odyssey</option>
                      <option>CR-V</option>
                      <option>4 Runner</option>
                      <option>Avalon</option>
                      <option>Tocoma</option>
                      <option>C-Class</option>
                      <option>A3</option>
                      <option>Q3</option>
                      <option>A5</option>
                      <option>Gran Turismo</option>
                      <option>Levante</option>
                      <option>Aventador</option>
                      <option>Outback</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="body">Body</Label>
                    <Input type="select" name="select" id="body"
                      value={this.state.body_type}
                      onChange={(e) => this.setState({body_type: e.target.value})}
                      >
                      <option value="" disabled selected >Select Body</option>
                      <option>Convertible</option>
                      <option>Coupe</option>
                      <option>Hatchback</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Truck</option>
                      <option>Van</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="trim">Trim</Label>
                    <Input type="text" id="trim"
                      value={this.state.trim}
                      onChange={(e) => this.setState({trim: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="engine">Engine</Label>
                    <Input type="text" id="engine"
                      value={this.state.engine}
                      onChange={(e) => this.setState({engine: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="drivetype">Drive Type</Label>
                    <Input type="text" id="drivetype"
                      value={this.state.drive_type}
                      onChange={(e) => this.setState({drive_type: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Exteriorcolor">Exterior Color</Label>
                    <Input type="text" id="Exteriorcolor"
                      value={this.state.ext_color}
                      onChange={(e) => this.setState({ext_color: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="intcolor">Interior Color</Label>
                    <Input type="text" id="intcolor"
                      value={this.state.int_color}
                      onChange={(e) => this.setState({int_color: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="transmission">Transmission</Label>
                    <Input type="text" id="transmission"
                      value={this.state.transmission}
                      onChange={(e) => this.setState({transmission: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Price">Price</Label>
                    <Input type="text" id="Price"
                      value={this.state.price}
                      onChange={(e) => this.setState({price: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="sale">Sale</Label>
                    <Input type="text" id="sale"
                      value={this.state.sale}
                      onChange={(e) => this.setState({sale: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="text" id="status"
                      value={this.state.status}
                      onChange={(e) => this.setState({status: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="vin">VIN</Label>
                    <Input type="text" id="vin"
                      value={this.state.vin}
                      onChange={(e) => this.setState({vin: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="link">Image Link</Label>
                    <Input type="text" id="link"
                      value={this.state.link}
                      onChange={(e) => this.setState({link: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="electstab">Electronic stability</Label>
                    <Input type="text" id="electstab"
                      value={this.state.elect_stab}
                      onChange={(e) => this.setState({elect_stab: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="wireless">Wireless phone connectivity</Label>
                    <Input type="text" id="wireless"
                      value={this.state.wireless}
                      onChange={(e) => this.setState({wireless: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="split">Split folding rear seat</Label>
                    <Input type="text" id="split"
                      value={this.state.seat}
                      onChange={(e) => this.setState({seat: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="remote">Remote keyless entry</Label>
                    <Input type="text" id="remote"
                      value={this.state.keyless}
                      onChange={(e) => this.setState({keyless: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="trip">Trip computer</Label>
                    <Input type="text" id="trip"
                      value={this.state.trip_comp}
                      onChange={(e) => this.setState({trip_comp: e.target.value})}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="low">Low tire pressure warning</Label>
                    <Input type="text" id="low"
                      value={this.state.tire_pressure}
                      onChange={(e) => this.setState({tire_pressure: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="wiper">Rear window wiper</Label>
                    <Input type="text" id="wiper"
                      value={this.state.wiper}
                      onChange={(e) => this.setState({wiper: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="headlight">Fully automatic headlights</Label>
                    <Input type="text" id="headlight"
                      value={this.state.headlight}
                      onChange={(e) => this.setState({headlight: e.target.value})}
                    />
                  </FormGroup>
                </Col>
                <Col md="3">

                </Col>
              </Row>
              <Row>
                <Col md="10">
                  <FormGroup>
                    <Alert
                      isOpen={this.state.alertMsg}
                      toggle={this.alertMsgClose}
                      color="success">
                      Car saved!
                    </Alert>
                  </FormGroup>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <button type="submit" className="btn btn-success">Create</button>
                  </FormGroup>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <Link to={`/admin/`}>
                      <button type="button" className="btn btn-danger">Cancel</button>
                    </Link>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCar: bindActionCreators(createCar, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewCar);
