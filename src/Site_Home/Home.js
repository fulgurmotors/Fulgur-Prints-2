import React from 'react'
import './Home.css'
import ListeProduit from '../components/ListeProduit/ListeProduit'

function Home(){
    return(
        <div className='home'>
            <div className="home__titre">Mieux notés</div>
            <ListeProduit/>
        </div>
        
    )
}

export default Home