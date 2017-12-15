import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

class TotalMessage extends Component{
  render(){
    console.log('message: ', this.props.messages);

    let potentialBuyers = this.props.messages ? this.props.messages.map(message => {
      return(
        <Link to={`/admin/messages/`}>
          <Row key={message.id}>
            <Col md="6">
              {message.uname}
            </Col>
            <Col md="6">
              {message.uinterest}
            </Col>
          </Row>
        </Link>
      )
    }) : null;

    return(
      <div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">POTENTIAL BUYERS</div>
          <div className="card-body">
            {potentialBuyers}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    messages: state.messages

  }
}

export default connect(mapStateToProps, null)(TotalMessage);
