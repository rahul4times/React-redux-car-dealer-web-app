import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCar } from '../../actions/cars';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EditCar extends Component{

  state = {
    year: ''
  }

  handleSubmit = (id) => {
    this.props.editCar(id, this.state);
  }
  gotValue = false;

  render(){
    
    let car = {};
    if(!this.gotValue && this.props.car){
      car = this.props.car;
      this.gotValue = true;
    }else{
      car = this.state;
    }

    return(
      <div className="container">
        <Form onSubmit={(e)=>{
          e.preventDefault();
          this.handleSubmit(this.props.car.id)
        }}>
          <FormGroup>
            <Label for="trim">year</Label>
            <Input type="text" id="trim"
              value={car.year}
              onChange={(e) => this.setState({ year: e.target.value })}
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
    car: state.cars.filter(car => car.id == props.match.params.id)[0]
  }
}


function mapDispatchToProps(dispatch) {
  return {
    editCar: bindActionCreators(editCar, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
