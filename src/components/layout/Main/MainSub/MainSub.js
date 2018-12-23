import React from 'react';
import one from '../../../../assets/images/10.jpg'
import classes from './MainSub.module.css';

const mainSub = () => {
  return <React.Fragment>
      <div className="bg-white p-3 mr-2" style={{ display: "inline-block", borderRadius: "5px" }}>
        <div className={classes.cdiv}>
          <p className={classes.offers}>50% off</p>
          <img src={one} alt="" />
        </div>

        <p style={{ textAlign: "center" }}>
          <strong className="mr-2 display-4">Rs.200</strong>
          <span
            style={{
              textDecoration: "line-through",
              fontStyle: "italic",
              fontSize: "30px"
            }}
          >
            300
          </span>
        </p>
      </div>
    </React.Fragment>;
}

export default mainSub;