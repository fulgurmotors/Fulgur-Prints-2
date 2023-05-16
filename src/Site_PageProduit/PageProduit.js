import React from "react"
import './PageProduit.css'
import { produits } from "../components/productsList"
import { Button, Slider, TextField, Tooltip } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"
let prixaajouter = 0

function PageProduit() {

    let index = -1
    const id = window.location.pathname.split('/').pop()
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === id) {
            index = i
        }
    }
    const [couleur, setCouleur] = React.useState(produits[index].couleur[0])
    const [tailleX, setTailleX] = React.useState(Number(produits[index].dimensions[0]))
    const [tailleY, setTailleY] = React.useState(Number(produits[index].dimensions[1]))
    const [tailleZ, setTailleZ] = React.useState(Number(produits[index].dimensions[2]))
    const [textValue, setTextValue] = React.useState("")
    const [prix, setPrix] = React.useState(Number(produits[index].prix))
    const handleSliderChange = (event, newValue) => {
        setTailleX(newValue); // Mettre à jour la valeur lorsque le Slider est modifié
        setTailleY(newValue * produits[index].dimensions[1] / produits[index].dimensions[0])
        setTailleZ(newValue * produits[index].dimensions[2] / produits[index].dimensions[0])
        setPrix(newValue * produits[index].prix / produits[index].dimensions[0])
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
                    <div className="pproduit__imageprincipale">{<img className='produit__image' alt='logo' src={require(`../components/Produits/Images/${id}-${couleur}.png`)} />}
                    </div>
                    <div className="pproduit__imagessecondaires">
                        {produits[index].couleur.map((coul, size) => (
                            <img key={size} className='produit__image' alt='logo' src={require(`../components/Produits/Images/${id}-${coul}.png`)} onMouseEnter={() => setCouleur(coul)} />
                        ))}

                    </div>
                </div>
                <div className="pproduit__description">
                    <div className="pproduit__titre">{produits[index].nom}</div>
                    <div className="pproduit__prix">
                        <div className="pproduit__prixentier">{Math.floor(prix)}</div>
                        <div className="pproduit__prixdecimales">.{(prix - Math.floor(prix)).toFixed(2).substring(2)} €</div>
                    </div>
                    {produits[index].description}
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