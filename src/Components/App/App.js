import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Homepage from '../Homepage/Homepage';
import ShopsDisplay from '../ShopsDisplay/ShopsDisplay';
import SearchBar from '../SearchBar/SearchBar';
import { getShops } from '../../apiCalls';

const App = (props) => {
  const path = props.location.pathname;
  const [shops, setShops] = useState([]);
  const [error, setError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchedShops, setSearchedShops] = useState([]);

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

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    setSearchedShops(shops.filter(shop => shop.name.toUpperCase().includes(event.target.value.toUpperCase())));
  };

 const resetSearch = () => {
    setSearchValue('');
 };

  return (
    <>
      {error ? <h2 className='error-message'>{error}</h2> : 
        <>
          <nav>
            <Link to={'/'} style={{textDecoration: 'none'}}>
              <h1 onClick={() => resetSearch()}>BOBA BUDDY</h1>
            </Link>
            {path === '/' && <SearchBar handleSearch={handleSearch} searchValue={searchValue} />}
          </nav>
          <main>
            {shops.length === 0 ? <h2 className='loading-message'>🧋Page Loading🧋</h2> : 
              <Switch>
                <Route 
                  exact path='/' render={() => {
                    if (searchedShops.length !== 0 && searchValue !== '') {
                      return <ShopsDisplay filteredShops={searchedShops} error={error} />
                    } else if (searchedShops.length === 0 && searchValue !== '') {
                      return <h2 className='search-message'>No shops match your search!</h2>
                    } else {
                      return (
                        <Homepage />
                      );
                    };
                  }} 
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

export default withRouter(App);

const { string } = PropTypes;

App.propTypes = {
  path: string
};