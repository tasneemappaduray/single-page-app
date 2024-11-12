
import React from 'react';
import '../styles/Search.css';

const Search = ({ searchTerm, onSearchChange }) => (
  <div className='sub_header'>
        <span className="search-bar">
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="offer"
            />
    </span>
  </div>
);

export default Search;