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
import CountryDetail from './components/CountryDetail';
import Home from './components/Home';
import Header from './components/Header';

let cx = classNames.bind(styles);

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [countrySearchText, setCountrySearchText] = useState('');
  const [selectedFilterRegion, setSelectedFilterRegion] = useState('');
  const [countries, setCountries] = useState([]);

  let mainClassName = cx({
    light_background_secondary: !isDarkModeOn,
    light_typography_primary: !isDarkModeOn,
    dark_background_secondary: isDarkModeOn,
    dark_typography_primary: isDarkModeOn,
  });

  let footerClassName = cx({
    footer: true,
    light_background_primary: !isDarkModeOn,
    light_typography_primary: !isDarkModeOn,
    dark_background_primary: isDarkModeOn,
    dark_typography_primary: isDarkModeOn,
  });

  let linkClassName = cx({
    light_link_typography: !isDarkModeOn,
    dark_link_typography: isDarkModeOn
  })


  const styleButtonClickHandler = (ev) => {
    setIsDarkModeOn(!isDarkModeOn);
  }

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

  return (
    <div className={styles.App}>
      <Router>
        <Header buttonClickHandler={ev => styleButtonClickHandler(ev)}
          darkMode={isDarkModeOn} />
        <main className={mainClassName}>
            <Switch>
              <Route path="/:name"><CountryDetail darkMode={isDarkModeOn}
                countries={countries} /></Route>
              <Route path="/"><Home countrySearchText={countrySearchText} 
                searchInputChangeHandler={value => searchInputChangeHandler(value)}
                filterSelectHandler={ev => filterSelectHandler(ev)}
                countries={getFilteredCountries()} darkMode={isDarkModeOn} 
                curRegion={selectedFilterRegion} /></Route>
            </Switch>
        </main>
      </Router>
      <footer className={footerClassName}>
        <div>Requirements for this project came from <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer" className={linkClassName}>Frontend Mentor</a></div>
        <div>The <a href="https://github.com/cch5ng/rest_countries_api_fementor" target="_blank" rel="noopener noreferrer" className={linkClassName}>source for this project is available here.</a></div>
      </footer>
    </div>
  );
}

export default App;
