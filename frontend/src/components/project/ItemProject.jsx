import React from 'react'

import  { Link } from 'react-router-dom'

import TitlePage from '../titlepage/TitlePage'
import PageArrow from './../pageArrow/PageArrow'
import PageNumb from './../pageNumb/PageNumb'
import ButtonA from '../buttons/ButtonA'

// import SamplePage from '../samplepage/SamplePage'

import './itemproject.css'

const ItemProject = ({posts}) => {

    return (
        <section className='itemproject'>
            <div className="container__itemproject center">
                
                <div className="title__itemproject">
                    <TitlePage up="Meus" down="Projetos" />
                </div>
                <hr />  

                
                <ul className='list__itemproject'>

                    {posts.map((data) => (

                        <li key={data.id} className='item__itemproject'>
                            <img src={data.imgCapa} alt="Item destinity for Project" />
                            <div className="text__item__itemproject">
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <div className="btn__image__itemproject">
                                    <Link to={data.id} state={data} >
                                        <ButtonA text="Ver mais"/>
                                    </Link>
                                </div>  
                            </div>
                        </li>
                
                    ))}

                    <div className="btn__arrows__itemproject">
                        <PageArrow />
                        <PageNumb num_page='1' num_pages='1'/>
                    </div> 
                </ul>
            </div>
        </section>
    )
}

export default ItemProject