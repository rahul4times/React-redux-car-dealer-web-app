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


    let searchMake = ["Audi","Honda","Hundai","Lamborghini","Maserati", "Subaru","Toyota"];

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
    let seachYear = 2018;
    let cars = {
      Audi: [
        {model: "A3", body: "Sedan", trim: '2.OT'},
        {model: "Q3", body: "Coupe", trim: '2.OT'},
        {model: "A5", body: "SUV", trim: '2.OT'}
      ],
      Honda: [
        {model: "Accord", body: "Sedan", trim: 'LX'},
        {model: "Civic", body: "Sedan", trim: 'LX'},
        {model: "Odyssey", body: "Van", trim: 'LX'},
        {model: "CR-V", body: "SUV", trim: 'LX'},
        {model: "HR-V", body: "SUV", trim: 'LX'}
      ],
      Lamborghini: [
        {model: "Aventador", body: "Coupe", trim: 'SVRoadster'}
      ],
      Maserati: [
        {model: "GranTurismo", body: "Coupe", trim: 'Sports'},
        {model: "Levante", body: "SUV", trim: 'S GranLusso'},
      ],
      Mercedes: [
        {model: "C-Class", body: "Sedan", trim: 'C300'},
        {model: "C-Class", body: "Convertible", trim: 'AMG-C43'},
        {model: "C-Class", body: "Coupe", trim: 'C300'}
      ],
      Subaru: [
        {model: "Outback", body: "Hatchback", trim: '2.5i'}
      ],
      Toyota: [
        {model: "4Runner", body: "SUV", trim: 'SR5'},
        {model: "Avalon", body: "Sedan", trim: 'XLE'},
        {model: "Camry", body: "Sedan", trim: 'LE'},
        {model: "Tocoma", body: "Truck", trim: 'SR'},
        {model: "Tundra", body: "Truck", trim: 'SR'}
      ]
    }

    let makes = searchMake.map((make, i) => {
      return (
        <option key={i} value={make}>
          {this.state.year ? make : ''}
        </option>
      )
    })

    if(this.state.make) {
      var models = cars[this.state.make].map((make, i) => {
        return (
          <option key={i} value={make.model}>
              {make.model}
          </option>)
      })
    }

    if(this.state.model) {
      var body = cars[this.state.make].map(car => {
        return (
          <option key={car.model} value={car.body}>
              {car.body}
          </option>)
      })
    }

    if(this.state.body) {
      var trim = cars[this.state.make].map(car => {
        return (
          <option key={car.model} value={car.trim}>
              {car.trim}
          </option>)
      })
    }

    return(
      <div className="top-search-bar">
        <div className="container text-align">
          <form>
            <div className="row">
              <div className="col-2">
                <select className="form-control"
                    value={this.state.year}
                    onChange={(e)=>this.setState({year: e.target.value})}
                  >
                  <option defaultValue>Select Year</option>
                  <option>{seachYear}</option>
                </select>
              </div>
              <div className="col-2">
                <select className="form-control"
                    value={this.state.make}
                    onChange={(e)=>this.setState({make: e.target.value})}
                  >
                  <option defaultValue>Select Make</option>
                    {makes}
                </select>
              </div>
              <div className="col-2">
                <select className="form-control"
                  value={this.state.model}
                  onChange={(e)=>this.setState({model: e.target.value})}
                  >
                  <option defaultValue>Select Model</option>
                    { models ? models : '' }
                </select>
              </div>
              <div className="col-2">
                <select className="form-control"
                  value={this.state.body}
                  onChange={(e)=>this.setState({body: e.target.value})}
                  >
                  <option defaultValue>Select Body</option>
                    { body ? body : '' }
                </select>
              </div>
              <div className="col-2">
                <select className="form-control"
                  value={this.state.trim}
                  onChange={(e)=>this.setState({trim: e.target.value})}
                  >
                  <option defaultValue>Select Trim</option>
                    { trim ? trim : '' }
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
