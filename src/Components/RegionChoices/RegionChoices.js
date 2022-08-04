import './RegionChoices.css';
import React from "react";
import { Link } from "react-router-dom";

const RegionChoices = () => {
  return (
    <section className='regions'>
      <h2>Denver Metro Area Regions:</h2>
      <div className='region-choices'>
        <Link to='/shops/Northwest'>
          <button>Northwest: Arvada-Broomfield-Westminster</button>
        </Link>
        <Link to='/shops/West'>
          <button>West: Lakewood-Edgewater</button>
        </Link>
        <Link to='/shops/Southwest'>
          <button>Southwest: Littleton</button>
        </Link>
        <Link to='/shops/North'>
          <button>North: Northglenn-Thornton-Westminster</button>
        </Link>
        <Link to='/shops/Downtown'>
          <button>Downtown</button>
        </Link>
        <Link to='/shops/Central-Park'>
          <button>Central Park-Northfield</button>
        </Link>
        <Link to='/shops/East'>
          <button>East Denver-Aurora</button>
        </Link>
        <Link to='/shops/DTC'>
          <button>DTC-Southeast Aurora</button>
        </Link>
      </div>
    </section>
  );
}

export default RegionChoices;