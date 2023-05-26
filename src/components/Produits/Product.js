import React, { useState, useEffect, useRef } from "react"
import './Product.css'
import { produits } from "../productsList"
let num = 0

function Product({ id }) {
    const index = useRef(-1)
    const [product, setProduct] = useState(null)
    const [couleur, setCouleur] = useState(null)
    const [picturenumber, setPictureNumber] = useState('0000')
    const intervalRef = useRef()

    useEffect(() => {
        console.log('id', id)
        for (let i = 0; i < produits.length; i++) {
            if (produits[i].id === id) {
                index.current = i
            }
        }
        if(index.current !== -1){
            setProduct(produits[index.current])
            setCouleur(produits[index.current].couleur[0])
        }
    }, [id])

    const animation = () => {
        if (num === 125) {
            num = 0
        }
        num++
        console.log('num', num)
        setPictureNumber(num.toString().padStart(4, '0'))
    }

    const startAnimation = () => {
        console.log('start')
        intervalRef.current = setInterval(animation, 50) // Commence l'animation toutes les secondes
    }

    const stopAnimation = () => {
        clearInterval(intervalRef.current) // Arrête l'animation
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current) // Nettoyage en cas de démontage du composant
    }, [])

    if (!product || !couleur) {
        return null
    }

    return (
        <div className="produit">
            <div className="produit__info">
                <div className="produit__titre">
                    {product.nom}
                </div>
                <img className='produit__image' alt='logo' onMouseEnter={startAnimation} onMouseLeave={stopAnimation} src={require(`./Images/${product.nom}/${couleur}/${picturenumber}.png`)} />
                <div className="produit__couleur">
                    {product.couleur.map((coul, key) => (
                        <div className="produit__coulcontour">
                            <div key={key} style={{ backgroundColor: coul }} className="produit__listecoul" onMouseEnter={() => setCouleur(coul)} />
                        </div>
                    ))}
                </div>
                <div className="produit__prix">
                    <strong>{product.prix}</strong>
                    <small>€</small>
                </div>
            </div>
        </div>
    )
}

export default Product
