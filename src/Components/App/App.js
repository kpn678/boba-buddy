import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Link } from "react-router-dom";
import ShopsDisplay from "../ShopsDisplay/ShopsDisplay";

const App = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState('');

  const getShops = async () => {
    try {
      const response = await fetch('https://dnvr-boba-buddy-api.herokuapp.com/');
      const listOfShops = await response.json();
      setShops(listOfShops);
    } catch (error) {
      setError(
        "Sorry, we can't load this page right now."
      );
      console.log(error);
    }
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <>
      <nav>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <h1>BOBA BUDDY</h1>
        </Link>
      </nav>
      <main>
        <Route 
          exact path='/' render={() => (
            <section className='home'>
              <section className='about'>
                <p className='description'>Welcome to Boba Buddies!</p>
              </section>
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
            </section>
          )} 
        />
        <Route 
          exact path='/shops/:region' render={( {match} ) => {
            const shopsToRender = shops.filter(shop => shop.region === match.params.region);
            return <ShopsDisplay filteredShops={shopsToRender} />
          }}
        />
      </main>
    </>
  );
}

export default App;
