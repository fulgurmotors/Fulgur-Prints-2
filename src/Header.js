import React from 'react'
import './Header.css'
import logo from './Images/Fulgur_prints.png'
import Profil from '@material-ui/icons/Person'
import Panier from '@material-ui/icons/ShoppingBasket'

function Header(){
    return(
        <nav className='header'>
            <img className='header__logo' alt='logo' src={logo}/>
            <div className='header__option'>
                <span className='header__optionLine'>Catalogue</span>
                <span className='header__optionLine'>Déposer</span>
                <Panier className='header__optionIcon'/>
                <span className='header__basketEmpty'>2</span>
                <Profil className='header__optionIcon'/>
                
            </div>
        </nav>
    )
}

export default Header