// src/components/CardList/CardList.tsx
import React from 'react';
import gamesImg from '../../assets/images/ур1.jpg';
import game2Img from '../../assets/images/ур2.jpg';

const CardList = () => {

  return (
              <div className="lenta-vert">
            <div className="lenta">
              <div className="game">
                <img src={gamesImg} alt="игры" />
              </div>
              <div className="game2">
                <img src={game2Img} alt="игры" />
              </div>
            </div>
            <div className="lentabuttons">
              <span className="slider-arrow" data-direction="left">
                👈
              </span>
              <span className="slider-arrow" data-direction="right">
                👉
              </span>
            </div>
          </div>)
};

export default CardList;