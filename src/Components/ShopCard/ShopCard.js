import React from "react";
import './ShopCard.css';

const ShopCard = ({ id, name, address, website }) => {
  return (
    <section className='individual-card'>
      <h3>{name}</h3>
      <p className='address'>{address}</p>
      <p className='website'>{website}</p>
    </section>
  );
}

export default ShopCard;