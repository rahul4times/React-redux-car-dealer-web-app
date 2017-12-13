import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form,
  FormGroup, Input
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ContactForm extends Component {

  state = {
    uname: '',
    uemail: '',
    uphone: 0,
    uinterest: '',
    umessage: '',
    followup: false,
    read: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCar(this.state)
    //this.props.history.push('/cars/')
  }

  render(){
    var carId = this.props.id;
    console.log('car id:',carId);
    return(
      <div>
      <Form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-3">
            <FormGroup>
              <Input type="text" placeholder="Name"
                value={this.state.uname}
                onChange={(e) => this.setState({uname: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Input type="email" placeholder="Email"
                value={this.state.uemail}
                onChange={(e) => this.setState({uemail: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Input type="text" placeholder="Phone"
                value={this.state.phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Input type="text" value={`STOCK ID: ${carId}`}
                value={this.state.uinterest}
                onChange={(e) => this.setState({uinterest: e.target.value})}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <FormGroup>
              <Input type="textarea" placeholder="Special Message"
                value={this.state.umessage}
                onChange={(e) => this.setState({umessage: e.target.value})}
              />
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
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addCar: bindActionCreators(addCar, dispatch)
//   }
// }
//
// export default connect(null, mapDispatchToProps)(ContactForm)

export default ContactForm;
