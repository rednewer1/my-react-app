import otzyvAva from '../../assets/images/otzyv ava.png';

const CardList2 = () => {
    return (<div className="lenta-vert2">
            <div className="lenta2">
              <div className="otziv">
                <img src={otzyvAva} alt="avatar" />
                <div className="adam-vert2">
                  <h1>Adam Smith</h1>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed
                    euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh
                    suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh
                    suspendisse mauris amet, facilisi.”
                  </p>
                </div>
              </div>
              <div className="otziv2">
                <img src={otzyvAva} alt="avatar" />
                <div className="adam-vert2">
                  <h1>Jane Doe</h1>
                  <p>
                    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam.”
                  </p>
                </div>
              </div>
            </div>
            <div className="lentabuttons2">
              <span className="slider-arrow2" data-direction="left">
                
              </span>
              <span className="slider-arrow2" data-direction="right">
                
              </span>
            </div>
          </div>)
};

export default CardList2;
