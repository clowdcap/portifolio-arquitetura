import React from 'react'
import TitlePage from '../titlepage/TitlePage'

import './samplepage.css'

const SamplePage = () => {
  return (
    <section className='samplepage'>
        <div className="container__samplepage center">
            <div className="title__samplepage">
                <TitlePage up="Sample" down="Project 1" />
            </div>

            <hr />
            
            <ul className="list__samplepage">
                <li className="item__samplepage"></li>
            </ul>

        </div>
    </section>
  )
}

export default SamplePage