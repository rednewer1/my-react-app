// src/components/Header.tsx
import React from 'react';
import logo from '../../assets/images/Component 3.png';
const Header = () => {
  return (
      <header>
        <div className="logotype">
          <a href="#">
            <img src={logo} alt="Logotype" />
          </a>
        </div>
        <div className="headerbuttons">
          <nav className="main-menu">
            <ul className="menu">
              <li className="main-item">
                <a href="#" className="button">
                  About
                </a>
              </li>
              <li className="main-item">
                <a href="#" className="button">
                  IT Services
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">IT Services</a>
                  </li>
                  <li>
                    <a href="#">IT Services</a>
                  </li>
                  <li>
                    <a href="#">IT Services</a>
                  </li>
                </ul>
              </li>
              <li className="main-item">
                <a href="#" className="button">
                  Portfolio
                </a>
              </li>
              <li className="main-item">
                <a href="#" className="button2" id="openModal">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;