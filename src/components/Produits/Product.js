import React from "react";
import './Product.css'
import { produits } from "../productsList";

function Product({id}){
    let index = -1
    console.log(id, produits.length)
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === id) {
          index = i
          console.log(index)
        }
    }
    const { nom, prix } = produits[index]
      
    
    return (
        <div className="produit">
            <div className="produit__info">
                <div className="produit__titre">
                    {nom}
                </div>
                <img className='produit__image' alt='logo' src={require(`./Images/${id}-${produits[index].couleur[0]}.png`)}/>
                <div className="produit__prix">
                    <strong>{prix}</strong>
                    <small>€</small>
                </div>
            </div>
        </div>
    )
}

export default Product