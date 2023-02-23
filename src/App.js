import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;
