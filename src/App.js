import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [countrySearchText, setCountrySearchText] = useState('');
  const [selectedFilterRegion, setSelectedFilterRegion] = useState('');

  return (
    <div className="App">
      <Router>
        <header>
          <div className="row">
            <Link to="/"><h1>Where in the world?</h1></Link>
            <button>Dark Mode</button>
          </div>
        </header>
        <main>
            <Switch>
              <Route path="/:name"><Detail /></Route>
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

function Detail() {
  let { name } = useParams();
  return (
    <div>TODO DETAIL ({name})</div>
  )
}

function Home() {
  return (
    <div>TODO HOME
      <div>
        <Link to="/test">Detail link</Link>
      </div>
    </div>
  )
}

export default App;
