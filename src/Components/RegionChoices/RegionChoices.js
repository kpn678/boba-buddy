import React from "react";
import './RegionChoices.css';
import { Link } from "react-router-dom";

const RegionChoices = () => {
  return (
    <section className='regions'>
      <h2>Denver Metro Area Regions:</h2>
      <div className='region-choices'>
        <Link to='/shops/Northwest'>
          <button>Northwest: Arvada - Broomfield - Westminster</button>
        </Link>
        <Link to='/shops/West'>
          <button>West Denver - Lakewood</button>
        </Link>
        <Link to='/shops/Southwest'>
          <button>Southwest Denver - Littleton</button>
        </Link>
        <Link to='/shops/North'>
          <button>North: Northglenn - Thornton - Westminster</button>
        </Link>
        <Link to='/shops/Central'>
          <button>Central and Downtown Denver</button>
        </Link>
        <Link to='/shops/East'>
          <button>East Denver - Aurora</button>
        </Link>
        <Link to='/shops/Southeast'>
          <button>DTC - Southeast Aurora</button>
        </Link>
        <Link to='/shops/all'>
          <button>All Shops</button>
        </Link>
      </div>
    </section>
  );
}

export default RegionChoices;