import React, {useState, useEffect} from 'react';

const CountryCard = (props) => {
  const {flag, name, population, region, capital} = props.card;

  return (
    <div>
      <div><img alt="country flag" src={card.flag} /></div>
      <div>
        <div>{name}</div>
        <div>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard;