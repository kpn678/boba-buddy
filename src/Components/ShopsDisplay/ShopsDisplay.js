import React from "react";
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
}

export default ShopsDisplay;