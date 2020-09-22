import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Home = () => {
  return (
    <div>TODO HOME
      <div>
        <Link to="/test">Detail link</Link>
      </div>
    </div>
  )
}

export default Home;
