import React, { useContext } from 'react'
import './Header.css'
import LogoFulgur from '../Images/Logo/Fulgur Noir.png'
import LogoPrint from '../Images/Logo/logoPrint.png'
import petitlogo from '../Images/Logo/Fulgur Noir.png'
import Profil from '@material-ui/icons/Person'
import Panier from '@material-ui/icons/ShoppingCart'
import Badge from '@mui/material/Badge'
import { Link } from 'react-router-dom'
import AuthContext from '../../Site/Auth'

export const CartContext = React.createContext()

function Header() {
    const user = useContext(AuthContext)
    const [cart, setCart] = React.useState([])
    const [badgeContent, setBadgeContent] = React.useState(0)

    React.useEffect(() => {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('panier')) || []
        setCart(cartFromLocalStorage)
        setBadgeContent(cartFromLocalStorage.length)
    }, [])

    // À chaque fois que vous modifiez le panier, appelez cette fonction
    const updateCart = (newCart) => {
        localStorage.setItem('panier', JSON.stringify(newCart))
        setCart(newCart)
        setBadgeContent(newCart.length)
    }



    return (
        <CartContext.Provider value={{ cart, badgeContent, updateCart }}>
            <nav className='header'>

                <img className='header__LogoFulgur header__logo' alt='logo' src={window.innerWidth > 500 ? LogoFulgur : petitlogo} />
                <img className='header__LogoPrint header__logo' alt='logo' src={window.innerWidth > 500 ? LogoPrint : petitlogo} />

                <div className='header__option'>
                    <Link to='/'>
                        <span className='header__optionLine'>Catalogue</span>
                        <span className='header__optionLine'>{user ? user.email : "Déposer"}</span>
                    </Link>

                    <Badge badgeContent={badgeContent} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                        <Panier className='header__optionIcon' />
                    </Badge>
                    <Link to={user ? '/login' : '/createaccount'}>
                        <Profil className='header__optionIcon' />
                    </Link>
                </div>

            </nav>
        </CartContext.Provider>
    )
}

export default Header