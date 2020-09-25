import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './CountryCard.module.scss';

let cx = classNames.bind(styles);

const CountryCard = (props) => {
  const {darkMode} = props;
  const {flag, name, population, region, capital} = props.country;
  let url = `/${name}`;

  let linkClassName = cx({
    light_link_typography: !darkMode,
    dark_link_typography: darkMode,
    link: true
  });

  let paraClassName = cx({
    // light_link_typography: !darkMode,
    // dark_link_typography: darkMode
  })

  let cardDetailContainerClassName = cx({
    light_background_primary: !darkMode,
    light_typography_primary: !darkMode,
    dark_background_primary: darkMode,
    dark_typography_primary: darkMode
  })


  return (
    <div>
      <Link to={url} className={linkClassName}>
        <div><img alt="country flag" src={flag} /></div>
        <div className={cardDetailContainerClassName}>
          <div>{name}</div>
          <div>
            <p className={paraClassName}>Population: {population}</p>
            <p className={paraClassName}>Region: {region}</p>
            <p className={paraClassName}>Capital: {capital}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard;
