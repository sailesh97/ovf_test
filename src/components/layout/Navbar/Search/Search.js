import React from 'react'
import classes from './Search.module.css';

 const search = ()  => {
  return (
      <div className={classes.searchDiv}>
      <div className="row">
              <input className={classes.search} type="search" placeholder="Search" />
              <button className={classes.searchBtn} >
                  <i className="fa fa-search" />
              </button>
      </div>
         
      </div>
  )
}

export default search;