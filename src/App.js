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

  return (
    <div className="App">
      <header>
        <h1>Where in the world?</h1>
        <button>Dark Mode</button>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/:name"><Detail /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </Router>

      </main>
      <footer>
        <h2>Set link to source and link to FEMentor site</h2>
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
