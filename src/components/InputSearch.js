import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import {HiSearch} from "react-icons/hi";
import styles from './InputSearch.module.scss';
import {useDarkMode} from '../context/useDarkMode';

let cx = classNames.bind(styles);

//, darkMode
const InputSearch = (props) => {
  const {placeholder, label, onChangeHandler, inputValue} = props;
  const {isDarkModeOn} = useDarkMode();

  let inputClassName = cx({
    light_background_primary: !isDarkModeOn,
    dark_background_primary: isDarkModeOn,
    light_typography_primary: !isDarkModeOn,
    dark_typography_primary: isDarkModeOn,
    light_typography_placeholder: !isDarkModeOn,
    dark_typography_placeholder: isDarkModeOn
  });

  let iconClassName = cx({
    light_icon: !isDarkModeOn,
    dark_icon: isDarkModeOn,
    icon: true
  });

  return (
    <div className={styles.input_container}>
      <div className={iconClassName}>
        <HiSearch />
      </div>
      <input type="text" onChange={ev => onChangeHandler(ev.target.value)} 
        placeholder={placeholder} className={inputClassName} />
    </div>
  )
}

export default InputSearch;
