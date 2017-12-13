import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/message'
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
    e.preventDefault();
    this.props.sendMessage(this.state);
  }

  render(){

    var carId = this.props ? this.props.id : null;

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
                value={this.state.uphone}
                onChange={(e) => this.setState({uphone: e.target.value})}
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

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: bindActionCreators(sendMessage, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ContactForm);
