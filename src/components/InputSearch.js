import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './InputSearch.module.scss';

let cx = classNames.bind(styles);

const InputSearch = (props) => {
  const {placeholder, label, onChangeHandler, inputValue, darkMode} = props;

  let inputClassName = cx({
    light_background_primary: !darkMode,
    dark_background_primary: darkMode,
    light_typography_primary: !darkMode,
    dark_typography_primary: darkMode
  });

  return (
    <div className={styles.input_container}>
      <input type="text" onChange={ev => onChangeHandler(ev.target.value)} 
        placeholder={placeholder} className={inputClassName} />
    </div>
  )
}

export default InputSearch;
