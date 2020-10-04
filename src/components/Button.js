import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import {useDarkMode} from '../context/useDarkMode';

let cx = classNames.bind(styles);

const Button = (props) => {
  const {label, buttonClickHandler, buttonId} = props;
  const {isDarkModeOn} = useDarkMode();

  let btnClassName = cx({
    light_background_primary: !isDarkModeOn,
    dark_background_primary: isDarkModeOn,
    light_button_typography: !isDarkModeOn,
    dark_typography_primary: isDarkModeOn,
    light_typography_placeholder: !isDarkModeOn,
    dark_typography_placeholder: isDarkModeOn,
    btn_shadow_light: !isDarkModeOn,
    btn_shadow_dark: isDarkModeOn,
    btn: true
  });



  return (
    <div>
      <button id={buttonId} onClick={ev => buttonClickHandler(ev)}
        className={btnClassName}>{label}</button>
    </div>
  )
}

export default Button;
