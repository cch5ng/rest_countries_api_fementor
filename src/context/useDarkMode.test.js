import React from 'react';
import { render } from '@testing-library/react';
import jest from 'jest';
import {Header} from '../components/Header';
import {DarkModeProvider, useDarkMode} from './useDarkMode';

test.skip('clicking Dark Mode button calls handler', () => {
  const handleDarkModeBtnClick = jest.fn()
  //const DarkModeContext = useDarkMode();

  render(
    <DarkModeProvider>
      <Header />
    </DarkModeProvider>
  )

  fireEvent.click(screen.getByRole('button'));
  expect(handleDarkModeBtnClick).toHaveBeenCalledTimes(1);
});
