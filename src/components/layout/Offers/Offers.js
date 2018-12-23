import React from 'react';
import Offer from './Offer/Offer';
 const offers = () => {
  return (
    <div className="row p-5 m-1" style={{border:'2px solid green',borderRadius:'5px'}}>
      <Offer/>
        <Offer />
          <Offer />
    </div>
  )
}


export default offers;