import React , {useState, useEffect} from 'react';
import InputSearch from './InputSearch';
import FilterControl from './FilterControl';
import CountryCard from './CountryCard';
import styles from './Home.module.scss';

const Home = (props) => {
  const {filterSelectHandler, countrySearchText, searchInputChangeHandler,
    countries, darkMode, curRegion} = props;

  return (
    <div>
      <InputSearch inputValue={countrySearchText} placeholder="Search for a country..."
        onChangeHandler={value => searchInputChangeHandler(value)} darkMode={darkMode} />

      <FilterControl filterSelectHandler={ev => filterSelectHandler(ev)} 
        darkMode={darkMode} curRegion={curRegion} />

      <div className={styles.countries_list_container}>
        {countries.map(country => (
          <CountryCard country={country} key={country.name} darkMode={darkMode} />
        ))}
      </div>
    </div>
  )
}

export default Home;
