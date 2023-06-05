import React, { useState, useEffect, useRef, useContext } from "react"
import './PageProduit.css'
import { produits } from "../components/productsList"
import { Button, Slider, TextField, Tooltip } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"
import AuthContext from "../Site/Auth"
import { CartContext } from "../components/Header/Header"


function PageProduit() {
    const index = useRef(-1)
    let id = window.location.pathname.split('/').pop() // Ajout des parenthèses après pop
    const [product, setProduct] = useState(null)
    const [couleur, setCouleur] = useState(null)
    const [picturenumber, setPictureNumber] = useState('0000')
    const intervalRef = useRef()
    const user = useContext(AuthContext)
    const { updateCart } = useContext(CartContext)

    // Déclaration des states ici sans initialisation
    const [tailleX, setTailleX] = React.useState(null)
    const [tailleY, setTailleY] = React.useState(null)
    const [tailleZ, setTailleZ] = React.useState(null)
    const [textValue, setTextValue] = React.useState("")
    const [prix, setPrix] = React.useState(null)
    const [prixAjouter, setPrixAjouter] = useState(0);
    const [num, setNum] = useState(0);

    // Initialisation dans le useEffect
    useEffect(() => {
        console.log('id', id)
        for (let i = 0; i < produits.length; i++) {
            if (produits[i].id === id) {
                index.current = i
            }
        }
        if (index.current !== -1) {
            setProduct(produits[index.current])
            setCouleur(produits[index.current].couleur[0])
            // Initialisation des states ici après avoir défini product
            setTailleX(Number(produits[index.current].dimensions.longueur))
            setTailleY(Number(produits[index.current].dimensions.largeur))
            setTailleZ(Number(produits[index.current].dimensions.hauteur))
            setPrix(Number(produits[index.current].prix))
        }
    }, [id])

    const animation = () => {
        if (num === 125) {
            setNum(0)
        }
        setNum(num + 1)
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
        setTailleY(newValue * product.dimensions.largeur / product.dimensions.longueur)
        setTailleZ(newValue * product.dimensions.hauteur / product.dimensions.longueur)
        setPrix(product.prix * ((newValue / product.dimensions.longueur) ** 3))
    }

    const handleChange = (event) => {
        setTextValue(event.target.value)
        console.log(textValue, prixAjouter, event.target.value)
        if (event.target.value !== "" && prixAjouter === 0) {
            setPrix(prix + 2)
            setPrixAjouter(2)
        } else if (event.target.value === "" && prixAjouter === 2) {
            setPrix(prix - 2)
            setPrixAjouter(0)
        }
    }

    const ajouterauPanier = () => {
        console.log('ajouter au panier')
        const produitaajouter = {
            id: product.id,
            taille: tailleX,
            couleur: couleur,
            prix: prix
        }
        console.log('produitaajouter', produitaajouter)
        let panier = JSON.parse(localStorage.getItem('panier')) || []
        panier.push(produitaajouter)
        localStorage.setItem('panier', JSON.stringify(panier))
        console.log('panier', panier)
        updateCart()
    }

    return (
        <AuthContext.Provider value={{ updateCart }}>
            <CartContext.Provider value={user}>
                <div className="pproduit">

                    <div className="pproduit__infos">
                        <div className="pproduit__images">
                            {<img className='pproduit__imageprincipale' alt='logo' src={require(`../components/Produits/Images/${product.nom}/${couleur}/${picturenumber}.png`)} onMouseEnter={startAnimation} onMouseLeave={stopAnimation} />}

                            <div className="pproduit__imagessecondaires" style={{ gridTemplateColumns: `repeat(${product.couleur.length}, 1fr` }}>
                                {product.couleur.map((coul, size) => (
                                    <img key={size} className='pproduit__image2' alt='logo' src={require(`../components/Produits/Images/${product.nom}/${coul}/0000.png`)} onMouseEnter={() => setCouleur(coul)} />
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
                            <Button variant="contained" size="large" style={{ backgroundColor: "#FFD814", marginTop: '30px' }} startIcon={<AddShoppingCart />} onClick={ajouterauPanier}>Ajouter au panier</Button>
                        </div>
                    </div>
                </div>
            </CartContext.Provider>
        </AuthContext.Provider>
    )


}

export default PageProduit