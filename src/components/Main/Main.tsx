import React from 'react'
import frameImg from '../../assets/images/Frame.png';

import mentorcityImg from '../../assets/images/mentorcity.png';

import sponsors2 from '../../assets/images/sponsors2.png';
import backForBooking from '../../assets/images/backforbook.png';
import kolba from '../../assets/images/Vector.png';
import back2 from '../../assets/images/back2.png';

import CardList from '../CardList/CardList';
import CardList2 from '../CardList/CardList2';

export const Main: React.FC = () => {
    return (
        
      <main>

    
      <div className="preloader">
        <div className="loader">loading</div>
      </div>

        <div className="Bridging">
          <p>Bridging the gap between ideas and reality</p>
          <div className="Bridgingimg">
            <img src={frameImg} alt="Main Image" />
          </div>
        </div>

        
        <div className="text1">
          <div className="aboutcompany">
            <p>About company</p>
          </div>
          <div className="info1">
            <div className="lorem">
              <p>Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien</p>
            </div>
            <div className="matiz">
              <p>
                Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum
                sagittis euismod urna egestas quam. In ornare nisl leo odio magna.
              </p>
            </div>
            <div className="number">
              <div className="clients">
                <div className="sto">
                  <p>
                    100<label className="redsign">+</label>
                  </p>
                </div>
                <div className="numbertext">
                  <p>Happy clients</p>
                </div>
              </div>
              <div className="years">
                <div className="zerofive">
                  <p>
                    05<label className="redsign">+</label>
                  </p>
                </div>
                <div className="numbertext">
                  <p>Years in business</p>
                </div>
              </div>
              <div className="total">
                <div className="fivezero">
                  <p>
                    50<label className="redsign">+</label>
                  </p>
                </div>
                <div className="numbertext">
                  <p>Total Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="services">
          <img className="servicesback" src={back2} alt="Background" />
          <p className="textt">Services</p>
          <div className="containers">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="kartochka">
                  <div className="logo2">
                    <img className="kolba" src={kolba} alt="лого колбы" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Branding Design</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet
                      turpis nunc, nisl.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        
        <div className="portfolio">
          <div className="portfoliotext">
            <h3>Portfolio</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
            <a href="#" className="button3">
              More portfolio
            </a>
          </div>
            <CardList></CardList>
        </div>

        
        <div className="mentorcity">
          <img src={mentorcityImg} alt="спонсоры" />
        </div>

        
        <div className="testimonials">
          <div className="testimonials_headline">
            <h3>Testimonials</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
            <a href="#" className="button3">
              Explore more 
            </a>
          </div>
          <CardList2></CardList2>
        </div>

        
        <div className="booking">
          <img src={backForBooking} className="backforbooking" alt="Booking Background" />
          <div className="bookingtext">
            <p>Testimonials _______</p>
            <h3>Book a meeting with us</h3>
            <p>
              Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum
              sagittis euismod urna egestas quam. In ornare nisl leo odio magna.
            </p>
          </div>
          <div className="form">
            <form>
              <div>
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="tel" id="phone" name="phone" placeholder="Phone (Optional)" />
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Tell us about the project you are working on (Optional)"
                />
              </div>
              <div>
                <button type="submit" className="button-small">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        
        <div className="sponsor">
          <img src={sponsors2} alt="Sponsors" />
        </div>

            
      <div id="myModal" className="modal">
        <div className="modal-content">
          <h3>Contact Us</h3>
          <form id="contactForm">
            <input type="text" id="name" name="name" placeholder="Name" required />
            <input type="email" id="email" name="email" placeholder="Email" required />
            <input type="tel" id="phone" name="phone" placeholder="Phone (Optional)" />
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Tell us about the project you are working on (Optional)"
            />
            <div>
              <button type="submit">OK</button>
              <button type="button" id="closeModal">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      </main>

    )
}