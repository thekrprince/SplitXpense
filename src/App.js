import { useEffect, useState } from 'react';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import icon from './images/split-icon.png';
import './App.css';

function App() {
  const darkTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(darkTheme || 'light');

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
  }, []);

  const darkThemeHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    // Setting data-theme attribute to update the background color
    const app = document.querySelector('.app');
    if (theme === 'light') {
      app.setAttribute('data-theme', 'dark');
    } else {
      app.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  return (
    <div className="app" data-theme={theme}>
      <Header theme={theme} darkThemeHandler={darkThemeHandler} />
      <div className="section">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
