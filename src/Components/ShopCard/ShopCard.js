import React from "react";
import PropTypes from 'prop-types';
import './ShopCard.css';

const ShopCard = ({ id, name, address, website }) => {
  return (
    <section className='individual-card'>
      <h3>{name}</h3>
      <p className='address'>{address}</p>
      <p className='website'>{website}</p>
    </section>
  );
};

export default ShopCard;

const { number, string } = PropTypes;

ShopCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  address: string.isRequired,
  website: string
};