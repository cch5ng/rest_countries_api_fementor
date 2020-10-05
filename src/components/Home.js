import React , {useState, useEffect} from 'react';
import InputSearch from './InputSearch';
import FilterControl from './FilterControl';
import CountryCard from './CountryCard';
import styles from './Home.module.scss';

const Home = (props) => {
  const {filterSelectHandler, countrySearchText, searchInputChangeHandler,
    countries, curRegion} = props;

  return (
    <div>
      <InputSearch inputValue={countrySearchText} placeholder="Search for a country..."
        onChangeHandler={value => searchInputChangeHandler(value)} />

      <FilterControl filterSelectHandler={ev => filterSelectHandler(ev)} 
        curRegion={curRegion} />

      <div className={styles.countries_list_container}>
        {countries.map(country => (
          <CountryCard country={country} key={country.name} />
        ))}
      </div>
    </div>
  )
}

export default Home;
