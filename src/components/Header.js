import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Button from './Button';

const Header = (props) => {
  const {buttonClickHandler} = props;
  return (
    <header>
      <div className="row">
        <Link to="/"><h1>Where in the world?</h1></Link>
        <Button label="Dark Mode" buttonClickHandler={ev => buttonClickHandler(ev)} 
          buttonId="btn_style"/>
      </div>
    </header>
  )
}

export default Header;
