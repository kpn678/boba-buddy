import React from "react";
import './RegionChoices.css';
import { Link } from "react-router-dom";

const RegionChoices = () => {
  return (
    <section className='regions'>
      <h2>Denver Metro Area Regions:</h2>
      <div className='region-choices'>
        <Link to='/shops/Northwest'>
          <button className='region-btn'>Northwest: Arvada - Broomfield - Westminster</button>
        </Link>
        <Link to='/shops/West'>
          <button className='region-btn'>West Denver - Lakewood</button>
        </Link>
        <Link to='/shops/Southwest'>
          <button className='region-btn'>Southwest Denver - Littleton</button>
        </Link>
        <Link to='/shops/North'>
          <button className='region-btn'>North: Northglenn - Thornton - Westminster</button>
        </Link>
        <Link to='/shops/Central'>
          <button className='region-btn'>Central and Downtown Denver</button>
        </Link>
        <Link to='/shops/East'>
          <button className='region-btn'>East Denver - Aurora</button>
        </Link>
        <Link to='/shops/Southeast'>
          <button className='region-btn'>DTC - Southeast Aurora</button>
        </Link>
        <Link to='/shops/All'>
          <button className='region-btn'>All Shops</button>
        </Link>
      </div>
    </section>
  );
}

export default RegionChoices;