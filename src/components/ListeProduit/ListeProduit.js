import React from 'react'
import './ListeProduit.css'
import Produit from '../Produits/Product'
import { Link } from 'react-router-dom'

function ListeProduit() {
    return (
        <div className='liste'>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='0G481' />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='YF3CZ' />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='0G481' />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='0G481' />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='0G481' />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='0G481' />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='0G481' />
            </Link>
            <Link to='/produit/0G481' style={{ textDecoration: 'none', color: 'black' }} >
                <Produit id='0G481' />
            </Link>
        </div>

    )
}

export default ListeProduit