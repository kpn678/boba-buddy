import React from "react";
import './SearchBar.css';

const SearchBar = ({ handleSearch, searchValue }) => {
  return (
    <form action='/'>
      <label htmlFor='search'>
        <input 
          className='shops-search-bar' 
          name='search' 
          type='text' 
          value={searchValue}
          placeholder='Search by shop name'
          onChange={event => handleSearch(event)}
          onKeyPress={(event) => {event.key === 'Enter' && event.preventDefault()}}
        />
      </label>
    </form>
  );
};

export default SearchBar;