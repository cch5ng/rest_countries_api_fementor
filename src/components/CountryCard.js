import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import classNames from 'classnames/bind';
import LazyLoad from 'react-lazyload';
import styles from './CountryCard.module.scss';
import {useDarkMode} from '../context/useDarkMode';

let cx = classNames.bind(styles);

const CountryCard = (props) => {
  const {darkMode} = props;
  const {flag, name, population, region, capital} = props.country;
  let url = `/${name}`;
  const {isDarkModeOn} = useDarkMode();

  let linkClassName = cx({
    light_link_typography: !isDarkModeOn,
    dark_link_typography: isDarkModeOn,
    link: true
  });

  let paraClassName = cx({
    detailParagraph: true
  })

  let cardDetailContainerClassName = cx({
    card_detail_container: true,
    light_background_primary: !isDarkModeOn,
    light_typography_primary: !isDarkModeOn,
    dark_background_primary: isDarkModeOn,
    dark_typography_primary: isDarkModeOn
  })


  return (
    <div className={styles.country_card_container}>
      <Link to={url} className={linkClassName}>
        <div className={styles.img}>
          <LazyLoad offset={100} once>
            <img alt="country flag" src={flag} />
          </LazyLoad>
        </div>
        <div className={cardDetailContainerClassName}>
          <div className={styles.title}>{name}</div>
          <div className={styles.detail_text}>
            <p className={paraClassName}>
              <span className={styles.detail_heading}>Population:</span>
              <span className={styles.detail_description}> {population}</span>
            </p>
            <p className={paraClassName}>
              <span className={styles.detail_heading}>Region:</span>
              <span className={styles.detail_description}> {region}</span>
            </p>
            <p className={paraClassName}>
              <span className={styles.detail_heading}>Capital:</span>
              <span className={styles.detail_description}> {capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CountryCard;
