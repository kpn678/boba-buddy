import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import ShopsDisplay from '../ShopsDisplay/ShopsDisplay';
import RegionChoices from '../RegionChoices/RegionChoices';
import { getShops } from '../../apiCalls';

const App = () => {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState('');

  const updateShops = async () => {
    try {
      const listOfShops = await getShops();
      setShops(listOfShops);
    } catch (error) {
      console.log(error);
      setError('error');
    };
  };

  useEffect(() => {
    updateShops();
  }, []);

  return (
    <>
      <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}>
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
            if (match.params.region === 'All') {
              return <ShopsDisplay filteredShops={shops} region={match.params.region} />
            } else {
              const shopsToRender = shops.filter(shop => shop.region === match.params.region);
              return <ShopsDisplay filteredShops={shopsToRender} region={match.params.region} />
            }
          }}
        />
      </main>
    </>
  );
}

export default App;
