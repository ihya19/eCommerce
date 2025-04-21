import React from 'react';
import './Clients.css'; 

import hooliLogo from '../images/1.png';
import lyftLogo from '../images/2.png';
import hatLogo from '../images/3.png';
import stripeLogo  from '../images/4.png';
import awsLogo from '../images/5.png';
import RedditLogo from '../images/6.png';

const Clients = () => {
  return (
    <div className="clients-section">
      <div className="clients-content">
        <h1 className="clients-title">Big Companies Are Here</h1>
        <p className="clients-description">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        
        <div className="clients-logos">
          <div className="logo-container">
            <img src={hooliLogo} alt="hooli" className="client-logo" />
          </div>
          <div className="logo-container">
            <img src={lyftLogo} alt="Lyft" className="client-logo" />
          </div>
          <div className="logo-container">
            <img src={hatLogo} alt="Hat" className="client-logo" />
          </div>
          <div className="logo-container">
            <img src={stripeLogo} alt="Stripe" className="client-logo" />
          </div>
          <div className="logo-container">
            <img src={awsLogo} alt="AWS" className="client-logo" />
          </div>
          <div className="logo-container">
            <img src={RedditLogo} alt="Reddit" className="client-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;