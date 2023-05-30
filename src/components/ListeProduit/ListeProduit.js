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


    return (
        <div className='liste'>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id={getRandomId()} />
            </Link>
        </div>

    )
}

export default ListeProduit