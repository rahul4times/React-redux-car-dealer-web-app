import React, { Component } from 'react';

export default class FooterTop extends Component {
  render(){
    return(
      <div className="footer-top light-text">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h5>CONTACT</h5>
              G66 Cars <br/>
              515 E Grant St, <br/>
              Phoenix, AZ 85004 <br/>
              Phone: (602) 362-2670
            </div>
            <div className="col-4">
              <h5>HOURS</h5>
              Sun 10:00 am - 7:00 pm <br/>
              Mon 8:00 am - 9:00 pm <br/>
              Tue 8:00 am - 9:00 pm <br/>
              Wed 8:00 am - 9:00 pm <br/>
              Thu 8:00 am - 9:00 pm <br/>
              Fri 8:00 am - 9:00 pm <br/>
              Sat 8:00 am - 8:00 pm <br/>

            </div>
            <div className="col-4">
              <h5>ABOUT</h5>
              <p>These extremely popular cars continue to be top choices for many drivers who want dependable, long-lasting cars for their families. Check out our new car specials and financing options that offer great deals on these in-demand new cars.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
