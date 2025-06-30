
import logoFooter from '../../assets/images/logofooter.png';
import phoneIcon from '../../assets/images/phoneicon.png';
import mailIcon from '../../assets/images/mailicon.png';
import gpsIcon from '../../assets/images/gps.png';
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import twitterIcon from '../../assets/images/twitter.png';
export const Footer = () => {
  return (
    <footer>
        <img src={logoFooter} className="logotypefooter" alt="Footer Logo" />
        <div className="footerinfo">
          <div className="contacts">
            <div className="contactadress">
              <img src={phoneIcon} className="iconn" alt="Phone" />
              <p>+7-917-719-06-00</p>
            </div>
            <div className="contactadress">
              <img src={mailIcon} className="iconn" alt="Email" />
              <p>info@nixxsol.com</p>
            </div>
            <div className="contactadress">
              <img src={gpsIcon} className="iconn" alt="Location" />
              <p>г. Йошкар-Ола, ул. Строителей д.14</p>
            </div>
          </div>
          <div className="navigation">
            <div className="fourbuttons">
              <p>О нас</p>
              <p>Отзывы</p>
              <p>Галерея</p>
              <p>Свяжитесь</p>
            </div>
            <div className="stayinconnection">
              <h3>Оставайтесь на связи</h3>
              <div className="emailaddress">
                <input type="email" id="email" name="email" placeholder="Е-маил" required />
                <button type="submit" className="button-footer">
                  Обратная связь
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="red">
          <p>© 2025 Nixxsol Все права защищены.</p>
          <div className="socseti">
            <img src={facebookIcon} alt="Facebook" className="socialmediaicon" />
            <img src={instagramIcon} alt="Instagram" className="socialmediaicon" />
            <img src={twitterIcon} alt="Twitter" className="socialmediaicon" />
          </div>
        </div>
      </footer>
  )
}
      