import React from 'react'

import { api } from './../../lib/axios'

import ButtonA from '../buttons/ButtonA'

import './contact.css'

import Image_Contact from './../../assets/contact-image.png'

import TitleComp from '../titlecomp/TitleComp'


const Contact = () => {
  var myForm = document.querySelector('.form__contact')

  const handleReset = () => {
    var inputs__form = document.querySelectorAll('.input__data')
    inputs__form.forEach(input => {
      input.value = ''
    })
  }

  async function create_contact(e) {
    e.preventDefault()
      
    var nome = e.target[0].value
    var phone = e.target[1].value
    var email = e.target[2].value
    var interested = e.target[3].value
    var message = e.target[4].value

    console.log('FORM DATA: ', myForm)
    console.log(nome, phone, email, interested, message)
    
    try {
      await api.post('/contatous', {
        "nome": nome,
        "phone": phone,
        "email": email,
        "interested": interested,
        "message": message,
      })

      alert('Contato registrador com sucesso');

    } catch (error) {
      console.log(error)
      alert('Falha ao registrar o contato, tente novamente')
    } finally {
      handleReset()
    }
  }
  
  return (
    <section className="contact center" id='contato'>
      <TitleComp text="Contato" />
      <br /><br />
      <div className="container__contact">
        <form onSubmit={create_contact} className="form__contact">
          <input type="text"  className='input__data' id='nome' placeholder='Nome' required/>
          <input type="text"  className='input__data' id='phone' placeholder='Telefone'  required/>
          <input type="email"  className='input__data' id='email' placeholder='E-mail' required/>
          <input type="text"  className='input__data' id='interested' placeholder='Assunto'/>
          <textarea id='message' className='input__data'  placeholder='Mensagem' required></textarea>
        
          <div className="btn__form__contact">
            <ButtonA type="submit" text='Enviar Contato' />
          </div>  
        </form>
        
        <div className="image__contact">
          <img type="image" src={Image_Contact} alt="Use on this Page" />
        </div>
      </div>
    </section>
  )
}

export default Contact