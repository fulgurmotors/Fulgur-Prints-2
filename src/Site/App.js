import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'
import './App.css';
import Header from '../components/Header/Header'
import Home from '../Site_Home/Home';
import Login from '../Site_Login/Login';
import PageProduit from '../Site_PageProduit/PageProduit';
import CreateAccount from '../Site_CreateAccount/CreateAccount'
import { onAuthStateChanged } from 'firebase/auth';
import AuthContext from './Auth';
import { auth } from './Firebase';



function App() {
  const [user, setUser] = React.useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {  
      setUser(user)
    })
    return unsubscribe
  }, [])


  return (
    <Router>
      <AuthContext.Provider value={user}>

        <div className="App">
          <Routes>
            <Route exact path='/' element={
              <><Header /><Home /></>
            } />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/produit/:id' element={<><Header /><PageProduit /></>} />
            <Route exact path='/createaccount' element={<><Header /><CreateAccount /></>} />
          </Routes>

        </div>
      </AuthContext.Provider >
    </Router>

  );
}

export default App;
