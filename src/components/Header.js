import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import classNames from 'classnames/bind';
import {HiOutlineMoon} from "react-icons/hi";
import Button from './Button';
import styles from './Header.module.scss';
import {useDarkMode} from '../context/useDarkMode';

let cx = classNames.bind(styles);

//ev => buttonClickHandler(ev)
const Header = (props) => {
  //const {buttonClickHandler, darkMode} = props;
  let {isDarkModeOn, handleDarkModeBtnClick} = useDarkMode();

  let headerClassName = cx({
    light_background_primary: !isDarkModeOn,
    light_typography_primary: !isDarkModeOn,
    header_box_shadow_light: !isDarkModeOn,
    dark_background_primary: isDarkModeOn,
    dark_typography_primary: isDarkModeOn,
    header_box_shadow_dark: isDarkModeOn
  });

  let linkClassName = cx({
    light_link_typography: !isDarkModeOn,
    dark_link_typography: isDarkModeOn,
    title: true,
    link: true
  });

  let styleBtnClassName = cx({
    style_btn: true
  });

  let styleBtnTextClassName = cx({
    style_btn_text: true
  });

  return (
    <header className={headerClassName}>
      <div className={styles.title}>
        <Link to="/" className={linkClassName}>Where in the world?</Link>
      </div>
      <div onClick={handleDarkModeBtnClick} id="btn_style" className={styleBtnClassName}
        role="button">
        <HiOutlineMoon /> 
        <div className={styleBtnTextClassName}>Dark Mode</div>
      </div>
      
    </header>
  )
}

export default Header;

/*
<Button label="Dark Mode" buttonClickHandler={ev => buttonClickHandler(ev)} 
        buttonId="btn_style"/>
*/
