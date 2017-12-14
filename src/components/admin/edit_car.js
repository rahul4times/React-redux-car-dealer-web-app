import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCar } from '../../actions/cars';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

class EditCar extends Component{

  //state = { alertMsg: false }

  // alertMsgClose = () => {
  //   this.setState({ alertMsg: false });
  // }

  updateOneCar = (id) => {
    this.props.editCar(id, this.state);
    //this.setState({ alertMsg: true });
  }

  render(){
    console.log('id: ', this.props);
    return(

      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-header text-white bg-primary">Edit Car</div>
          <div className="card-body text-primary">
            <Form
              onSubmit={this.props.handleSubmit(this.updateOneCar)}
              >
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="year">Year</Label>
                    <Field name="year" component="input" type="text" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="make">Make</Label>
                    <Field name="make" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="model">Model</Label>
                    <Field name="model" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="body">Body</Label>
                    <Field name="body_type" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="trim">Trim</Label>
                    <Field name="trim" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="engine">Engine</Label>
                    <Field name="engine" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="drivetype">Drive Type</Label>
                    <Field name="drive_type" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Exteriorcolor">Exterior Color</Label>
                    <Field name="ext_color" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="intcolor">Interior Color</Label>
                    <Field name="int_color" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="transmission">Transmission</Label>
                    <Field name="transmission" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Price">Price</Label>
                    <Field name="price" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="sale">Sale</Label>
                    <Field name="sale" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Field name="status" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="vin">VIN</Label>
                    <Field name="vin" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="link">Image Link</Label>
                    <Field name="link" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="electstab">Electronic stability</Label>
                    <Field name="elect_stab" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="wireless">Wireless phone connectivity</Label>
                    <Field name="wireless" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="split">Split folding rear seat</Label>
                    <Field name="seat" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="remote">Remote keyless entry</Label>
                    <Field name="keyless" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="trip">Trip computer</Label>
                    <Field name="trip_comp" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="low">Low tire pressure warning</Label>
                    <Field name="tire_pressure" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="wiper">Rear window wiper</Label>
                    <Field name="wiper" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="headlight">Fully automatic headlights</Label>
                    <Field name="headlight" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">

                </Col>
              </Row>
              <Row>
                <Col md="10">
                  <FormGroup>
                    {/* <Alert
                      isOpen={this.state.alertMsg}
                      toggle={this.alertMsgClose}
                      color="success">
                      Car saved!
                    </Alert> */}
                  </FormGroup>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <button type="submit" className="btn btn-success">Save</button>
                  </FormGroup>
                </Col>
                <Col md="1">
                  <FormGroup>
                    <Link to={`/admin/`}>
                      <button type="button" className="btn btn-danger">Back</button>
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

function mapStateToProps(state, props){
  return{
    initialValues: state.cars.filter(car => car.id == props.match.params.id)[0]
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editCar: bindActionCreators(editCar, dispatch)
  }
}

EditCar = reduxForm({
  // a unique name for the form
  form: 'edit_car'
})(EditCar)


export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
