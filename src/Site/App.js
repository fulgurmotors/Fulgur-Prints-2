import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './App.css';
import Header from '../components/Header/Header'
import Home from '../Site_Home/Home';
import Login from '../Site_Login/Login';
import PageProduit from '../Site_PageProduit/PageProduit';
import CreateAccount from '../Site_CreateAccount/CreateAccount'
import { onAuthStateChanged } from 'firebase/auth';
import AuthContext from './Auth';
import { auth } from './Firebase';
import PanierContext from '../components/Panier';
import Panier from '../Site_Panier/Panier';



function App() {
  const [user, setUser] = React.useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {  
      setUser(user)
    })

    const localCart = localStorage.getItem('panier');
    if (localCart) {
      setCart(JSON.parse(localCart));
    }

    return unsubscribe
  }, [])

  const [cart, setCart] = useState([])

  const updateCart = (newCart) => {
    localStorage.setItem('panier', JSON.stringify(newCart));
    setCart(newCart);
  }


  return (
    <Router>
      <AuthContext.Provider value={user}>
        <PanierContext.Provider value={{ cart, updateCart }}>

        <div className="App">
          <Routes>
            <Route exact path='/' element={
              <><Header /><Home /></>
            } />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/produit/:id' element={<><Header /><PageProduit /></>} />
            <Route exact path='/createaccount' element={<><Header /><CreateAccount /></>} />
            <Route exact path='/panier' element={<><Header /><Panier /></>} />
          </Routes>

        </div>
        </PanierContext.Provider>
      </AuthContext.Provider >
    </Router>

  );
}

export default App;
