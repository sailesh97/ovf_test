import React from 'react';
import classes from "./Logo.module.css";
import ovf from '../../../../assets/images/logo.png';
const logo = () => {
  return (
    <React.Fragment>
 
        <img src={ovf} className={classes.logo} alt="Ovf-logo" />
        <a href="/" className="navbar-brand  mr-5 mt-1 col">
          O V F
        </a>
   
     
    </React.Fragment>
  )
}

export default logo;