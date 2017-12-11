import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopSearchBar extends Component {
  render(){
    return(
      <div className="top-search-bar">
        <div className="container text-align">
          <form>
            <div className="row">
              <div className="col-2">
                <select className="form-control">
                  <option>Select Year</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-2">
                <select className="form-control">
                  <option>Select Make</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
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

function mapStateToProps(state, props){
  console.log('cars on searchbar: ', state.cars);
  return{
    cars:state.cars
  }
}

export default connect(mapStateToProps, null)(TopSearchBar);
