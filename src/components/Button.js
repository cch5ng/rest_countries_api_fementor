import React from 'react';

const Button = (props) => {
  const {label, buttonClickHandler, buttonId} = props;

  return (
    <div>
      <button id={buttonId} onClick={ev => buttonClickHandler(ev)}>{label}</button>
    </div>
  )
}

export default Button;
