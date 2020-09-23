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

  const styleButtonClickHandler = (ev) => {
    console.log('ev', ev)
  }

  const navButtonClickHandler = (ev) => {
    console.log('ev', ev)
  }

  const searchInputChangeHandler = (value) => {
    console.log('value', value)
    setCountrySearchText(value);
  }

  return (
    <div className="App">
      <Router>
        <Header buttonClickHandler={ev => styleButtonClickHandler(ev)}/>
        <main>
            <Switch>
              <Route path="/:name"><CountryDetail buttonClickHandler={ev => navButtonClickHandler(ev)} /></Route>
              <Route path="/"><Home countrySearchText={countrySearchText} 
                searchInputChangeHandler={value => searchInputChangeHandler(value)}/></Route>
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
