import otzyvAva from '../../assets/images/otzyv ava.png';
import otzivava2 from '../../assets/images/david.png';

const CardList2 = () => {
    return (<div className="lenta-vert2">
            <div className="lenta2">
              <div className="otziv">
                <img src={otzyvAva} alt="avatar" />
                <div className="adam-vert2">
                  <h1>Сергей Калиндев</h1>
                  <p>
                    "Отличный питомник. Большой выбор саженцев как плодовых, так и декоративных культур. Нам очень подробно все объяснили, как правило но сажать. Цены в питомнике весьма демократичные, что очень нас с мужем порадовало! Спасибо Вам огромное!"
                  </p>
                </div>
              </div>
              <div className="otziv2">
                <img src={otzivava2} alt="avatar" />
                <div className="adam-vert2">
                  <h1>Давид Урумбаев</h1>
                  <p>
                    "Прекрасный питомник! Очень доволен их саженцами, прижилось всё! Покупали саженцы несколько раз, впервые 8 лет назад. Уже пробуем яблоки и груши с их саженцев, а мы ведь севернее на 300 км! Китайка Керр очень долго не плодоносила, с трудом приживалась, но место я выбрал неудачное, а потом боялся повредить пересадкой.
                    Так что рекомендую, очень ответственно в питомнике к саженцам относятся."
                  </p>
                </div>
              </div>
            </div>
            <div className="lentabuttons2">
              <span className="slider-arrow2" data-direction="left">
                👈
              </span>
              <span className="slider-arrow2" data-direction="right">
                👉
              </span>
            </div>
          </div>)
};

export default CardList2;
