import React from "react"
import './PageProduit.css'
import { produits } from "../components/productsList"
import { Slider } from "@material-ui/core"
function PageProduit() {

    let index = -1
    const id = window.location.pathname.split('/').pop()
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === id) {
            index = i
        }
    }
    const [couleur, setCouleur] = React.useState(produits[0].couleur[0])
    return (
        <div className="pproduit">

            <div className="pproduit__infos">
                <div className="pproduit__images">
                    <div className="pproduit__imageprincipale"><img className='produit__image' alt='logo' src={require(`../components/Produits/Images/${id}-${couleur}.png`)} /></div>
                    <div className="pproduit__imagessecondaires">
                        {produits[index].couleur.map((coul, size) => (
                            <img className='produit__image' alt='logo' src={require(`../components/Produits/Images/${id}-${coul}.png`)} />
                        ))}

                    </div>
                </div>
                <div className="pproduit__description">
                    <div className="pproduit__titre">{produits[index].nom}</div>
                    <div className="pproduit__prix">
                        <div className="pproduit__prixentier">{Math.floor(produits[index].prix)}</div>
                        <div className="pproduit__prixdecimales">.{(produits[index].prix - Math.floor(produits[index].prix)).toFixed(2).substring(2)} €</div>
                    </div>
                    {produits[index].description}
                    <hr className='login__horizontalBar'/>
                    <Slider/>
                    <hr className='login__horizontalBar'/>
                    
                </div>
            </div>
            {index}
        </div>
    )


}

export default PageProduit