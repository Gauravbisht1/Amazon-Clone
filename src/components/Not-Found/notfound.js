import React from 'react';
import './notfound.css';
import image from './image.jpg';
function Notfound() {
  return (
    <div className='Notfound'>
      <h1>No Product Found</h1>
      <img src={image} alt='' />
    </div>
  );
}

export default Notfound;
