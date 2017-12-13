import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col
} from 'reactstrap';

export default class NewCar extends React.Component {
  render() {
    return (
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
          <div className="card-header text-white bg-primary">Add New Car</div>
          <div className="card-body text-primary">
            <Form>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="exampleSelect">Year</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="exampleSelect">Make</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="exampleSelect">Model</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="exampleSelect">Body</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
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
