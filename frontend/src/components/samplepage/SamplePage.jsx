import React, { useState, useEffect } from 'react'
import TitlePage from '../titlepage/TitlePage'

import './samplepage.css'

/* Import axios */
import axios from 'axios'

/* Import useLocation */
import { useLocation } from 'react-router-dom'

const SamplePage = () => {

  /* Localiza o dado ao entrar em um objeto (post) */
  const location = useLocation()

  /* Pega o Id gerado do post */
  const path = location.pathname.split('/')[2]

  /* Imprime no console o valor desse ID do post aberto */
  console.log('ID Post acessado: ' + path)

  /* useState */
  const [post, setPost] = useState({})

  useEffect(()=> {
    const getPost = async () => {
        const res = await axios.get("/posts/" + path)
        console.log('Post Selecionado: ', res.data)
        setPost(res.data)
    }
    getPost()
  }, [])

  return (
    <section className='samplepage'>
        <div className="container__samplepage center">
            <div className="title__samplepage">
                <TitlePage up={post.title} down="Project 1" />
                Title: 
            </div>

            <hr />

            <h1>User: {post.username}</h1>
            
            
            <ul className="list__samplepage">
                <li className="item__samplepage"></li>
            </ul>

        </div>
    </section>
  )
}

export default SamplePage