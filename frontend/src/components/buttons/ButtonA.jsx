import React from 'react'
import  { BsArrowRight } from 'react-icons/bs'

import './buttons.css'

const ButtonA = (props) => {
    return (
        <button className='buttona'>{props.text} <BsArrowRight /></button>
    )
}

export default ButtonA