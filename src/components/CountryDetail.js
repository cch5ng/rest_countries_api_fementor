import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from "react-router-dom";
import Button from './Button';
import {useDarkMode} from '../context/useDarkMode';

const CountryDetail = (props) => {
  let { name } = useParams();
  const {countries, darkMode} = props;
  const [borderCountries, setBorderCountries] = useState([]);
  let history = useHistory();
  const {isDarkModeOn} = useDarkMode();

  const handleBackButtonClick = (ev) => {
    history.goBack();
  }

  const handleCountryNavButtonClick = (ev) => {
    const name = ev.target.innerText;
    history.push(`/${name}`);
  }

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
      <Button label="Back"  id="btn_back" 
        buttonClickHandler={ev => handleBackButtonClick(ev)} />
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
        <div>Border Countries: </div>
        <div>
          {borderCountries.map(country => (
            <Button label={country.name} id={country.name} key={country.name} 
              buttonClickHandler={ev => handleCountryNavButtonClick(ev)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryDetail;
