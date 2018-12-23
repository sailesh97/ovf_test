import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import one from '../../../assets/images/1.jpeg';
import two from "../../../assets/images/2.jpeg";
import three from "../../../assets/images/3.jpeg";
import classes from './Carousel.module.css';

class DemoCarousel extends Component {
    render() {
        return <Carousel>
            <div>
              <div className={classes.cdiv}>
                <h1 className={classes.offers}>SPECIAL OFFERS</h1>
                <img src={one} alt="one" />
              </div>

              <p className="legend">Legend 1</p>
            </div>
            <div>
              <h1 className={classes.offers}>SPECIAL OFFERS</h1>
              <img src={two} alt="two" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <h1 className={classes.offers}>SPECIAL OFFERS</h1>
                <img src={three} alt="three"/>
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>;
    }
};

export default DemoCarousel;