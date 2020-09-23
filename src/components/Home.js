import React , {useState, useEffect} from 'react';
import InputSearch from './InputSearch';
import FilterControl from './FilterControl';

const Home = (props) => {
  const {filterSelectHandler, countrySearchText, searchInputChangeHandler} = props;

  return (
    <div>
      <h1>TODO HOME</h1>
      <InputSearch inputValue={countrySearchText} placeholder="Search for a country..."
        onChangeHandler={value => searchInputChangeHandler(value)}/>

      <FilterControl filterSelectHandler={ev => filterSelectHandler(ev)} />
    </div>
  )
}

export default Home;
