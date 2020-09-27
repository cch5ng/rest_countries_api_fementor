import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {DarkModeProvider, useDarkMode} from './context/useDarkMode';

let cx = classNames.bind(styles);

function App() {
  //const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [countrySearchText, setCountrySearchText] = useState('');
  const [selectedFilterRegion, setSelectedFilterRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const {isDarkModeOn} = useDarkMode();

  // const styleButtonClickHandler = (ev) => {
  //   setIsDarkModeOn(!isDarkModeOn);
  // }

  const searchInputChangeHandler = (value) => {
    setCountrySearchText(value);
  }

  const filterSelectHandler = (ev) => {
    const {id} = ev.target;
    setSelectedFilterRegion(id);
  }

  const getFilteredCountries = () => {
    let filteredCountries = countries.slice(0);
    if (selectedFilterRegion.length) {
      filteredCountries = filteredCountries.filter(country =>
        country.region === selectedFilterRegion
      )
    }
    if (countrySearchText.length) {
      filteredCountries = filteredCountries.filter(country => {
        let name = country.name.toLowerCase();
        let searchStr = countrySearchText.toLowerCase();
        return name.indexOf(searchStr) > -1;
      })
    }
    return filteredCountries;
  }

  useEffect(() => {
    let url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        if (json.length) {
          setCountries(json);
        }
      })
      .catch(err => console.error('error', err))

  }, [])

/*
buttonClickHandler={ev => styleButtonClickHandler(ev)}
            darkMode={isDarkModeOn} 
darkMode={isDarkModeOn}
darkMode={isDarkModeOn} 
            */

  return (
    <div className={styles.App}>
      <DarkModeProvider>
        <Router>
          <Header/>
          <Main countries={countries} countrySearchText={countrySearchText} 
            searchInputChangeHandler={searchInputChangeHandler} 
            filterSelectHandler={filterSelectHandler}
            getFilteredCountries={getFilteredCountries} 
            selectedFilterRegion={selectedFilterRegion}
          />
        </Router>
        <Footer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
