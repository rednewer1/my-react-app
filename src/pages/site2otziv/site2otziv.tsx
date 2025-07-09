import React from 'react';
import styles from './site2otziv.module.css';
import aaava from '../../assets/images/otzyv ava.png';
import aaava2 from '../../assets/images/otziv ava woman.png';


const Site2Otziv: React.FC = () => {
  return (
    <div className={styles.otzivs}>
      <div className={styles.otzivreview}>
        <img alt="avatar" src={aaava} />
        <div>
          <h1>Сергей Калиндев</h1>
          <p>
            Отличный питомник. Большой выбор саженцев как плодовых, так и декоративных культур. Нам очень подробно все объяснили, как правильно сажать. Цены в питомнике весьма демократичные, что очень нас с мужем порадовало! Спасибо Вам огромное!
          </p>
        </div>
      </div>

      <div className={styles.otzivreview}>
        <img alt="avatar" src={aaava2} />
        <div>
          <h1>Елена Иванова</h1>
          <p>
            Очень довольна покупкой! Растения красивые и здоровые, персонал вежливый и компетентный.
          </p>
        </div>
      </div>
    </div>
      

  );
};

export default Site2Otziv;
