import React, { useContext } from 'react';
import PanierContext from '../components/Panier';
import { produits } from '../components/productsList';

const Panier = () => {
    const { cart } = useContext(PanierContext); // utiliser le contexte pour accéder aux éléments du panier
    console.log(cart)
    return (
        <div>
            <h2>Panier</h2>
            <ul>
                {cart.map((item, index) => {
                    const product = produits.find(prod => prod.id === item.id);
                    return (
                        <li key={index}>
                            <div>
                                <h3>{product ? product.nom : 'Nom du produit non trouvé'}</h3>
                                <p>Prix: {product ? product.prix : 'Prix non trouvé'}</p>
                                <p>Taille: {item.taille}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div>
                <h3>Total: {cart.reduce((total, item) => {
                    const product = produits.find(prod => prod.id === item.id);
                    return total + (product ? product.prix : 0);
                }, 0)}</h3>
            </div>
        </div>
    );
}

export default Panier;
