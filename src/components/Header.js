import React from 'react';
import menuIcon from '../assets/menu-icon.png';
import notificationIcon from '../assets/notification-icon.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        <h1 className="logo">AlgoZenith</h1>
      </div>
      <div className="header-right">
        <div className='notification-box'><img src={notificationIcon} alt="Notifications" className="notification-icon" /></div>
        <div className="profile-circle"></div>
      </div>
    </header>
  );
};

export default Header;
