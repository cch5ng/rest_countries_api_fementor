import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import {useDarkMode} from '../context/useDarkMode';

let cx = classNames.bind(styles);

const Footer = () => {
  const {isDarkModeOn} = useDarkMode();

  let footerClassName = cx({
    footer: true,
    light_background_primary: !isDarkModeOn,
    light_typography_primary: !isDarkModeOn,
    dark_background_primary: isDarkModeOn,
    dark_typography_primary: isDarkModeOn,
  });

  let linkClassName = cx({
    light_link_typography: !isDarkModeOn,
    dark_link_typography: isDarkModeOn
  })

  return (
    <footer className={footerClassName}>
      <div>Requirements for this project came from <a href="https://www.frontendmentor.io/" 
        target="_blank" rel="noopener noreferrer" className={linkClassName}>Frontend Mentor</a></div>
      <div>The <a href="https://github.com/cch5ng/rest_countries_api_fementor" 
        target="_blank" rel="noopener noreferrer" 
        className={linkClassName}>source for this project is available here.</a></div>
    </footer>
  )
}

export default Footer;