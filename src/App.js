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
import CountryDetail from './components/CountryDetail';
import Home from './components/Home';
import Alert from './components/Alert';
import {DarkModeProvider, useDarkMode} from './context/useDarkMode';

let cx = classNames.bind(styles);

function App() {
  const [countrySearchText, setCountrySearchText] = useState('');
  const [selectedFilterRegion, setSelectedFilterRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [alert, setAlert] = useState({status: 500, type: 'error', message: 'There was an error getting countries data. Please try again.'}); //{}
  const {isDarkModeOn} = useDarkMode();

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

  //clears the alert, hides the component
  const alertClickHandler = () => {
    setAlert({});
  }

  const loadFromApi = async (mounted) => {
    let url = `https://restcountries.eu/rest/v2/all`;
    const response = await fetch(url)
    console.log('response', response)
    if (response.ok) {
      let json = await response.json();
      setCountries(json);
      //setAlert({});
    } else {
      if (response.status.toString().startsWith('5')) {
        setAlert({
          status: response.status,
          type: 'error',
          message: 'There was an error getting countries. Please try again in a few moments.'
        })
      } else {
        console.error(`Error status code ${response.status}. The countries request failed.`);
      }
    }
  }

  useEffect(() => {
    loadFromApi();
  }, [])

  return (
    <div className={styles.App}>
      <DarkModeProvider>
        <Router>
          <Header/>
          {Object.keys(alert).length > 0 && (
            <Alert message={alert.message} type={alert.type} onClickHandler={alertClickHandler} />
          )}
          <Main 
            countries={countries} countrySearchText={countrySearchText} 
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
