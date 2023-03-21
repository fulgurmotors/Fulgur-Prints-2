import React from 'react'
import './Home.css'
import Product from './components/Product'

function Home(){
    return(
        <Product
            id='1010'
            title='Chargeur sans fil'
            price={11.67}
            rating={4}
            image='test'/>
    )
}

export default Home