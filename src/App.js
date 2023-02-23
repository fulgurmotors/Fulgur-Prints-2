import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header'
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/checkout' element={
          <><Header /></>
          }/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
