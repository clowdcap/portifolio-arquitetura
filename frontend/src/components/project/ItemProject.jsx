import React from 'react'

/* Import Components */
import PageArrow from './../pageArrow/PageArrow'
import PageNumb from './../pageNumb/PageNumb'
import TitlePage from '../titlepage/TitlePage'
import ButtonA from '../buttons/ButtonA'

/* Import Images */
import imageProj1 from './../../assets/projects-1.png'
import imageProj2 from './../../assets/projects-2.png'
import imageProj3 from './../../assets/projects-3.png'

/* Import Config DDM */
import { Link } from "react-router-dom"

/* Import CSS */
import './itemproject.css'

const ItemProject = () => {

    /* Banco de Dados dos Projetos */
    /* 
        Para proxima atualização:
            - Criar Tabela no DB
            - Chamar por requisicao API local desses daddos
    */
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
            description: "Pontos renderizados na tela feio em React JS",
            imgurl: imageProj2,
            url_link: '/projetos/dots'
        },  
        {
            id: 3,
            title: 'Poke Api - Simple',
            description: "Simples requisição de dados via api do Pokemon com React JS",
            imgurl: imageProj3,
            url_link: '/projetos/pokeapi-simple'
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