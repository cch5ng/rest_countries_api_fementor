import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import CountryDetail from './components/CountryDetail';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [countrySearchText, setCountrySearchText] = useState('');
  const [selectedFilterRegion, setSelectedFilterRegion] = useState('');
  const [countries, setCountries] = useState([]);

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
    <div className="App">
      <Router>
        <Header buttonClickHandler={ev => styleButtonClickHandler(ev)}
          darkMode={isDarkModeOn} />
        <main>
            <Switch>
              <Route path="/:name"><CountryDetail darkMode={isDarkModeOn}
                countries={countries} /></Route>
              <Route path="/"><Home countrySearchText={countrySearchText} 
                searchInputChangeHandler={value => searchInputChangeHandler(value)}
                filterSelectHandler={ev => filterSelectHandler(ev)}
                countries={getFilteredCountries()} darkMode={isDarkModeOn} /></Route>
            </Switch>
        </main>
      </Router>
      <footer>
        <h2>FOOTER: Set link to source and link to FEMentor site</h2>
      </footer>
    </div>
  );
}

export default App;
