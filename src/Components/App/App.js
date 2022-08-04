import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Link } from "react-router-dom";
import ShopsDisplay from "../ShopsDisplay/ShopsDisplay";
import RegionChoices from "../RegionChoices/RegionChoices";

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
              <RegionChoices />
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
