import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import InputSearch from './InputSearch';

const Home = (props) => {
  const {countrySearchText, searchInputChangeHandler} = props;

  return (
    <div>
      <h1>TODO HOME</h1>
      <InputSearch inputValue={countrySearchText} placeholder="Search for a country..."
        onChangeHandler={value => searchInputChangeHandler(value)}/>
    </div>
  )
}

export default Home;
