import React from 'react';
import {Switch, Route} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import {useDarkMode} from '../context/useDarkMode';
import CountryDetail from './CountryDetail';
import Home from './Home';

let cx = classNames.bind(styles);

const Main = (props) => {
  const {countries, countrySearchText, searchInputChangeHandler, filterSelectHandler,
    getFilteredCountries, selectedFilterRegion} = props;
  const {isDarkModeOn} = useDarkMode();

  let mainClassName = cx({
    main: true,
    light_background_secondary: !isDarkModeOn,
    light_typography_primary: !isDarkModeOn,
    dark_background_secondary: isDarkModeOn,
    dark_typography_primary: isDarkModeOn,
  });

  return (
  <main className={mainClassName}>
    <Switch>
      <Route path="/:name">
        <CountryDetail countries={countries} />
      </Route>
      <Route path="/">
        <Home countrySearchText={countrySearchText} 
          searchInputChangeHandler={value => searchInputChangeHandler(value)}
          filterSelectHandler={ev => filterSelectHandler(ev)}
          countries={getFilteredCountries()}
          curRegion={selectedFilterRegion} />
      </Route>
    </Switch>
  </main>

  )
}

export default Main;