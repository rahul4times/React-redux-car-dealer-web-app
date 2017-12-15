import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCar } from '../../actions/cars';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Img from 'react-image';

class EditCar extends Component{

  updateOneCar = (values) => {
    this.props.editCar(values);
  }

  render(){

    let image = this.props.initialValues ? this.props.initialValues.link : null;

    return(

      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-header text-white bg-primary">EDIT CAR</div>
          <div className="card-body text-primary">
            <Form
              onSubmit={this.props.handleSubmit(this.updateOneCar)}
              >
              <Row>
                <Col md="12">
                  <Img className="admin-car-image" src={image} />
                </Col>
                <br/>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="year">Year</Label><br/>
                    <Field name="year" id="year" component="input" type="text" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="make">Make</Label><br/>
                    <Field name="make" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="model">Model</Label><br/>
                    <Field name="model" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="body">Body</Label><br/>
                    <Field name="body_type" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="trim">Trim</Label><br/>
                    <Field name="trim" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="engine">Engine</Label><br/>
                    <Field name="engine" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="drivetype">Drive Type</Label><br/>
                    <Field name="drive_type" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Exteriorcolor">Exterior Color</Label><br/>
                    <Field name="ext_color" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="intcolor">Interior Color</Label><br/>
                    <Field name="int_color" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="transmission">Transmission</Label><br/>
                    <Field name="transmission" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Price">Price</Label><br/>
                    <Field name="price" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="sale">Sale</Label><br/>
                    <Field name="sale" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="status">Status</Label><br/>
                    <Field name="status" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="vin">VIN</Label><br/>
                    <Field name="vin" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="link">Image Link</Label><br/>
                    <Field name="link" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="electstab">Electronic stability</Label><br/>
                    <Field name="elect_stab" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="wireless">Wireless phone connectivity</Label><br/>
                    <Field name="wireless" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="split">Split folding rear seat</Label><br/>
                    <Field name="seat" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="remote">Remote keyless entry</Label><br/>
                    <Field name="keyless" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="trip">Trip computer</Label><br/>
                    <Field name="trip_comp" component="input" type="text" />

                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="low">Low tire pressure warning</Label><br/>
                    <Field name="tire_pressure" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="wiper">Rear window wiper</Label><br/>
                    <Field name="wiper" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="headlight">Fully automatic headlights</Label><br/>
                    <Field name="headlight" component="input" type="text" />

                  </FormGroup>
                </Col>
                <Col md="3">

                </Col>
              </Row>
              <Row>
                <Col md="10">

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

EditCar = reduxForm({ form: 'edit_car' })(EditCar)

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
