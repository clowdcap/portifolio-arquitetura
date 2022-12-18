import React from 'react'
import './titlepage.css'

const TitlePage = (props) => {
    return (
        <>
            <div className="title__page">
                <h2><span>{props.up}</span><br/>{props.down}</h2>
            </div>
        </>
    )
}

export default TitlePage