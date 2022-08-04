import React from "react";
import PropTypes from 'prop-types';
import './ShopsDisplay.css';
import ShopCard from '../ShopCard/ShopCard';

const ShopsDisplay = ({ filteredShops, region, error }) => {
  const allCards = filteredShops.map(shop => {
    return <ShopCard
      key={shop.id}
      id={shop.id}
      name={shop.name}
      address={shop.address}
      website={shop.website}
    />
  });
  
  return (
    <>
      {error ? <h2 className='error-message'>{error}</h2> : 
        <section className='shops-container'>
          <h2>{region}</h2>
          {allCards}
        </section>
      }
    </>
  );
};

export default ShopsDisplay;

const { number, string, shape, arrayOf } = PropTypes;

const shop = shape({
  id: number.isRequired,
  name: string.isRequired,
  address: string.isRequired,
  website: string
}).isRequired;

ShopsDisplay.propTypes = {
  region: string.isRequired,
  error: string.isRequired,
  filteredShops: arrayOf(shop).isRequired
};