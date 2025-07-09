// src/pages/site2otziv.tsx
import React from 'react';
import styles from './gallery.module.css';
import ur1 from '../../assets/images/ур1.jpg';
import ur2 from '../../assets/images/ур2.jpg';
import ur3 from '../../assets/images/trava.jpg';

const Gallery: React.FC = () => {
  return (
    <div className={styles.galllist}>
        <div className={styles.gallimg}>
            <img alt="урожай" src={ur1}></img>
            <img alt="урожай" src={ur2}></img>
            <img alt="урожай" src={ur3}></img>
        </div>
    </div>
  );
};

export default Gallery;



