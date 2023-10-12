import React from 'react'
import  './Skill.css'
import Fullstack from './Fullstack'

function Skill() {
  return (
    <div>
    <section className="skill_section" id='skill'>
        <h2 className="section_tittle">Skills</h2>
        <div className="skill_container container grid">
<Fullstack></Fullstack>
        </div>
    </section>
    </div>
  )
}

export default Skill
