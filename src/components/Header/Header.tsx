// src/components/Header.tsx
import React from 'react';
import logo from '../../assets/images/Component 3.png';
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
                
              </li>
              <li className="main-item">
                <Link to="/Gallery" className="button">
                  Галерея
                </Link>

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