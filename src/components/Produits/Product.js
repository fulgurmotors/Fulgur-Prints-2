import React from "react";
import './Product.css'
import { produits } from "../productsList";

function Product({ id }) {

    let index = -1
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === id) {
            index = i
            console.log(index)
        }
    }
    const { nom, prix } = produits[index]
    const [couleur, setCouleur] = React.useState(produits[index].couleur[0])
    const [picturenumber, setPictureNumber] = React.useState('0000')

    const animation = () => {
        let num = parseInt(picturenumber, 10)
        num++
        setPictureNumber(num.toString().padStart(4, '0'))
    }

    return (
        <div className="produit">
            <div className="produit__info">
                <div className="produit__titre">
                    {nom}
                </div>
                <img className='produit__image' alt='logo' onMouseOver={animation} src={require(`./Images/${nom}/${couleur}/${picturenumber}.png`)} />
                <div className="produit__couleur">
                    {produits[index].couleur.map((coul, size) => (
                        <div className="produit__coulcontour">
                            <div key={size} style={{ backgroundColor: coul }} className="produit__listecoul" onMouseEnter={() => setCouleur(coul)} />
                        </div>
                    ))}
                </div>
                <div className="produit__prix">
                    <strong>{prix}</strong>
                    <small>€</small>

                </div>
            </div>
        </div>
    )
}

export default Product