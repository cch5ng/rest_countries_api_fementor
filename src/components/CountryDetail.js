import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from "react-router-dom";
import classNames from 'classnames/bind';
import Button from './Button';
import {useDarkMode} from '../context/useDarkMode';
import styles from './CountryDetail.module.scss';

let cx = classNames.bind(styles);

const CountryDetail = (props) => {
  let { name } = useParams();
  const {countries, darkMode} = props;
  const [borderCountries, setBorderCountries] = useState([]);
  let history = useHistory();
  const {isDarkModeOn} = useDarkMode();

  let detailSectionClassName = cx({
    row_top: true,
    body: true
  });


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
    <div className={styles.country_detail_container}>
      <Button label="Back"  id="btn_back" 
        buttonClickHandler={ev => handleBackButtonClick(ev)} />
      <div className={styles.row}>
        <div className={styles.img_container}><img alt="flag" src={country.flag} className={styles.img_detail}/></div>
        <div className={styles.content_container}>
          <div className={styles.subtitle}>{name}</div>
          <div className={detailSectionClassName}>
            <div className={styles.detail_section}>
              <div className={styles.detail_description}><span className={styles.heading}>Native Name:</span> {country.nativeName}</div>
              <div className={styles.detail_description}><span className={styles.heading}>Population:</span> {country.population}</div>
              <div className={styles.detail_description}><span className={styles.heading}>Region:</span> {country.region}</div>
              <div className={styles.detail_description}><span className={styles.heading}>Sub Region:</span> {country.subregion}</div>
              <div className={styles.detail_description}><span className={styles.heading}>Capital:</span> {country.capital}</div>
            </div>
            <div className={styles.detail_section}>
              <div className={styles.detail_description}><span className={styles.heading}>Top Level Domain:</span> {country.topLevelDomain}</div>
              <div className={styles.detail_description}><span className={styles.heading}>Currencies:</span> {getPrettyString(country.currencies)}</div>
              <div className={styles.detail_description}><span className={styles.heading}>Languages:</span> {getPrettyString(country.languages)}</div>
            </div>
          </div>
          <div className={styles.row_global}>
            <div className={styles.detail_important}>Border Countries: </div>
            <div className={styles.row_global}>
              {borderCountries.map(country => (
                <Button label={country.name} id={country.name} key={country.name} 
                  buttonClickHandler={ev => handleCountryNavButtonClick(ev)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail;
