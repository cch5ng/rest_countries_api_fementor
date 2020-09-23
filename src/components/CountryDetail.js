import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Button from './Button';

const CountryDetail = () => {
  let { name } = useParams();
  const [countryData, setCountryData] = useState({});

  return (
    <div>TODO DETAIL ({name})</div>
  )
}

export default CountryDetail;
