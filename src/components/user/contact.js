import React, { Component } from 'react';
import { Form, FormGroup, Input, Alert, Label } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/message'
class ContactForm extends Component {

  state = {
    uname: '',
    uemail: '',
    uphone: '',
    uinterest: '',
    umessage: '',
    followup: false,
    read: false,
    alertMsg: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state);
    this.setState({
      alertMsg: true, uname:'', uemail:'', uphone:'', uinterest:'', umessage:''
    })
  }

  alertMsgClose = () => {
    this.setState({ alertMsg: false });
  }

  render(){

    return(
      <div>
      <Form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-3">
            <FormGroup>
              <Label for="examplename">Your Name</Label>
              <Input type="text" id="examplename"
                value={this.state.uname}
                onChange={(e) => this.setState({uname: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" id="exampleEmail"
                value={this.state.uemail}
                onChange={(e) => this.setState({uemail: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Label for="examplephone">Phone</Label>
              <Input type="text" id="examplephone"
                value={this.state.uphone}
                onChange={(e) => this.setState({uphone: e.target.value})}
              />
            </FormGroup>
          </div>
          <div className="col-3">
            <FormGroup>
              <Label for="examplecarid">Car ID</Label>
              <Input type="text" id="examplecarid"
                value={this.state.uinterest}
                onChange={(e) => this.setState({uinterest: e.target.value})}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <FormGroup>
              <Label for="specialmessage">Message</Label>
              <Input type="textarea" id="specialmessage"
                value={this.state.umessage}
                onChange={(e) => this.setState({umessage: e.target.value})}
              />
            <br/>
            </FormGroup>
          </div>
          <div className="col-2">
            <br/>
            <FormGroup>
              <button type="submit" class="btn btn-success">Submit</button>
            </FormGroup>
          </div>
        </div>
        <Alert
          isOpen={this.state.alertMsg}
          toggle={this.alertMsgClose}
          color="success">
          Message sent successfully. We will get back to you!
        </Alert>
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
