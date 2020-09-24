import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Button from './Button';

const CountryDetail = () => {
  let { name } = useParams();
  console.log('name', name)
  const [countryData, setCountryData] = useState({});

  const getPrettyString = (objAr) => {
    if (objAr && objAr.length) {
      console.log('objAr', objAr)
      let names = objAr.map(obj => obj.name);
      return names.join(', ');  
    }
    return;
  }

  useEffect(() => {
    let url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        if (json.length) {
          console.log('json[0]', json[0])
          setCountryData(json[0]);
        }
      })
      .catch(err => console.error('error', err));
  }, [name])

  return (
    <div>
      <div><img alt="flag" src={countryData.flag} /></div>
      <div>{name}</div>
      <div>
        <div>
          <div>Native Name: {countryData.nativeName}</div>
          <div>Population: {countryData.population}</div>
          <div>Region: {countryData.region}</div>
          <div>Sub Region: {countryData.subregion}</div>
          <div>Capital: {countryData.capital}</div>
        </div>

        <div>
          <div>Top Level Domain: {countryData.topLevelDomain}</div>
          <div>Currencies: {getPrettyString(countryData.currencies)}</div>
          <div>Languages: {getPrettyString(countryData.languages)}</div>
        </div>
      </div>
      <div>
        Border Countries: {countryData.borders}
      </div>

    
    </div>
  )
}

export default CountryDetail;
