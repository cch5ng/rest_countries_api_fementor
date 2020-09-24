import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const CountryCard = (props) => {
  const {flag, name, population, region, capital} = props.country;
  let url = `/${name}`;

  return (
    <div>
      <Link to={url}>
        <div><img alt="country flag" src={flag} /></div>
        <div>
          <div>{name}</div>
          <div>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard;
