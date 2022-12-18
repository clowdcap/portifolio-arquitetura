import React from 'react'
import './certification.css'

import TitlePage from '../titlepage/TitlePage'


const Certification = () => {
  return (
    <section className='certfication'>
      <div className="container__certification center">
        <div className="title__certification">

          <TitlePage up="Meus" down="Certificados" />
        </div>

        <hr />
        
        <ul className="list__certification">
            <li className="item__certification"></li>
        </ul>

      </div>
    </section>
  )
}

export default Certification