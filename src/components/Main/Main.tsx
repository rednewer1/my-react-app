//import frameImg from '../../assets/images/Frame.png';
import { Link } from 'react-router-dom';
import plantImg from '../../assets/images/plant.jpg';

import mentorcityImg from '../../assets/images/mentorcity.png';

import sponsors2 from '../../assets/images/sponsors2.png';
import backForBooking from '../../assets/images/backforbook.png';
import apple from '../../assets/images/Apple Fruit.png';
import pear from '../../assets/images/pear.png';
import cherry from '../../assets/images/Cherry.png';
import grape from '../../assets/images/Grape.png';
import slivaa from '../../assets/images/sliva.png';
import watermelon from '../../assets/images/Whole Watermelon.png';
import raspberry from '../../assets/images/Raspberry.png';
import back2 from '../../assets/images/back2.png';
import CardList from '../CardList/CardList';
import CardList2 from '../CardList/CardList2';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export const Main: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true); // Показываем прелоадер при переходе

        const timer = setTimeout(() => {
            setLoading(false); // Скрываем прелоадер через 500мс
        }, 500);

        return () => clearTimeout(timer);
    }, [location.pathname]); // Срабатывает при каждом переходе


    return (
      <main>
  
      {loading && (
    <div className="preloader">
      <div className="loader">loading</div>
    </div>
    )}

        <div className="Bridging">
          <p>У нас покупай, будет знатный урожай!</p>
          <div className="Bridgingimg">
            <img src={plantImg} alt="Main Image" />
          </div>
        </div>

        
        <div className="text1">
          <div className="aboutcompany">
            <p>О нас</p>
          </div>
          <div className="info1">
            <div className="lorem">
              <p>Мы рады приветствовать Вас на сайте магазина "TOVSAD"!
Наш магазин  работает с 2006 года, а выращиванием и реализацией саженцев мы начали заниматься ещё в 1996 году!</p>
            </div>
            <div className="matiz">
              <p>
                Вы можете приобрести у нас семена овощных и цветочных культур от лучших российских и зарубежных компаний, удобрения, средства защиты растений, почвогрунты, цветочные горшки. 
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
                  <p>Довольных клиентов</p>
                </div>
              </div>
              <div className="years">
                <div className="zerofive">
                  <p>
                    05<label className="redsign">+</label>
                  </p>
                </div>
                <div className="numbertext">
                  <p>Лет в бизнесе</p>
                </div>
              </div>
              <div className="total">
                <div className="fivezero">
                  <p>
                    50<label className="redsign">+</label>
                  </p>
                </div>
                <div className="numbertext">
                  <p>Участников</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="services">
          <img className="servicesback" src={back2} alt="Background" />
          <p className="textt">Доступный урожай</p>
          <div className="containers">
            <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={apple} alt="лого яблока" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Яблоня</p>
                    <p>
                      Главные сорта: Успенское. Скала. Антоновка. Благовест. Штрейфлинг. Уэлси. Былина. Богатырь.
                    </p>
                  </div>
              </div>

                <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={pear} alt="лого груши" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Груша</p>
                    <p>
                      Главные сорта: Лада. Аллегро. Чижовская. Августовская роса. Памяти Яковлева. Просто Мария. Ника.
                    </p>
               </div>
              </div>

              <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={cherry} alt="лого вишни" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Вишня</p>
                    <p>
                      Главные сорта: Жуковская. Молодёжная. Морозовка. Тургеневка. Харитоновская. Шоколадница.
                    </p>
               </div>
              </div>

              <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={slivaa} alt="лого сливы" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Слива</p>
                    <p>
                      Главные сорта: Заречная раняя. Светлячок. Этюд. Алыча Злато Скифов. Алыча Кубанская Комета. Шоколадница.
                    </p>
               </div>
              </div>

              <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={grape} alt="лого виноград" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Виноград</p>
                    <p>
                      Главные сорта: Маленький принц. Тамерлан. Чернавка. Виксне. Детван. Смольяниновская.
                    </p>
               </div>
              </div>

              <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={watermelon} alt="лого крыжовника" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Крыжовник</p>
                    <p>
                      Главные сорта: Русский жёлтый. Серенада.
                    </p>
               </div>
              </div>

              <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={slivaa} alt="лого сливы" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Абрикос</p>
                    <p>
                      Главные сорта: Жигулевский сувенир. Краснощекий. Монастырский. Погремок. Эдельвейс.
                    </p>
               </div>
              </div>

              <div className="kartochka">
                  <div className="logo2">
                    <img className="urozhai" src={raspberry} alt="лого малина" />
                  </div>
                  <div className="kartochkatext">
                    <p className="kartochkabold">Малина</p>
                    <p>
                      Главные сорта: Желтый гигант. Московский Гигант. Терентий. Сказка. Таруса.
                    </p>
               </div>
              </div>


          </div>
        </div>

        
        <div className="portfolio">
          <div className="portfoliotext">
            <h3>Галерея</h3>
            <p>Кадры самых лучших урожаев.</p>
            <Link to="/Gallery" className="button3">
            Посмотреть
            </Link>
              
          </div>
            <CardList></CardList>
        </div>

        
        <div className="mentorcity">
          <img src={mentorcityImg} alt="спонсоры" />
        </div>

        
        <div className="testimonials">
          <div className="testimonials_headline">
            <h3>Отзыв</h3>
            <p>Самые лучшие отзывы нашей работы. 👍</p>
            <Link to="/site2otziv" className="button3">
              Посмотреть 
            </Link>
          </div>
          <CardList2></CardList2>
        </div>

        
        <div className="booking">
          <img src={backForBooking} className="backforbooking" alt="Booking Background" />
          <div className="bookingtext">
            
            <h3>Оставьте отзыв</h3>
            <p>
              Уважаемые садоводы, здесь вы можете оставить свой отзыв, пожелания или предложения о работе нашего питомника или задать волнующие вас вопросы, касающиеся саженцев и не только. Оставив отзыв, вы помогаете людям определиться с выбором, а нам - улучшить сервис. Спасибо!
            </p>
          </div>
          <div className="form">
            <form>
              <div>
                <input type="text" id="name" name="name" placeholder="Имя" required />
                <input type="email" id="email" name="email" placeholder="Е-маил" required />
                <input type="tel" id="phone" name="phone" placeholder="Номер телефона" />
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Расскажите, довольны ли вы нашими продуктами?"
                />
              </div>
              <div>
                <button type="submit" className="button-small">
                  Отправить
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
          <h3>Свяжитесь</h3>
          <form id="contactForm">
            <input type="text" id="name" name="name" placeholder="Имя" required />
            <input type="email" id="email" name="email" placeholder="Е-маил" required />
            <input type="tel" id="phone" name="phone" placeholder="Номер телефона" />
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Оставьте отзыв!"
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