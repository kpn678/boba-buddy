import React, { useEffect } from "react";
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
      yelp={shop.yelp}
      facebook={shop.facebook}
      instagram={shop.instagram}
      website={shop.website}
    />
  });
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {error ? <h2 className='error-message'>{error}</h2> : 
        <section className='region-page'>
          <h2 className='region-name'>{region}</h2>
          <section className='shops-container'>
            {allCards}
          </section>
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
  yelp: string,
  facebook: string,
  instagram: string,
  website: string
}).isRequired;

ShopsDisplay.propTypes = {
  region: string,
  error: string.isRequired,
  filteredShops: arrayOf(shop).isRequired
};