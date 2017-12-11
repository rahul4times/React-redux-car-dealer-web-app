import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopSearchBar extends Component {
  state ={
    year: 0,
    make: '',
    model: '',
    body: '',
    trim: ''
  }

  render(){

    let seachYear = 2018;
    let searchMake = ["Audi","Honda","Hundai","Lamborghini","Maserati", "Subaru","Toyota"];

    // Audi
    let audiModel = ["A3","Q3","A5"];
    let audiBody = ["Sedan","Coupe","SUV"];
    let audiTrim = ["2.OT","2.OT","2.OT"];
    // Honda
    let hondaModel = ["Accord","Civic","Odyssey","CR-V","HR-V"];
    let hondaBody = ["Sedan","Hatchback","Van","SUV"];
    let hondaTrim = ["LX"];
    // Lamborghini
    let lambModel = ["Aventador"];
    let lambBody = ["Coupe"];
    let lambTrim = ["SVRoadster"];
    // Maserati
    let maseratiModel = ["GranTurismo", "Levante"];
    let maseratiBody = ["Coupe", "SUV"];
    let maseratiTrim = ["Sports","S GranLusso"];
    // Mercedes-benz
    let mercedesModel = ["C-Class"];
    let mercedesBody = ["Sedan","Convertible","Coupe"];
    let mercedesTrim = ["C300","AMG-C43"];
    // Subaru
    let subaruModel = ["Outback"];
    let subaruBody = ["Hatchback"];
    let subaruTrim = ["2.5i"];
    // Toyota
    let toyotaModel = ["4Runner","Avalon","Camry","Tocoma","Tundra"];
    let toyotaBody = ["SUV","Sedan","Truck"];
    let toyotaTrim = ["SR5","XLE","LE","SR"];

    let makes = searchMake.map(make => {
      return (<option key={make} value={make}>{make}</option>)
    })

    







    return(
      <div className="top-search-bar">
        <div className="container text-align">
          <form>
            <div className="row">
              <div className="col-2">
                <select className="form-control">
                  <option>Select Year</option>
                  <option>{seachYear}</option>
                </select>
              </div>
              <div className="col-2">
                <select className="form-control"
                  value={this.state.make}
                  onChange={(e)=>this.setState({make: e.target.value})}
                  >
                  <option disabled selected>Select Make</option>
                  {makes}
                </select>
              </div>
              <div className="col-2">
                <select className="form-control">
                  <option>Select Model</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-2">
                <select className="form-control">
                  <option>Select Body</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-2">
                <select className="form-control">
                  <option>Select Trim</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-2">
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
