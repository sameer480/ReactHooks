import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './theme-context';
import Header from './Header';

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: theme === 'light' ? '#fff' : '#222',
        color: theme === 'light' ? '#000' : '#eee'
      }}
    >
      <Header />
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
