import logoFooter from '../../assets/images/logofooter.png';
import phoneIcon from '../../assets/images/phoneicon.png';
import mailIcon from '../../assets/images/mailicon.png';
import gpsIcon from '../../assets/images/gps.png';
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import twitterIcon from '../../assets/images/twitter.png';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logoFooter} className={styles.logotypefooter} alt="Footer Logo" />
      <div className={styles.footerinfo}>
        <div className={styles.contacts}>
          <div className={styles.contactadress}>
            <img src={phoneIcon} className={styles.iconn} alt="Phone" />
            <p>+7-917-719-06-00</p>
          </div>
          <div className={styles.contactadress}>
            <img src={mailIcon} className={styles.iconn} alt="Email" />
            <p>info@tovsad.com</p>
          </div>
          <div className={styles.contactadress}>
            <img src={gpsIcon} className={styles.iconn} alt="Location" />
            <p>г. Йошкар-Ола, ул. Строителей д.14</p>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.fourbuttons}>
            <p>О нас</p>
            <p>Отзывы</p>
            <p>Галерея</p>
            <p>Свяжитесь</p>
          </div>
          <div className={styles.stayinconnection}>
            <h3>Оставайтесь на связи</h3>
            <div className={styles.emailaddress}>
              <input type="email" id="email" name="email" placeholder="Е-маил" required className={styles.input} />
              <button type="submit" className={styles['button-footer']}>
                Обратная связь
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.red}>
        <p>© 2025 TOVSAD Все права защищены.</p>
        <div className={styles.socseti}>
          <img src={facebookIcon} alt="Facebook" className={styles.socialmediaicon} />
          <img src={instagramIcon} alt="Instagram" className={styles.socialmediaicon} />
          <img src={twitterIcon} alt="Twitter" className={styles.socialmediaicon} />
        </div>
      </div>
    </footer>
  );
};
