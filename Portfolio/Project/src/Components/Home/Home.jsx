import React from 'react'
import Social from './Social'
import './home.css'
import Data from './Data'
import Scrolldown from './Scrolldown'

function Home() {
  return (
    <section className='home section' id='home'>
      <div className="home_container container grid">
<div className="home_content grid">
    <Social/>
    <div className="home_img">
      
    </div>
    <Data></Data>
</div>
 <Scrolldown /> 
      </div>
    </section>
  )
}

export default Home
