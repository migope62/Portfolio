import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <><footer>
      <nav>
        <ul>
          <li><NavLink to="/Mentionlegales">Mentions légales</NavLink></li>
          <li><NavLink to="/Declaration">Déclaration de confidentialité</NavLink></li>
          <li><NavLink to="https://github.com/migope62"><img src={process.env.PUBLIC_URL + '/images/git.png'} alt="Git hub"></img></NavLink></li>
          <li><NavLink to="https://www.instagram.com/maxime_vdv___/?hl=fr"><img src={process.env.PUBLIC_URL + '/images/it.png'} alt="Instagram"></img></NavLink></li>
          <li><NavLink to="https://www.linkedin.com/in/maxime-vande-voorde-d%C3%A9veloppeur-web/"><img src={process.env.PUBLIC_URL + '/images/link.png'} alt="Linkedin"></img></NavLink></li>
        </ul>
      </nav>
      <p>&copy; 2023 Maxime Vande Voorde développeur web Tous droits réservés. React, Javascript, Node js.</p>
    </footer>




    </>
  )
}

export default Footer