import React, { useContext } from 'react'
import './Header.css'
import LogoFulgur from '../Images/Logo/Fulgur Noir.png'
import LogoPrint from '../Images/Logo/logoPrint.png'
import petitlogo from '../Images/Logo/Fulgur Noir.png'
import Profil from '@material-ui/icons/Person'
import Panier from '@material-ui/icons/ShoppingCart'
import Badge from '@mui/material/Badge'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthContext from '../../Site/Auth'
import PanierContext from '../Panier'

function Header() {
    const user = useContext(AuthContext)
    const { cart, updateCart } = useContext(PanierContext)
    const [badgeContent, setBadgeContent] = React.useState(0)
    const navigate = useNavigate()

    React.useEffect(() => {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('panier')) || []
        setBadgeContent(cartFromLocalStorage)
        setBadgeContent(cartFromLocalStorage.length)
    }, [])

    // À chaque fois que vous modifiez le panier, appelez cette fonction
    React.useEffect(() => {
        setBadgeContent(cart.length)
    }, [cart])

    const GotoPanier = () => {
        navigate('/panier')
    }

    return (
        <PanierContext.Provider value={{ cart, badgeContent, updateCart }}>
            <nav className='header'>

                <img className='header__LogoFulgur header__logo' alt='logo' src={window.innerWidth > 500 ? LogoFulgur : petitlogo} />
                <img className='header__LogoPrint header__logo' alt='logo' src={window.innerWidth > 500 ? LogoPrint : petitlogo} />

                <div className='header__option'>
                    <Link to='/'>
                        <span className='header__optionLine'>Catalogue</span>
                        <span className='header__optionLine'>{user ? user.email : "Non connecté"}</span>
                    </Link>

                    <Badge badgeContent={badgeContent} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                        <Panier className='header__optionIcon' onClick={GotoPanier} />
                    </Badge>
                    <Link to={user ? '/login' : '/createaccount'}>
                        <Profil className='header__optionIcon' />
                    </Link>
                </div>

            </nav>
        </PanierContext.Provider>
    )
}

export default Header