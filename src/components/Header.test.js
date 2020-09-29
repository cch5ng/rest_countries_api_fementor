import React from 'react';
import {Router, useHistory} from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './Header';

test.skip('handles header button click', () => {
  const onClick = jest.fn();
  //let history = useHistory
  let darkMode = false;

  render(<Router><Header buttonClickHandler={onClick} /></Router>);
  fireEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
