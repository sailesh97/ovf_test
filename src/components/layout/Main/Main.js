import React from 'react';
import MainSub from './MainSub/MainSub';
const main = () => {
  return (
    <div className="bg-warning p-5 mb-1">

        <div className="mb-5 pb-5">
          <h1 className="float-left">Beverages</h1>
          <p className="float-right , lead,font-weight-bold">View all</p>
          <div className="float-none"></div>
  
        </div>

        <div style={{textAlign:'center'}}>
          <MainSub />
          <MainSub />
          <MainSub />
        </div>
       
    </div>
  )
}

export default main;