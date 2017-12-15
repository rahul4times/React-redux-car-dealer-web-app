import React from 'react';
import { CardImg, Button, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';


const Car = ({car}) => {

  return (
    <div>
      <Row>
        <Col md="12">
          <div className="card border-secondary mb-3">
            <div className="card-header text-success">
              <h4>
                <Link to={`/cars/${car.id}`}>
                  {car.year} {car.make} {car.model} {car.trim}
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <Row>
                <Col md="5">
                  <CardImg className="carlist-margin" top width="100%" src={car.link} alt={car.make} />
                </Col>
                <Col md="4">
                  <Table className="striped">
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
                </Col>
                <Col md="3">
                  <Table className="striped">
                    <tbody>
                      <tr>
                        <td className="text-primary text-right">
                          <strong>
                            MSRP:
                          </strong>
                          </td>
                        <td className="text-primary text-right">
                          <strong>
                            ${car.price}
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-danger text-right">Dealer Discount:</td>
                        <td className="text-danger text-right">{car.sale}%</td>
                      </tr>
                      <tr>
                        <td className="text-primary text-right">
                          <strong>
                            Total:
                          </strong>
                        </td>
                        <td className="text-primary text-right">
                          <strong>
                            ${car.price-car.price*car.sale/100}
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-primary text-right">Est. Lease:</td>
                        <td className="text-primary text-right">$230/m*</td>
                      </tr>
                      <tr>
                        <td className="text-primary text-right">Est. Finance:</td>
                        <td className="text-primary text-right">$330/m*</td>
                      </tr>
                      <tr>
                        <td className="text-right"></td>
                        <td className="text-right">
                          <Link to={`/cars/${car.id}`}>
                          <Button className="btn btn-success">More</Button>
                        </Link>
                        </td>
                      </tr>
                  </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Car;
