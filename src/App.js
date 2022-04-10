import { useEffect } from 'react';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import icon from './images/split-icon.png';
import './App.css';

function App() {
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="section">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
