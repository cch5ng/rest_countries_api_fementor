import React, { useState } from 'react';

const DarkModeContext = React.createContext([{}, () => {}]);
function DarkModeProvider({children}) {
  const [isDarkModeOn, setIsDarkModeOn] = React.useState(false);
  
  const handleDarkModeBtnClick = (ev) => {
    setIsDarkModeOn(!isDarkModeOn);
  }

  let darkModeState = {isDarkModeOn, handleDarkModeBtnClick}

  /**
   * Provider component is the place where you'd pass a prop called value to, 
   * which you can subsequently consume within the Consumer component
   */
  return (
    <DarkModeContext.Provider value={darkModeState}>
        {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = React.useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error(`useDarkMode must be used within a darkModeProvider`)
  }
  return context;
}

export {DarkModeProvider, useDarkMode};