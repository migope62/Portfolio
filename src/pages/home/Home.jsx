import React from 'react'
import './home.css'
import Videohome from '../../components/video/Videohome'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function Home() {
  return (
      <><Header/><Videohome/>
      <h1 className='h1home'>Maxime Vande Voorde développeur web</h1><div className='.photo-container'>
        <p className='textehome'><img className="moi" src={process.env.PUBLIC_URL + '/images/moi.png'} alt="Maxime Vande Voorde développeur web"></img>Bienvenue sur mon site ! Je suis Maxime Vande Voorde, développeur web spécialisé dans la création sur mesure de sites et d'applications.

          Avec mon expertise, je réalise des solutions élégantes et intuitives adaptées à vos besoins spécifiques. Que ce soit pour une présentation d'entreprise, une boutique en ligne ou une application complexe, je vous assure qualité, respect des délais et communication transparente.

          Contactez-moi pour concrétiser vos idées en ligne !</p>
      </div><Footer/>
      </>
  )
}

export default Home