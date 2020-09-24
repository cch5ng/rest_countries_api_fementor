import React , {useState, useEffect} from 'react';
import InputSearch from './InputSearch';
import FilterControl from './FilterControl';
import CountryCard from './CountryCard';

const Home = (props) => {
  const {filterSelectHandler, countrySearchText, searchInputChangeHandler,
    countries, darkMode} = props;

  return (
    <div>
      <InputSearch inputValue={countrySearchText} placeholder="Search for a country..."
        onChangeHandler={value => searchInputChangeHandler(value)} darkMode={darkMode} />

      <FilterControl filterSelectHandler={ev => filterSelectHandler(ev)} 
        darkMode={darkMode}/>

      {countries.map(country => (
        <CountryCard country={country} key={country.name} darkMode={darkMode} />
      ))}
    </div>
  )
}

export default Home;
