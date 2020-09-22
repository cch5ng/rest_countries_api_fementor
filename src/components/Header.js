import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="row">
        <Link to="/"><h1>Where in the world?</h1></Link>
        <button>Dark Mode</button>
      </div>
    </header>
  )
}

export default Header;
