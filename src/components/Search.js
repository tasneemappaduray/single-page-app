
import React from 'react';
import '../styles/Search.css';

const Search = ({ searchTerm, onSearchChange, showArchived, onShowArchivedChange }) => (
  <div className='sub_header'>
        <span className="search-bar">
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            />
        </span>
        <div className="show-archived">
            <label>
            <input
                type="checkbox"
                checked={showArchived}
                onChange={onShowArchivedChange}
            />
            Show Archived
            </label>
      </div>
  </div>
);

export default Search;