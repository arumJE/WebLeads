import React, { Component } from 'react';
import AngLogo from '../Images/white-ang-logo.png';
import Heading from '../Images/LandingPage-HeaderImage 2600x810.png';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="centerAll">
          <div className="BelowHeader">
            <a href='tel:8008646264'><img className="resizeImageBelow" src={Heading} alt="logo" /></a>
          </div>
        </div>
        <div className="tagline">Get world-class training, exposure to the most advanced technology on the planet, and missions that matter to communities.<br/> With a part-time commitment, you’ll have the flexibility to live life on your terms - meaning more time with family, pursuing an education, maintaining a civilian career, or all of the above. With the Air National Guard, all the choices are yours.</div>
        <div className="takeoff"><a className="telephone" href="tel:8008646264">CLICK TO CALL 800-TO-GO-ANG</a></div>
        <br/>
        <div className="tagline">No time to talk? No problem.<br/>Fill out the form below and and we’ll reach out to you.</div>
      </div>
    );
  }
}

export default Header;
