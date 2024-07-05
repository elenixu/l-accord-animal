import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../Assets/logo_normal 1.svg';
import '../../Styles/app.css';

function Header() {
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (path, buttonName) => {
    setClickedButton(buttonName);
    navigate(path);
  };

  return (
    <div>
      <div className='hd-container-global'>
        <div className='hd-container-logo'>
          <img src={logo1} alt="logo" />
        </div>
        <div className='hd-container-buttons'>
          <div
            className={`hd-buttons ${clickedButton === 'Accueil' ? 'clicked' : ''}`}
            onClick={() => handleButtonClick('/', 'Accueil')}
          >
            Accueil
          </div>
          <div
            className={`hd-buttons ${clickedButton === 'Evennements' ? 'clicked' : ''}`}
            onClick={() => handleButtonClick('/Events', 'Evennements')}
          >
            Evennements
          </div>
          <div
            className={`hd-buttons ${clickedButton === 'Chansons' ? 'clicked' : ''}`}
            onClick={() => handleButtonClick('/Songs', 'Chansons')}
          >
            Chansons
          </div>
          <div
            className={`hd-buttons ${clickedButton === 'Contactez-Nous' ? 'clicked' : ''}`}
            onClick={() => handleButtonClick('/Contact', 'Contactez-Nous')}
          >
            Contactez-Nous
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
