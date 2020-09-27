import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import {HiSearch} from "react-icons/hi";
import styles from './InputSearch.module.scss';


let cx = classNames.bind(styles);

const InputSearch = (props) => {
  const {placeholder, label, onChangeHandler, inputValue, darkMode} = props;

  let inputClassName = cx({
    light_background_primary: !darkMode,
    dark_background_primary: darkMode,
    light_typography_primary: !darkMode,
    dark_typography_primary: darkMode,
    light_typography_placeholder: !darkMode,
    dark_typography_placeholder: darkMode
  });

  let iconClassName = cx({
    light_icon: !darkMode,
    dark_icon: darkMode,
    icon: true
  })

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
