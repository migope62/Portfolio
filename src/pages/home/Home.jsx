import React from 'react'
import './home.css'
import Videohome from '../../components/video/Videohome'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function Home() {
  return (
      <><Header/><Videohome/>
      <h1 className='h1home'>Maxime Vande Voorde développeur web</h1><div className='.photo-container'>
        <p className='textehome'><img className="moi" src={process.env.PUBLIC_URL + '/images/moi.webp'} alt="Maxime Vande Voorde développeur web"></img>Bonjour et bienvenue sur mon site ! Je suis Maxime Vande Voorde, un développeur web junior polyvalent et motivé. Je suis actuellement en formation et je serai disponible pour travailler avec vous à partir de début juin.

        En tant que développeur web, je suis capable de m'adapter rapidement à n'importe quel langage de programmation et de concevoir des applications web robustes et évolutives. Je suis également à l'aise pour travailler en équipe, communiquer efficacement et respecter les délais.

        Si vous êtes à la recherche d'un développeur web dynamique et motivé pour rejoindre votre entreprise, n'hésitez pas à me contacter. Je suis ouvert à toutes les opportunités et je suis impatient de discuter avec vous de vos besoins afin de pouvoir y répondre.</p>
      </div><Footer/>
      </>
  )
}

export default Home