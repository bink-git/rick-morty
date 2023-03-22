import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <form className="search">
      <div className="search-icon"></div>
      <input
        className="search-input"
        type="text"
        placeholder="Filter by name..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
