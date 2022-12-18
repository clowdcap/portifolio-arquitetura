import React from 'react'
import './titlecomp.css'

const TitleComp = (props) => {
    return (
        <>
            <h2 className='title__components'>{props.text}</h2>
        </>
    )
}

export default TitleComp