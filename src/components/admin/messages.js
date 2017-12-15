import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import { deleteMsg } from '../../actions/message';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { enlarge } from 'react-icons-kit/icomoon';
import MessageWindow from './message_window';

class Messages extends Component {

  state ={
    show: false,
      id:'',
      uname:'',
      uemail:'',
      uphone:'',
      uinterest:'',
      umessage:''
  }

  enlargeMessage = (message) => {
    let show = this.state.show;
    this.setState({
      show: !show,
      id: message.id,
      uname: message.uname,
      uemail: message.uemail,
      uphone: message.uphone,
      uinterest: message.uinterest,
      umessage: message.umessage
     });
  }

  handleDelete = (id) => {
    console.log("id is: ", id);
    this.props.deleteMsg(id);
    this.props.history.push('/admin/messages');
  }

  render(){

    let messagesList = this.props.messages ? this.props.messages.map(message => {
      return(
        <div>
          <Row>
            <Col md="4">
              {message.uname}
            </Col>
            <Col md="6">
              {message.umessage ? message.umessage.substring(0, 50) : null}
            </Col>
            <Col md="1">
              <Icon
                className="text-success"
                icon={enlarge}
                onClick={(e) => this.enlargeMessage(message)}
              />
            </Col>
            <Col md="1">
              <Icon
                className="text-danger"
                icon={bin}
                onClick={(e)=>this.handleDelete(message.id)}
              />
            </Col>
          </Row>
        </div>
      )
    }) : null;

    return(
      <div className="container">
        <br/>
        <Row>
          <Col md="7">
            <div className="card border-primary mb-3">
            <div className="card-header text-white bg-primary">MESSAGES</div>
              <div className="card-body text-primary">
                {messagesList}
              </div>
            </div>
          </Col>
          <Col md="5">
            {this.state.show ? <MessageWindow message={this.state}/> : null}
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    messages: state.messages
  }
}

export default connect(mapStateToProps, {deleteMsg})(Messages);
