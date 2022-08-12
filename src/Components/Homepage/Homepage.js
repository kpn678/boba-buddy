import React from "react";
import PropTypes from 'prop-types';
import './Homepage.css';
import RegionChoices from '../RegionChoices/RegionChoices';

const Homepage = () => {
  return (
    <section className='home'>
      <section className='about'>
        <h3 className='tagline'>Welcome to Boba Buddy, your guide to boba and milk tea in the Denver Metro Area!</h3>
        <p className='description'> 
          Prior to 2017, there were only about five boba shops in the metro area, give or take. Now, there are almost
          70 shops in the area! Even with the abundance of shops, it can be hard to locate a shop and its information or
          find relevant results.<br></br>
          This guide is designed to be a comprehensive (or as close as possible to comprehensive) 
          list of all shops that have a storefront and feature boba or milk tea as a predominant part of their menu. 
          What are you waiting for, go get some boba or tea!
        </p>
      </section>
      <RegionChoices />
    </section>
  );
};

export default Homepage;