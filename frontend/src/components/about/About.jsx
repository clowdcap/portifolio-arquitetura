import React from 'react'

import './about.css'

import ButtonB from '../buttons/ButtonB'
import TitleComp from '../titlecomp/TitleComp'

import Image_1 from './../../assets/about-1.png'
import Image_2 from './../../assets/about-2.png'
import Image_3 from './../../assets/about-3.png'

const About = () => {
  return (
    <section className="about center">
        <div className="container__about">
            <div className="images__about">
                <div className="left__images__about">
                  <img src={Image_1} alt="About this is realtive" />
                  <img src={Image_2} alt="JM Arquitecture is the best" />
                </div>
                <div className="right__images__about">
                  <img src={Image_3} alt="With technology include" />
                </div>
            </div>
            <div className="text__about">
                <TitleComp text="Sobre Mim" />
                <p>Olá,</p>
                <p>Me chamo José Marinho, sou arquiteto e urbanista formado pela UniCuritiba em 2022 e também sou Desenvolvedor Web.</p>
                <p>Atuei 1 ano de estágio na CRO/5, pelo Exército Brasileiro e estagiei por 2 anos na Prefeitura Municipal de Campo Magro</p>
                <p>Atuo na área de Projetos e Planejamento Urbano e Residencial, acessorias e de mais serviços e desenvolvo Web Sites assim como esse que está acessado.</p>
                <a href="#contato"><ButtonB href="#contato" text='Entre em Contato'/></a>
            </div>
        </div>
    </section>
  )
}

export default About