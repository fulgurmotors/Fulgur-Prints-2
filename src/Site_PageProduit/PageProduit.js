import React, { useState, useEffect, useRef } from "react"
import './PageProduit.css'
import { produits } from "../components/productsList"
import { Button, Slider, TextField, Tooltip } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"
let prixaajouter = 0
let num = 0

function PageProduit() {
    const index = useRef(-1)
    let id = window.location.pathname.split('/').pop() // Ajout des parenthèses après pop
    const [product, setProduct] = useState(null)
    const [couleur, setCouleur] = useState(null)
    const [picturenumber, setPictureNumber] = useState('0000')
    const intervalRef = useRef()

    // Déclaration des states ici sans initialisation
    const [tailleX, setTailleX] = React.useState(null)
    const [tailleY, setTailleY] = React.useState(null)
    const [tailleZ, setTailleZ] = React.useState(null)
    const [textValue, setTextValue] = React.useState("")
    const [prix, setPrix] = React.useState(null)

    // Initialisation dans le useEffect
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
            // Initialisation des states ici après avoir défini product
            setTailleX(Number(produits[index.current].dimensions[0]))
            setTailleY(Number(produits[index.current].dimensions[1]))
            setTailleZ(Number(produits[index.current].dimensions[2]))
            setPrix(Number(produits[index.current].prix))
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

    if (!product || !couleur) {
        return null
    }

    const handleSliderChange = (event, newValue) => {
        setTailleX(newValue); // Mettre à jour la valeur lorsque le Slider est modifié
        setTailleY(newValue * product.dimensions[1] / product.dimensions[0])
        setTailleZ(newValue * product.dimensions[2] / product.dimensions[0])
        setPrix(product.prix * ((newValue / product.dimensions[0])**3))
    }

    const handleChange = (event) => {
        setTextValue(event.target.value)
        console.log(textValue, prixaajouter, event.target.value)
        if (event.target.value !== "" && prixaajouter === 0) {
            setPrix(prix + 2)
            prixaajouter = 2
        } else if (event.target.value === "" && prixaajouter === 2) {
            setPrix(prix - 2)
            prixaajouter = 0
        }
    }
    return (
        <div className="pproduit">

            <div className="pproduit__infos">
                <div className="pproduit__images">
                    <div className="pproduit__imageprincipale">{<img className='produit__image' alt='logo' src={require(`../components/Produits/Images/${product.nom}/${couleur}/${picturenumber}.png`)} onMouseEnter={startAnimation} onMouseLeave={stopAnimation} />}
                    </div>
                    <div className="pproduit__imagessecondaires">
                        {product.couleur.map((coul, size) => (
                            <img key={size} className='produit__image' alt='logo' src={require(`../components/Produits/Images/${product.nom}/${coul}/0000.png`)} onMouseEnter={() => setCouleur(coul)} />
                        ))}

                    </div>
                </div>
                <div className="pproduit__description">
                    <div className="pproduit__titre">{product.nom}</div>
                    <div className="pproduit__prix">
                        <div className="pproduit__prixentier">{Math.floor(prix)}</div>
                        <div className="pproduit__prixdecimales">.{(prix - Math.floor(prix)).toFixed(2).substring(2)} €</div>
                    </div>
                    {product.description}
                    <hr className='pproduit__barredescription' />
                    <div className="pproduit__taille">Séléctionner la taille : {tailleX}x{tailleY}x{tailleZ}cm (XxYxZ)</div>
                    <Slider value={tailleX} min={5} max={40} onChange={handleSliderChange} style={{ width: '99%' }} />
                    <hr className='pproduit__barredescription' />
                    <Tooltip title="Service payant pour le moment car le site est en alpha" placement="right">
                        <div className="pproduit__ajoutmessage">Ajouter un message ? (2€) {textValue}</div>
                    </Tooltip>
                    <TextField variant="outlined" size="small" style={{ width: '99%', marginTop: '10px' }} value={textValue} onChange={handleChange} />
                    <Button variant="contained" size="large" style={{ backgroundColor: "#FFD814", marginTop: '30px' }} startIcon={<AddShoppingCart />}>Ajouter au panier</Button>
                </div>
            </div>
        </div>
    )


}

export default PageProduit