import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AngLogo from '../Images/white-ang-logo.png';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="BelowHeader">
          <img className="resizeImageBelow" src={'https://now.goang.com/wp-content/uploads/2018/11/F35_ThankYou.jpg'} alt="logo" />
        </div>
        <div className="centered">
          <img className="resizeImage" src={AngLogo} alt="logo" />
        </div>
        <div className="top-left">
          Congratulations on taking the first step! Discover the benefits of joining the Air National Guard:
          Educational Benefits . World-Class Training . Global and Local Missions <br/><br/>
          Click the button to speak with an Air National Guard representative now!
        </div>
        <div className="top-right">
          <a className="callAng" href="tel:6168819326">800-TO-GO-ANG</a>
        </div>
        <div className="takeoff">READY FOR TAKEOFF?</div>
      </div>
    );
  }
}

export default Header;
