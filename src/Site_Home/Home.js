import React from 'react'
import './Home.css'
import ListeProduit from '../components/ListeProduit/ListeProduit'

function Home() {
    return (
        <div className='home'>
            <div className="home__titre">Mieux notés</div>
            <ListeProduit />
            <div className="home__titre">Option 2</div>
            <ListeProduit />
            <div className="home__titre">Mieux notés 3</div>
            <ListeProduit />
            <div className="home__titre">Ceci est vraiment une très longue liste</div>
            <ListeProduit />
            <div className="home__titre">Proto</div>
            <ListeProduit />
            <div className="home__titre">T</div>
            <ListeProduit />
            <div className="home__titre">s</div>
            <ListeProduit />
        </div>

    )
}

export default Home