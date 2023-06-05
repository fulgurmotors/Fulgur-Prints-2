import React from 'react'
import logo from '../components/Images/Logo/logoPrint.png'
import './CreateAccount.css'
import LockIcon from '@material-ui/icons/LockOutlined'
import MailIcon from '@material-ui/icons/MailOutline'
import BadgeIcon from '@mui/icons-material/BadgeOutlined'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import AuthContext from '../Site/Auth'
import { auth, db } from '../Site/Firebase'
import { addDoc, collection } from 'firebase/firestore'

function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [adress, setAdress] = React.useState('')
    const [user, setUser] = React.useState('')


    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(auth)
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                // Signed in
                const currentuser = userCredential.user;
                await addDoc(collection(db, "users"), {
                    uid: currentuser.uid,
                    name: name,
                    adress: adress,
                    email: email,
                })
                setUser(currentuser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            })


    }

    return (
        <div className='login'>
            <img className='login__logo' alt='logo' src={logo} />
            <div className='login__container'>
                <h1>Inscription</h1>
                <hr className='login__horizontalBar' />
                <div className='login__containerBox'>
                    <div className="login__inputBox">
                        <BadgeIcon className='login__optionIcon' />
                        <input type='name' required placeholder=" " onChange={(e) => setName(e.target.value)} />
                        <label>Nom Prénom</label>
                    </div>
                    <div className="login__inputBox">
                        <HomeIcon className='login__optionIcon' />
                        <input type='adress' required placeholder=" " onChange={(e) => setAdress(e.target.value)} />
                        <label>Adresse</label>
                    </div>
                    <div className="login__inputBox">
                        <MailIcon className='login__optionIcon' />
                        <input type='email' required placeholder=" " onChange={(e) => setEmail(e.target.value)} />
                        <label>E-mail</label>
                    </div>
                    <div className="login__inputBox">
                        <LockIcon className='login__optionIcon' />
                        <input type='password' required placeholder=" " onChange={(e) => setPassword(e.target.value)} />
                        <label>Mot de Passe</label>
                    </div>
                    <button type='submit' className='login__signInButton' content="Se connecter" onClick={onSubmit}>Se connecter</button>
                </div>
            </div>
        </div>
    )
}


export default Login