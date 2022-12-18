import React from 'react'
import  { BsArrowRight } from 'react-icons/bs'

import './buttons.css'

const ButtonB = (props) => {
    return (
        <button className='buttonb'>{props.text} <BsArrowRight /></button>
    )
}

export default ButtonB