import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import './App.css';

function App() {
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
