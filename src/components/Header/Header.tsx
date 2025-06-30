// src/components/Header.tsx
import React from 'react';
import logo from '../../assets/images/Component 3.png';
import site2otziv from '../../pages/site2otziv/site2otziv';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
      <header>
        <Link to="/" className="logotype">      
            <img src={logo} alt="Logotype" />
      
        </Link>
        <div className="headerbuttons">
          <nav className="main-menu">
            <ul className="menu">
              <li className="main-item">
                
                <Link to="/aboutussite" className="button">
                  О нас
                </Link>
                
              </li>
              <li className="main-item">
                <Link to="/site2otziv" className="button">
                  Отзывы
                </Link>
                {/* <ul className="sub-menu">
                  <li>
                    <a href="#">IT Services</a>
                  </li>
                  <li>
                    <a href="#">IT Services</a>
                  </li>
                  <li>
                    <a href="#">IT Services</a>
                  </li>
                </ul> */}
              </li>
              <li className="main-item">
                <a href="#" className="button">
                  Галерея
                </a>
              </li>
              <li className="main-item">
                
                <a href="#" className="button2" id="openModal">
                Свяжитесь
                </a>
                
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;