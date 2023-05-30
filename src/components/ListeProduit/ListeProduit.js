import React from 'react'
import './ListeProduit.css'
import Produit from '../Produits/Product'
import { Link } from 'react-router-dom'
import { produits } from '../productsList'

function ListeProduit() {

    const getRandomId = () => {
        const randomIndex = Math.floor(Math.random() * produits.length)
        return produits[randomIndex].id
    }

    const randomId1 = getRandomId()
    const randomId2 = getRandomId()
    const randomId3 = getRandomId()
    const randomId4 = getRandomId()
    const randomId5 = getRandomId()
    const randomId6 = getRandomId()
    const randomId7 = getRandomId()
    const randomId8 = getRandomId()

    return (
        <div className='liste'>
          <Link to={`/produit/${randomId1}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId1} />
          </Link>
          <Link to={`/produit/${randomId2}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId2} />
          </Link>
          <Link to={`/produit/${randomId3}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId3} />
          </Link>
          <Link to={`/produit/${randomId4}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId4} />
          </Link>
          <Link to={`/produit/${randomId5}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId5} />
          </Link>
          <Link to={`/produit/${randomId6}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId6} />
          </Link>
          <Link to={`/produit/${randomId7}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId7} />
          </Link>
          <Link to={`/produit/${randomId8}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Produit id={randomId8} />
          </Link>
        </div>
      )
    }
    
    export default ListeProduit