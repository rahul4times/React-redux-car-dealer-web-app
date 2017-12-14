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
                    <Label for="year">Year</Label>
                    <Input type="select" name="select" id="year">
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
                    <Label for="make">Make</Label>
                    <Input type="select" name="select" id="make">
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
                    <Label for="model">Model</Label>
                    <Input type="select" name="select" id="model">
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
                    <Label for="body">Body</Label>
                    <Input type="select" name="select" id="body">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="trim">Trim</Label>
                    <Input type="text" id="trim" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="engine">Engine</Label>
                    <Input type="text" id="engine" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="drivetype">Drive Type</Label>
                    <Input type="text" id="drivetype" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Exteriorcolor">Exterior Color</Label>
                    <Input type="text" id="Exteriorcolor" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="intcolor">Interior Color</Label>
                    <Input type="text" id="intcolor" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="transmission">Transmission</Label>
                    <Input type="text" id="transmission" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="Price">Price</Label>
                    <Input type="text" id="Price" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="sale">Sale</Label>
                    <Input type="text" id="sale" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="text" id="status" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="vin">VIN</Label>
                    <Input type="text" id="vin" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="link">Image Link</Label>
                    <Input type="text" id="link" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="electstab">Electronic stability</Label>
                    <Input type="text" id="electstab" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="wireless">Wireless phone connectivity</Label>
                    <Input type="text" id="wireless" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="split">Split folding rear seat</Label>
                    <Input type="text" id="split" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="remote">Remote keyless entry</Label>
                    <Input type="text" id="remote" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="trip">Trip computer</Label>
                    <Input type="text" id="trip" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label for="low">Low tire pressure warning</Label>
                    <Input type="text" id="low" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="wiper">Rear window wiper</Label>
                    <Input type="text" id="wiper" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Label for="headlight">Fully automatic headlights</Label>
                    <Input type="text" id="headlight" />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <button type="button" className="btn btn-success">Create</button>
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
