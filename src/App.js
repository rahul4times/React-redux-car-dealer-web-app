import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCars } from './actions/cars';

// User Components
import NavigationBar from './components/user/navigation_bar';
import TopSearchBar from './components/user/top_search_bar';
import FooterTop from './components/user/footer_top';
import FooterBottom from './components/user/footer_bottom';
import UserHomePage from './components/user/home';
import CarsList from './components/user/cars_list';
import OneCar from './components/user/one_car';

// Admin Components
import AdminNavigatioBar from './components/admin/admin_top_navigation';

class App extends Component {

  componentDidMount(){
    this.props.getCars();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>


            {/* <NavigationBar />
            <TopSearchBar /> */}

            <Switch>
              <Route exact path='/admin/' component={AdminNavigatioBar} />

              <Route path ='/' render={() => (
                <div>
                  <NavigationBar />
                  <TopSearchBar />
                  <Route exact path='/' component={UserHomePage} />
                  <Route exact path='/cars' component={CarsList} />
                  <Route exact path='/cars/:id' component={OneCar} />
              </div>
            )} />

            </Switch>

            <FooterTop />
            <FooterBottom />

          </div>
        </Router>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getCars: bindActionCreators(getCars, dispatch)
  }
}


export default connect(null, mapDispatchToProps) (App);
