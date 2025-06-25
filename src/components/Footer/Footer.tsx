
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
              <p>+92 300 1234567</p>
            </div>
            <div className="contactadress">
              <img src={mailIcon} className="iconn" alt="Email" />
              <p>info@nixxsol.com</p>
            </div>
            <div className="contactadress">
              <img src={gpsIcon} className="iconn" alt="Location" />
              <p>Lorem ipsum dolor sit amet consectetur. Dui libero lectus pulvinar mattis a.</p>
            </div>
          </div>
          <div className="navigation">
            <div className="fourbuttons">
              <p>About</p>
              <p>Services</p>
              <p>Portfolio</p>
              <p>Contact Us</p>
            </div>
            <div className="stayinconnection">
              <h3>Stay in Connection</h3>
              <div className="emailaddress">
                <input type="email" id="email" name="email" placeholder="Email Address" required />
                <button type="submit" className="button-footer">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="red">
          <p>© 2022 Nixxsol All Rights Reserved.</p>
          <div className="socseti">
            <img src={facebookIcon} alt="Facebook" className="socialmediaicon" />
            <img src={instagramIcon} alt="Instagram" className="socialmediaicon" />
            <img src={twitterIcon} alt="Twitter" className="socialmediaicon" />
          </div>
        </div>
      </footer>
  )
}
      