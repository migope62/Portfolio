import React from 'react'
import './home.css'
import Videohome from '../../components/video/Videohome'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function Home() {
  return (
      <><Header/><Videohome/>
      <h1 className='h1home'>Maxime Vande Voorde développeur web</h1><div className='.photo-container'>
        <p className='textehome'><img className="moi" src={process.env.PUBLIC_URL + '/images/moi.webp'} alt="Maxime Vande Voorde développeur web"></img>Bienvenue sur mon site ! Je suis Maxime Vande Voorde, un développeur web passionné, spécialisé dans la création de sites web et d'applications sur mesure.

          Fort de mon expertise dans le domaine du développement web, je suis capable de concevoir des sites web élégants, intuitifs et parfaitement adaptés à vos besoins spécifiques. Que vous ayez besoin d'un site vitrine pour présenter votre entreprise, d'un site e-commerce pour vendre vos produits en ligne, ou d'une application web complexe pour gérer vos opérations, je suis là pour vous accompagner à chaque étape du processus.

          Ma priorité est de vous fournir des solutions techniques de haute qualité, en respectant vos délais et en garantissant une communication transparente tout au long du projet.

          Si vous recherchez un partenaire de confiance pour la création ou la refonte de votre site web, n'hésitez pas à me contacter. Je suis là pour transformer vos idées en réalité et vous aider à atteindre vos objectifs en ligne.</p>
      </div><Footer/>
      </>
  )
}

export default Home