import React from "react";
import './ShopsDisplay.css';
import ShopCard from '../ShopCard/ShopCard';

const ShopsDisplay = ({ filteredShops, region }) => {
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
    <section className='shops-container'>
      <h2>{region}</h2>
      {allCards}
    </section>
  );
}

export default ShopsDisplay;