import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className="input">
      <SearchIcon />
      <input
        className="border-r-2 border-black border-opacity-20  px-2"
        type="text"
        placeholder="البحث عن ..."
      />
    </div>
  );
}

export default Search;
