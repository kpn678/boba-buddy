import React from "react";
import PropTypes from 'prop-types';
import yelpIcon from '../../images/yelp.png'
import facebookIcon from '../../images/facebook.png'
import instagramIcon from '../../images/instagram.png'
import websiteIcon from '../../images/http.png'
import './ShopCard.css';

const ShopCard = ({ id, name, address, yelp, facebook, instagram, website }) => {
  return (
    <section className='individual-card'>
      <h3>{name}</h3>
      <p className='address'>{address}</p>
      <div className='links-container'>
        {yelp && <a className='yelp' href={yelp} target='_blank' rel='noopener'>
          <img border='0' src={yelpIcon} alt='yelp-icon' width='50' height='50'></img>
        </a>}
        {facebook && <a className='facebook' href={facebook} target='_blank' rel='noopener'>
          <img border='0' src={facebookIcon} alt='facebook-icon' width='50' height='50'></img>
        </a>}
        {instagram && <a className='instagram' href={instagram} target='_blank' rel='noopener'>
          <img border='0' src={instagramIcon} alt='instagram-icon' width='50' height='50'></img>
        </a>}
        {website && <a className='website' href={website} target='_blank' rel='noopener'>
          <img border='0' src={websiteIcon} alt='website-icon' width='50' height='50'></img>
        </a>}
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