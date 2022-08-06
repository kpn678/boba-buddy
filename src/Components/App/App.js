import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
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
            {shops.length === 0 ? <h2 className='loading-message'>Page Loading...</h2> : 
              <Switch>
                <Route 
                  exact path='/' render={() => (
                    <section className='home'>
                      <section className='about'>
                        <h3 className='tagline'>Welcome to Boba Buddy, your guide to boba and milk tea in the Denver Metro Area!</h3>
                        <p className='description'> 
                          Prior to 2017, there were only about five boba shops in the metro area, give or take. Now, there are well over
                          60 shops in the area! Even with the abundance of shops, it can be hard to locate a shop and its information or
                          find relevant results. This guide is designed to be a comprehensive (or as close as possible to comprehensive) 
                          list of all shops that have a storefront and feature boba or milk tea as a predominant part of their menu. 
                          What are you waiting for, go get some boba or tea!
                        </p>
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
            }
          </main>
        </>
      }
    </>
  );
};

export default App;
