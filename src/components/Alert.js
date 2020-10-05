import React from 'react';
import classNames from 'classnames/bind';
import styles from './Alert.module.scss';
import {useDarkMode} from '../context/useDarkMode';

let cx = classNames.bind(styles);

const Alert = (props) => {
  const {type, message, onClickHandler} = props;
  const {isDarkModeOn} = useDarkMode();
  const isAlertError = type === 'error';

  let alertClassName = cx({
    alert_error: isAlertError,
    alert_success: !isAlertError,
    alert: true
  });

  let titleClassName = cx({
    alert_title_error: isAlertError,
    alert_title_success: !isAlertError,
    title: true
  });

  let messageClassName = cx({
    alert_message_error: isAlertError,
    alert_message_success: !isAlertError
  });

  return (
    <div className={alertClassName} onClick={onClickHandler}>
      {type === 'error' && (
        <p className={titleClassName}>Error</p>
      )}
      {type !== 'error' && (
        <p className={titleClassName}>Sucess</p>
      )}
      <p className={messageClassName}>{message}</p>
    </div>
  )
}

export default Alert;
