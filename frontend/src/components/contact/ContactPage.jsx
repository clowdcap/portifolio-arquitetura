import React from 'react'

import './contactpage.css'

import ButtonA from './../buttons/ButtonA'
import TitlePage from '../titlepage/TitlePage'

const ContactPage = () => {
    return (
        <section className='contactpage'>
            <div className="container__contactpage center">
                <div className="text__contactpage">
                    <div className="title__contactpage">
                        <TitlePage up="Contato" down="Geral"/>
                    </div>
                    <ul className='list__contactpage'>
                        <li className='item__contactpage'>
                            <p className='strong'>Localização</p>
                            <p>Curitiba / PR - Brazil</p>
                        </li>
                        
                        <li className='item__contactpage'>
                            <p className='strong'>+55 41 9 9272-5388 - WhatsApp</p>
                        </li>
                        
                        <li className='item__contactpage'>
                            <p>jose.marinho56@gmail.com</p>
                        </li>
                        <ButtonA text="Contact Us"/>
                    </ul>
                </div>
                <div className="map__contactpage"></div>
            </div>
        </section>
    )
}

export default ContactPage