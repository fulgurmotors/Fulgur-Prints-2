import React, { useContext } from 'react'
import PanierContext from '../components/Panier'
import { produits } from '../components/productsList'
import './Panier.css'
import DeleteIcon from '@mui/icons-material/Delete'

const Panier = () => {
    const { cart } = useContext(PanierContext) // utiliser le contexte pour accéder aux éléments du panier
    console.log(cart)
    const { updateCart } = useContext(PanierContext)


    const supprimerDuPanier = (idProduit) => {
        console.log('supprimer du panier');
        let panier = JSON.parse(localStorage.getItem('panier')) || [];
        const index = panier.findIndex(produit => produit.id === idProduit);
        if (index !== -1) {
            panier.splice(index, 1);
            localStorage.setItem('panier', JSON.stringify(panier));
            console.log('panier', panier);
            updateCart(panier);
        } else {
            console.log('Produit non trouvé dans le panier');
        }
    }

    return (
        <div>
            <h2 className='panier__titre'>Panier</h2>
            {cart.map((item, index) => {
                const product = produits.find(prod => prod.id === item.id)
                return (
                    <div className='panier__groupe'>
                        <img className='panier__groupeimage' alt='logo' src={require(`../components/Produits/Images/${product.nom}/${item.couleur}/0000.png`)} />
                        <div className="panier__description">
                            <h3 className='panier__groupetitre'>{product ? product.nom : 'Nom du produit non trouvé'}</h3>
                            <p className='panier__groupeprix'>Prix: {item.prix.toFixed(2)} €</p>
                            <p className='panier__groupetaille'>Taille: {item.taille[0]}x{item.taille[1]}x{item.taille[2]} cm</p>
                        </div>
                        <DeleteIcon className='panier__deleteicon' fontSize='large' onClick={() => supprimerDuPanier(item.id)}/>


                    </div>
                )
            })}
            <div>
                <h3 className='panier__total'>Total: {cart.reduce((total, item) => total + item.prix, 0).toFixed(2)} €</h3>
            </div>
        </div>
    )
}

export default Panier
