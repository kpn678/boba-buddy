import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
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
    } catch (e) {
      console.log(e);
      setError('Oops, something went wrong, please try again!');
    };
  };

  useEffect(() => {
    updateShops();
  }, []);

  return (
    <>
      {error ? <h2 className='error-message'>{error}</h2> : 
        <>
          <nav>
            <Link to={'/'} style={{textDecoration: 'none'}}>
              <h1>BOBA BUDDY</h1>
            </Link>
          </nav>
          <main>
            {shops.length === 0 && <h3>Page Loading...</h3>}
            <Switch>
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
                path='/shops/:region' render={( {match} ) => {
                  if (match.params.region === 'All') {
                    return <ShopsDisplay filteredShops={shops} region={match.params.region} error={error} />
                  } else {
                    const shopsToRender = shops.filter(shop => shop.region === match.params.region);
                    return <ShopsDisplay filteredShops={shopsToRender} region={match.params.region} error={error} />
                  }
                }}
              />
              <Route 
                render={() => 
                  <Redirect to={{pathname: "/"}} />
                } 
              />
            </Switch>
          </main>
        </>
      }
    </>
  );
}

export default App;
