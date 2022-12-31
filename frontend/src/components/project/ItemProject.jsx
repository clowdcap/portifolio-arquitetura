import React from 'react'

import PageArrow from './../pageArrow/PageArrow'
import PageNumb from './../pageNumb/PageNumb'
import TitlePage from '../titlepage/TitlePage'
import ButtonA from '../buttons/ButtonA'


import imageProj1 from './../../assets/projects-1.png'
import imageProj2 from './../../assets/projects-2.png'
import imageProj3 from './../../assets/projects-3.png'

import { Link } from "react-router-dom"

import './itemproject.css'

const ItemProject = () => {

    const data_project = [
        {   
            id: 1,
            title: 'Jogo da Velha',
            description: "Desenvolvido em React JS e com estilização em CSS",
            imgurl: imageProj1,
            url_link: '/projetos/tictactoe' 
        },
        {
            id: 2,
            title: 'Dots',
            description: "Pontos na tela",
            imgurl: imageProj2,
            url_link: '/projetos/dots'
        },
        {
            id: 3,
            title: 'Project 3',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit fugiat reiciendis voluptates blanditiis inventore. Perferendis adipisci eum qui error omnis minima. Minima ad earum beatae aperiam enim eligendi autem ducimus?, Minima ad earum beatae aperiam enim eligendi autem ducimus?, Minima ad earum beatae aperiam enim eligendi autem ducimus?, ",
            imgurl: imageProj3,
            urlimg: '3'
        },
    ]

    return (
        <section className='itemproject'>
            <div className="container__itemproject center">
                
                <div className="title__itemproject">
                    <TitlePage up="Meus" down="Projetos" />
                </div>
                <hr />

                <ul className='list__itemproject'>

                    
                    
                    {data_project.map(data => (
                        <li key={data.id} className='item__itemproject'>
                            <div className="img__itemproject">
                                <img src={data.imgurl} alt="Item destinity for Project" />
                            </div>
                            <div className="text__item__itemproject">
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <div className="btn__image__itemproject">
                                    <Link to={data.url_link} >
                                    <ButtonA text="Ver mais"/></Link>
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