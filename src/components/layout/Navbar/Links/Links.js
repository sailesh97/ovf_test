import React from 'react';
import classes from './Links.module.css';

const links = () => {
  return (
      <div className="row w-50 mt-1">
          <div className="col-3">
              <a href="/" className={classes.links}>
                  LogIn<i class=" fas fa-sign-in-alt" />
              </a>
          </div>

          <div className="col-sm-2">
              <a href="/" className={classes.links}>More</a>
          </div>

          <div className="col-sm-2">
              <a href="/" className={classes.links}>Cart</a>
          </div>
          <div className="col-sm-3">
              <a href="/" className={classes.links}>Contact Us</a>
          </div>
      </div>
  )
}

export default links;