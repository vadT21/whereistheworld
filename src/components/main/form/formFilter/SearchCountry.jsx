import React from 'react';
import { SearchInput, SearchStyle } from './components';

const SearchCountry = ({search, setSearch}) => {

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <SearchStyle>
      <SearchInput onChange={changeHandler} value={search}/>
    </SearchStyle>
  );
};

export default SearchCountry;