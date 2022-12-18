import React from 'react'

import PageArrow from './../pageArrow/PageArrow'
import PageNumb from './../pageNumb/PageNumb'
import TitlePage from '../titlepage/TitlePage'
import ButtonA from '../buttons/ButtonA'


import imageProj1 from './../../assets/projects-1.png'
import imageProj2 from './../../assets/projects-2.png'
import imageProj3 from './../../assets/projects-3.png'

import { NavLink } from "react-router-dom"

import './itemproject.css'

const ItemProject = () => {

    const data_project = [
        {   
            id: 1,
            title: 'Project 1',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit fugiat reiciendis voluptates blanditiis inventore. Perferendis adipisci eum qui error omnis minima. Minima ad earum beatae aperiam enim eligendi autem ducimus?, Minima ad earum beatae aperiam enim eligendi autem ducimus?, Minima ad earum beatae aperiam enim eligendi autem ducimus?, ",
            imgurl: imageProj1,
            urlimg: '1'
        },
        {
            id: 2,
            title: 'Project 2',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit fugiat reiciendis voluptates blanditiis inventore. Perferendis adipisci eum qui error omnis minima. Minima ad earum beatae aperiam enim eligendi autem ducimus?, Minima ad earum beatae aperiam enim eligendi autem ducimus?, Minima ad earum beatae aperiam enim eligendi autem ducimus?, ",
            imgurl: imageProj2,
            urlimg: '2'
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
                            <img src={data.imgurl} alt="Item destinity for Project" />
                            <div className="text__item__itemproject">
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <div className="btn__image__itemproject">
                                    <NavLink to={data.urlimg} >
                                    <ButtonA text="Ver mais"/></NavLink>
                                </div>  
                            </div>
                        </li>
                    ))}
                    <PageArrow />
                    <PageNumb num_page='1' num_pages='1'/>
                </ul>
            </div>
        </section>
    )
}

export default ItemProject