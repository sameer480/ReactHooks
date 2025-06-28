import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

function Header() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
    color: theme === 'light' ? '#333' : '#f5f5f5'
  };

  return (
    <header style={styles}>
      <h1>Welcome to Themed App</h1>
    </header>
  );
}

export default Header;
