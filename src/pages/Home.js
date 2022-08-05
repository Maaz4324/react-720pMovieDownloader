import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Home.css'

function Home() {
  return (
    <div className='home-container'>
        <div className="home-head-container">
            <h1>Download <Link to="/movies">Movies</Link> and <Link to="/shows">Shows</Link> for free</h1>
        </div>
    </div>
  )
}

export default Home