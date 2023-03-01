import React from 'react'
import './projets.css'
import Header from '../../components/header/Header'
import Videoprojet from '../../components/video/Videoprojet'
import Footer from '../../components/footer/Footer'
import Carrousel from '../../components/carrousel/Carrousel'

function Projets() {
  return (
    <>
    <Header/>
    <h1>Mes projets</h1>
      <p className='textprojet'>J'ai créé plusieurs projets personnels de développement web pour pratiquer mes compétences et améliorer mes connaissances en programmation. Pour accéder aux projets sur GitHub, vous pouvez cliquer sur la légende</p>
    <Videoprojet/>
    <Carrousel/>



    
    <Footer/>
    </>
  )
}

export default Projets