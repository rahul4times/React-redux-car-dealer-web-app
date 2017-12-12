import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const Car = ({car}) => {

  return (
    <div>
      <Card className="carList-row" >
        <Row>
          <Col md="4">
            <CardImg className="carlist-margin" top width="100%" src={car.link} alt={car.make} />
          </Col>
          <Col md="5">
            <Link to={`/cars/${car.id}`}>
              <CardTitle className="title"><h3>{car.year} {car.make} {car.model} {car.trim}</h3></CardTitle>
            </Link>
            <CardSubtitle className="subtitle">Stock No: #{car.id}</CardSubtitle>
            <CardBody>
              <CardText>
                <Table className="carlist-table">
                  <tbody>
                    <tr>
                      <td>Engine:</td>
                      <td>{car.engine}</td>
                    </tr>
                    <tr>
                      <td>Drive Type:</td>
                      <td>{car.drive_type}</td>
                    </tr>
                    <tr>
                      <td>Body:</td>
                      <td>{car.body_type}</td>
                    </tr>
                    <tr>
                      <td>Exterior Color:</td>
                      <td>{car.ext_color}</td>
                    </tr>
                    <tr>
                      <td>Interior Color:</td>
                      <td>{car.int_color}</td>
                    </tr>
                    <tr>
                      <td>Transmission:</td>
                      <td>{car.transmission}</td>
                    </tr>
                    <tr>
                      <td>VIN:</td>
                      <td>{car.vin}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardText>
            </CardBody>
          </Col>
          <Col md="3">
            <CardTitle className="title"></CardTitle>
            <CardSubtitle className="subtitle"></CardSubtitle>
            <CardBody className="price">
              <CardText>
                <Table>
                <tbody>
                  <tr>
                    <td>MSRP:</td>
                    <td>${car.price}</td>
                  </tr>
                  <tr>
                    <td>Dealer Discount:</td>
                    <td>{car.sale}%</td>
                  </tr>
                  <tr>
                    <td>Total:</td>
                    <td>${car.price-car.price*car.sale/100}</td>
                  </tr>
                  <tr>
                    <td>Est. Lease:</td>
                    <td>$230/m*</td>
                  </tr>
                  <tr>
                    <td>Est. Finance:</td>
                    <td>$330/m*</td>
                  </tr>
                </tbody>
              </Table>
              </CardText>
              <Link to={`/cars/${car.id}`}>
              <Button className="btn btn-success">More</Button>
            </Link>
              <br/>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Car;
