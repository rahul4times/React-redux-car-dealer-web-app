import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCars } from './actions/cars';
import { getMessages } from './actions/message';

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
import Cars from './components/admin/admin_cars';
import NewCar from './components/admin/newcar';
import Messages from './components/admin/messages';
import EditCar from './components/admin/edit_car';

class App extends Component {

  componentDidMount(){
    this.props.getCars();
    this.props.getMessages();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/admin/' render={() => (
                <div>

                  <AdminNavigatioBar />
                  <Route exact path='/admin/' component={Cars} />
                  <Route exact path='/admin/newcar' component={NewCar} />
                  <Route exact path='/admin/editcar/:id' component={EditCar} />
                  <Route exact path='/admin/messages' component={Messages} />

                </div>
              )} />

              <Route path ='/' render={(props) => (
                <div>
                    <NavigationBar />
                    <TopSearchBar {...props}/>
                    <Route exact path='/' component={UserHomePage} />
                    <Route exact path='/cars' component={CarsList} />
                    <Route exact path='/cars/:id' component={OneCar} />
                    <FooterTop />
                    <FooterBottom />
                </div>
            )} />

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
      getCars: bindActionCreators(getCars, dispatch),
      getMessages: bindActionCreators(getMessages, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (App);
