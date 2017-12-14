import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCar } from '../../actions/cars';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EditCar extends Component{

  state = {
    year: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editCar(this.state);
    this.setState({
      year: ''

    })
  }

  render(){
    console.log('edit car page: ', this.props.car);
    return(
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="trim">year</Label>
            <Input type="text" id="trim"
              value={this.props.car.year}
              onChange={(e) => this.setState({year: e.target.value})}
            />
          </FormGroup>
          <br/>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    car: state.cars.filter(car => car.id == props.match.params.id)
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editCar: bindActionCreators(editCar, dispatch)
  }
}

export default connect(mapStateToProps, (mapDispatchToProps, {editCar}))(EditCar);
