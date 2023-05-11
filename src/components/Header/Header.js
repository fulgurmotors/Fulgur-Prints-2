import React from 'react'
import './Header.css'
import LogoFulgur from '../Images/Logo/Fulgur Noir.png'
import LogoPrint from '../Images/Logo/logoPrint.png'
import petitlogo from '../Images/Logo/Fulgur Noir.png'
import Profil from '@material-ui/icons/Person'
import Panier from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <nav className='header'>
            <img className='header__LogoFulgur header__logo' alt='logo' src={window.innerWidth > 500 ? LogoFulgur : petitlogo}/>
            <img className='header__LogoPrint header__logo' alt='logo' src={window.innerWidth > 500 ? LogoPrint : petitlogo}/>
            <Link to='/' className='header__link'>
            <div className='header__option'>
                <span className='header__optionLine'>Catalogue</span>
                <span className='header__optionLine'>Déposer</span>
                <Panier className='header__optionIcon'/>
                <span className='header__basketEmpty'>3</span>
                <Profil className='header__optionIcon'/>
                
            </div>
            </Link>
        </nav>
    )
}

export default Header