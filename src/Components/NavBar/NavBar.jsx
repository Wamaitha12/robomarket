import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logoDiv">
  <div className="logo-container">
     <img src="Images/logo2.jpg" alt="BotPurchase Logo" className='Logo-image' />
  </div>
  <h1 className="logo">
            <strong>Robo</strong>Marketplace
          </h1>
      </div>

      <div className="menu">
        <ul className="menuList">
        <ul><a href="#about">About</a></ul>
        <ul><a href='#reviews'>Testimonials</a></ul>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
