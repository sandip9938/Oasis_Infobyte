import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skill from './Components/Skills/Skill'
import Service from './Components/Sevices/Service'
import Qualification from './Components/Qualification/Qualification'

import './App.css'

function App() {
  

  return (
    <>
     <Header />
     <main className='main'>
      <Home />
      <About/>
      <Skill></Skill>
      <Service/>
      <Qualification></Qualification>
     </main>
    </>
  )
}

export default App
