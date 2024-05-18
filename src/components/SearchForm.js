import React from 'react';
import './Pixa.css';

const SearchForm = ({ query, onInputChange, onSearch }) => (
  <form onSubmit={onSearch} className="search-form">
    <input
      type="text"
      value={query}
      onChange={onInputChange}
      placeholder="Search for images..."
      className="search-input"
    />
    <button type="submit" className="search-button">Search</button>
  </form>
);

export default SearchForm;