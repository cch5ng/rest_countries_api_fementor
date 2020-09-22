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

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
            <Switch>
              <Route path="/:name"><CountryDetail /></Route>
              <Route path="/"><Home /></Route>
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
