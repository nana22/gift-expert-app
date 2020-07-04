import React from 'react';
import './GiftItem.css';  
import PropTypes from 'prop-types';

export const GiftItem = ({id,url,title}) => {
  return (
    <div className="card" key={id}>
    <img className="animate__animated" src={url} alt="Avatar" />
    <div className="container">
      <h4 className='animate__animated animate__bounce'><b>{title}</b></h4>
      
    </div>
  </div>
  )
}

GiftItem.propTypes = {
  id: PropTypes.number.isRequired
}