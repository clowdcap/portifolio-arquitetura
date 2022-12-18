import React from 'react'
import TitlePage from '../titlepage/TitlePage'

import  { BsArrowRight } from 'react-icons/bs'

import Image_Capa from './../../assets/house-front.png'

import './capa.css'

const Capa = () => {

    return (
        <section className="capa">
            <div className="container__capa center">
                <div className="textos__capa">
                    
                    <TitlePage up="José" down="Marinho"/>

            

                </div>
                
                <div className="image__capa">
                    <div className="image__view">
                        <p>Veja esse Projeto </p><BsArrowRight/>
                    </div>
                        <img src={Image_Capa} alt="i dont know" className="image__bg">
                    </img>
                </div>
            </div>
        </section>
    )
}

export default Capa