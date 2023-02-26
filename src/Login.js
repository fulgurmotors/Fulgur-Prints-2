import React from 'react'
import logo from './Images/Fulgur_prints.png'
import './Login.css'
import LockIcon from '@material-ui/icons/LockOutlined'
import MailIcon from '@material-ui/icons/MailOutline'

function Login(){
    return(
        <div className='login'>                
            <img className='login__logo' alt='logo' src={logo}/>
            <div className='login__container'>
                <h1>Connexion</h1>
                <hr className='login__horizontalBar'/>
                <div className='login__containerBox'>
                    <div className="login__inputBox">
                        <MailIcon className='login__optionIcon'/>
                        <input type='email' required/>
                        <label>E-mail</label>
                    </div>
                    <div className="login__inputBox">
                        <LockIcon className='login__optionIcon'/>
                        <input type='password' required/>
                        <label>Mot de Passe</label>
                    </div>
                    <button type='submit' className='login__signInButton'>Se connecter</button>
                </div>
            </div>
        </div>
    )
}


export default Login