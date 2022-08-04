import React from "react";
import './ShopsDisplay.css';
import ShopCard from '../ShopCard/ShopCard';

const ShopsDisplay = ({ filteredShops }) => {
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
      {allCards}
    </section>
  );
}

export default ShopsDisplay;