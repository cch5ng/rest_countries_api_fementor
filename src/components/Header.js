import React , {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import classNames from 'classnames/bind';
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

  return (
    <header className={headerClassName}>
      <div >
        <Link to="/" className={styles.title}>Where in the world?</Link>
      </div>
      <Button label="Dark Mode" buttonClickHandler={ev => buttonClickHandler(ev)} 
        buttonId="btn_style"/>
    </header>
  )
}

export default Header;
