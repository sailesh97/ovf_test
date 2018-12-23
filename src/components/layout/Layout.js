import React from 'react';
import Navbar from './Navbar/Navbar';
import Subnav from './Subnav/Subnav';
import DemoCarousel from "./Carousel/Carousel";
import Main from './Main/Main';
import Main2 from "./Main/Main2";
import Offers from './Offers/Offers';

const layout = () => {
  return <React.Fragment>
      <Navbar />
      <Subnav />
      <DemoCarousel />
      <Main/>
      <Main2 />  
      <Main/>
      <Offers/>
    </React.Fragment>;
}


export default layout;