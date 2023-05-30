import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from '../components/Header/Header'
import Home from '../Site_Home/Home';
import Login from '../Site_Login/Login';
import PageProduit from '../Site_PageProduit/PageProduit';
import CreateAccount from '../Site_CreateAccount/CreateAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
          <><Header /><Home/></>
          }/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/produit/:id' element={<><Header /><PageProduit/></>}/>
          <Route exact path='/createaccount' element={<><Header /><CreateAccount/></>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
