import React from 'react'
import logo1 from '../../Assets/logo_normal 1.svg';

import '../../Styles/app.css'

function Header() {
  return (
    <div>
    <div className='hd-container-global'>
      <div className='hd-container-logo'>
      <img src={logo1} alt="logo" />
      </div>
      <div className='hd-container-buttons'>
      <div className='hd-buttons'>Accueil</div>
      <div className='hd-buttons'>Evennements</div>
      <div className='hd-buttons'>Chansons</div>
      <div className='hd-buttons'>Contactez-Nous</div>
      </div>
    </div>
    </div>
  )
}

export default Header
