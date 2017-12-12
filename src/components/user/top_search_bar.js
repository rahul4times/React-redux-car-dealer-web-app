import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopSearchBar extends Component {
  state = {
    make: '',
    body: '',
    priceRange: ''
  }

  render(){




    // // Audi
    // let audiModel = ["A3","Q3","A5"];
    // let audiBody = ["Sedan","Coupe","SUV"];
    // let audiTrim = ["2.OT","2.OT","2.OT"];
    // // Honda
    // let hondaModel = ["Accord","Civic","Odyssey","CR-V","HR-V"];
    // let hondaBody = ["Sedan","Hatchback","Van","SUV"];
    // let hondaTrim = ["LX"];
    // // Lamborghini
    // let lambModel = ["Aventador"];
    // let lambBody = ["Coupe"];
    // let lambTrim = ["SVRoadster"];
    // // Maserati
    // let maseratiModel = ["GranTurismo", "Levante"];
    // let maseratiBody = ["Coupe", "SUV"];
    // let maseratiTrim = ["Sports","S GranLusso"];
    // // Mercedes-benz
    // let mercedesModel = ["C-Class"];
    // let mercedesBody = ["Sedan","Convertible","Coupe"];
    // let mercedesTrim = ["C300","AMG-C43"];
    // // Subaru
    // let subaruModel = ["Outback"];
    // let subaruBody = ["Hatchback"];
    // let subaruTrim = ["2.5i"];
    // // Toyota
    // let toyotaModel = ["4Runner","Avalon","Camry","Tocoma","Tundra"];
    // let toyotaBody = ["SUV","Sedan","Truck"];
    // let toyotaTrim = ["SR5","XLE","LE","SR"];



    console.log('local state: ', this.state);

    let searchMake = ["Audi","Honda","Lamborghini","Maserati", "Subaru","Toyota"];

    let cars = {
      Audi: [ {body: "Sedan"}, {body: "Coupe"}, {body: "SUV"} ],
      Honda: [ {body: "Sedan"}, {body: "Van"}, {body: "SUV"} ],
      Lamborghini: [ {body: "Coupe"} ],
      Maserati: [ {body: "Coupe"}, {body: "SUV"} ],
      Mercedes: [ {body: "Convertible"}, {body: "Coupe"} ],
      Subaru: [ {body: "Hatchback"} ],
      Toyota: [ {body: "SUV"}, {body: "Sedan"}, {body: "Truck"} ]
    }

    let makes = searchMake.map((make, i) => {
      return (
        <option key={i} value={make}>
          {make}
        </option>
      )
    })

    if(this.state.make) {
      var body = cars[this.state.make].map((make, i) => {
        return (
          <option key={i} value={make.body}>
              {make.body}
          </option>)
      })
    }




    return(
      <div className="top-search-bar">
        <div className="container text-align">
          <form>
            <div className="row">
              <div className="col-3">
                <select className="form-control"
                    value={this.state.make}
                    onChange={(e)=>this.setState({make: e.target.value})}
                  >
                  <option defaultValue>Make</option>
                    {makes}
                </select>
              </div>
              <div className="col-3">
                <select className="form-control"
                  value={this.state.body}
                  onChange={(e)=>this.setState({body: e.target.value})}
                  >
                    <option defaultValue>Body Type</option>
                    { makes ? body : null }
                  </select>
              </div>
              <div className="col-3">
                <select className="form-control"
                  value={this.state.priceRange}
                  onChange={(e)=>this.setState({priceRange: e.target.value})}
                  >
                    <option defaultValue>Price</option>
                    <option value="lowHigh">Low To High</option>
                    <option value="highLow">High To Low</option>
                  </select>
              </div>

              <div className="col-3">
                <button type="submit" className="btn btn-success btn-block">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default TopSearchBar;
