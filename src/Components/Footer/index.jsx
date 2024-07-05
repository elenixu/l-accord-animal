import React from 'react';
import logo2 from '../../Assets/logo_normal 2.png';

function Footer() {
  return (
    <div>
      <div className="ft-container-global">
        <div className="ft-container-logo">
          <img src={logo2} alt="logo2" />
        </div>
        <div className="ft-container-text">L'ACCORD ANIMAL</div>
      </div>
    </div>
  );
}

export default Footer;
