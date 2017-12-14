import React, { Component } from 'react';
import { Table} from 'reactstrap';
import { connect } from 'react-redux';
import { deleteMsg } from '../../actions/message';
import Icon from 'react-icons-kit';
import { bin } from 'react-icons-kit/icomoon';
import { enlarge } from 'react-icons-kit/icomoon';

class Messages extends Component {

  handleDelete = (id) => {
    console.log("id is: ", id);
    this.props.deleteMsg(id);
    this.props.history.push('/admin/messages');
  }

  render(){
    console.log('props here: ', this.props);
    let messagesList = this.props.messages ? this.props.messages.map(message => {
      return(
        <tr>
          <td>{message.uname}</td>
          <td>{message.uphone}</td>
          <td>{message.umessage ? message.umessage.substring(0, 50) : null}</td>
          <td><Icon  icon={enlarge} /></td>
          <td>
            <Icon icon={bin}
              onClick={(e)=>this.handleDelete(message.id)}
            />

          </td>
        </tr>
      )
    }) : null;

    return(
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
        <div className="card-header text-white bg-primary">Messages</div>
          <div className="card-body text-primary">
            <Table hover>
              <thead className="text-success">
                <tr>
                  <th>NAME</th>
                  <th>PHONE</th>
                  <th>MESSAGE</th>
                  <th>VIEW</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {messagesList}
              </tbody>
            </Table>
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

export default connect(mapStateToProps, {deleteMsg})(Messages);
