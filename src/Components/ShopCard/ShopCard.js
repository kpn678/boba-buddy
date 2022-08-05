import React from "react";
import PropTypes from 'prop-types';
import './ShopCard.css';

const ShopCard = ({ id, name, address, yelp, facebook, instagram, website }) => {
  return (
    <section className='individual-card'>
      <h3>{name}</h3>
      <p className='address'>{address}</p>
      <div className='links-container'>
        <a className='yelp' href={yelp} target='_blank' rel='noopener'>Yelp</a>
        <a className='facebook' href={facebook} target='_blank' rel='noopener'>Facebook</a>
        <a className='instagram' href={instagram} target='_blank' rel='noopener'>Instagram</a>
        <a className='website' href={website} target='_blank' rel='noopener'>Website</a>
      </div>
    </section>
  );
};

export default ShopCard;

const { number, string } = PropTypes;

ShopCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  address: string.isRequired,
  yelp: string.isRequired,
  facebook: string,
  instagram: string,
  website: string
};