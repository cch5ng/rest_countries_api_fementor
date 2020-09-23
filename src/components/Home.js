import React , {useState, useEffect} from 'react';
import InputSearch from './InputSearch';
import FilterControl from './FilterControl';
import CountryCard from './CountryCard';

const Home = (props) => {
  const {filterSelectHandler, countrySearchText, searchInputChangeHandler,
    countries} = props;

  return (
    <div>
      <h1>TODO HOME</h1>
      <InputSearch inputValue={countrySearchText} placeholder="Search for a country..."
        onChangeHandler={value => searchInputChangeHandler(value)}/>

      <FilterControl filterSelectHandler={ev => filterSelectHandler(ev)} />

      {countries.map(country => (
        <CountryCard country={country} key={country.name}/>
      ))}
    </div>
  )
}

export default Home;
