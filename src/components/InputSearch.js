import React, {useState, useEffect} from 'react';

const InputSearch = (props) => {
  const {placeholder, label, onChangeHandler} = props;
  return (
    <div>
      <input type="text" onChange={ev => onChangeHandler(ev.target.value)} 
        placeholder={placeholder} />
    </div>
  )
}

export default InputSearch;
