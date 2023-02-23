import React from 'react'
import logo from './Images/Fulgur_prints.png'
import './Login.css'

function Login(){
    return(
        <div className='login'>                
            <img className='login__logo' alt='logo' src={logo}/>
            
            <div className='login__container'>
                <h1>Connexion</h1>
                <hr className='login__verticalBar'/>
                <h2>E-mail</h2>
                <input type='email'/>
                <h2>Mot de Passe</h2>
                <input type='password'/>
                <button type='submit' className='login__signInButton'>Se connecter</button>
            </div>
        </div>
    )
}


export default Login