import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Button from './Button';

const CountryDetail = (props) => {
  let { name } = useParams();
  const {countries} = props;
  const [borderCountries, setBorderCountries] = useState([]);

  const getPrettyString = (objAr) => {
    if (objAr && objAr.length) {
      let names = objAr.map(obj => obj.name);
      return names.join(', ');  
    }
    return;
  }

  const getQuerySuffix = (countriesAr) => {
    if (countriesAr && countriesAr.length) {
      return countriesAr.join(';');  
    }
    return '';
  }

  const getCountriesDict = (countries) => {
    let dict = countries.reduce((accum, cur) => {
      let name = cur.name;
      accum[name] = cur;
      return accum;
    }, {});
    return dict;
  }

  const getCurrentCountry = (countriesDict, name) => {
    return countriesDict[name];
  }

  let countriesDict = getCountriesDict(countries);
  console.log('countriesDict', countriesDict)
  let country = getCurrentCountry(countriesDict, name);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha?codes=`;
    let suffix = getQuerySuffix(country.borders);

    if (suffix.length) {
      fetch(`${url}${suffix}`)
        .then(resp => resp.json())
        .then(json => {
          if (json.length) {
            setBorderCountries(json);
          }
        })
        .catch(err => console.error('error', err));
    }
  }, [country])

  return (
    <div>
      <div><img alt="flag" src={country.flag} /></div>
      <div>{name}</div>
      <div>
        <div>
          <div>Native Name: {country.nativeName}</div>
          <div>Population: {country.population}</div>
          <div>Region: {country.region}</div>
          <div>Sub Region: {country.subregion}</div>
          <div>Capital: {country.capital}</div>
        </div>

        <div>
          <div>Top Level Domain: {country.topLevelDomain}</div>
          <div>Currencies: {getPrettyString(country.currencies)}</div>
          <div>Languages: {getPrettyString(country.languages)}</div>
        </div>
      </div>
      <div>
        Border Countries: {country.borders}
      </div>

    
    </div>
  )
}

export default CountryDetail;
