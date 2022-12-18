import React from 'react'

import './mission.css'
import TitleComp from '../titlecomp/TitleComp'

const Mission = () => {
  return (
    <section className="mission center">
        <TitleComp text="Foco Principal" />
        <div className="container__mission center">
            <div className="box__mission">
                <h1 className="number__box">1</h1>
                <p className="text_box">
                  Propor soluções arquitetonicas e urbanas para melhor qualidade de vida e que possa gerar o maior impacto social.
                </p>
            </div>

            <div className="box__mission">
                <h1 className="number__box">2</h1>
                <p className="text_box">
                  Desenvolver ferramentas que auxiliem na divulgação e amostra de projetos 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Mission