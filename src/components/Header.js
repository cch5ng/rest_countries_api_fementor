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

let cx = classNames.bind(styles);

const Header = (props) => {
  const {buttonClickHandler, darkMode} = props;

  let headerClassName = cx({
    light_background_primary: !darkMode,
    light_typography_primary: !darkMode,
    dark_background_primary: darkMode,
    dark_typography_primary: darkMode
  });

  let linkClassName = cx({
    light_link_typography: !darkMode,
    dark_link_typography: darkMode,
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
      <div >
        <Link to="/" className={linkClassName}>Where in the world?</Link>
      </div>
      <div onClick={ev => buttonClickHandler(ev)} id="btn_style" className={styleBtnClassName}>
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
