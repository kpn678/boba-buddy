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
              <section className='region-choices'>
                <button className='1'>1</button>
                <button className='2'>2</button>
                <button className='3'>3</button>
                <button className='4'>4</button>
                <button className='5'>5</button>
                <button className='6'>6</button>
                <button className='7'>7</button>
                <button className='8'>8</button>
              </section>
            </section>
          )} 
        />
        <Route 
          exact path='/:region' render={({ match }) => {
            <ShopsDisplay regionName={match.params.region} />
          }}
        />
      </main>
    </>
  );
}

export default App;
