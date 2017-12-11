import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class Services extends Component{
  render(){
    return(
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/new_car.jpg" alt="New Car" />
                <CardBody>
                  <CardTitle>Find New Vehicle</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/finance.jpg" alt="Finance" />
                <CardBody>
                  <CardTitle>Financing</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/test_drive.jpg" alt="Test Drive" />
                <CardBody>
                  <CardTitle>Schedule Test Drive</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-3">
              <Card>
                <CardImg top width="100%" src="https://s3.amazonaws.com/cartool/service.jpg" alt="Service" />
                <CardBody>
                  <CardTitle>Schedule Service</CardTitle>
                  <Button className='btn-success'>More</Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
