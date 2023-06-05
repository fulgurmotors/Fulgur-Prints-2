import React from 'react'
import logo from '../components/Images/Logo/logoPrint.png'
import './Login.css'
import LockIcon from '@material-ui/icons/LockOutlined'
import MailIcon from '@material-ui/icons/MailOutline'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const auth = getAuth()
    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(auth)
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                // Signed in
                const currentuser = userCredential.user;
                console.log(currentuser)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                if (errorCode === 'auth/wrong-password'){
                    alert('Mot de passe incorrect')
                }
                // ..
            })


    }
    return (
        <div className='login'>
            <img className='login__logo' alt='logo' src={logo} />
            <div className='login__container'>
                <h1>Connexion</h1>
                <hr className='login__horizontalBar' />
                <div className='login__containerBox'>
                    <div className="login__inputBox">
                        <MailIcon className='login__optionIcon' />
                        <input type='email' required placeholder=" " onChange={(e) => setEmail(e.target.value)} />
                        <label>E-mail</label>
                    </div>
                    <div className="login__inputBox">
                        <LockIcon className='login__optionIcon' />
                        <input type='password' required placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
                        <label>Mot de Passe</label>
                    </div>
                    <button type='submit' className='login__signInButton' content="Se connecter" onClick={onSubmit}>Se connecter</button>
                </div>
            </div>
        </div>
    )
}


export default Login