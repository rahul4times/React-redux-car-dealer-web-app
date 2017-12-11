import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCars } from './actions/cars';

// Components
import NavigationBar from './components/user/navigation_bar';
import TopSearchBar from './components/user/top_search_bar';
import FooterTop from './components/user/footer_top';
import FooterBottom from './components/user/footer_bottom';
import UserHomePage from './components/user/home';
import CarsList from './components/user/cars_list';
import OneCar from './components/user/one_car';


class App extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>

            <NavigationBar />
            <TopSearchBar />

            <Switch>

              <Route exact path='/' component={UserHomePage} />
              <Route exact path='/cars' component={CarsList} />
              <Route exact path='/cars/:id' component={OneCar} />

            </Switch>

            <FooterTop />
            <FooterBottom />

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
