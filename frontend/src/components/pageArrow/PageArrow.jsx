import React from 'react'

import  { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

import './arrows.css'

const PageArrow = () => {
    return (
        <div className="arrows">
            <div className="box__arrows">
                
                <button className="btn__arrow">
                    <BsArrowLeft className='item__arrow'/>
                </button>

                <button className="btn__arrow">
                    <BsArrowRight className='item__arrow'/>
                </button>
            </div>
        </div>
    )
}

export default PageArrow