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
    detailParagraph: true
  })

  let cardDetailContainerClassName = cx({
    card_detail_container: true,
    light_background_primary: !darkMode,
    light_typography_primary: !darkMode,
    dark_background_primary: darkMode,
    dark_typography_primary: darkMode
  })


  return (
    <div className={styles.country_card_container}>
      <Link to={url} className={linkClassName}>
        <div className={styles.img}><img alt="country flag" src={flag} /></div>
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
