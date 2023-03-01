import React from 'react'
import './contact.css'
import Header from '../../components/header/Header'
import Form from '../../components/formulaire/Form'
import Videocontact from '../../components/video/Videocontact'
import Footer from '../../components/footer/Footer'

function Contact() {
  return (
    <>
    <div className='back'>
    <Header/>
    <Videocontact/>
    <Form/>
    <Footer/>

          </div>
      </>
  )
}

export default Contact