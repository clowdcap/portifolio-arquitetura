import React from 'react'
import { NavLink } from 'react-router-dom'

import './page404.css'

const Page404 = () => {
  return (
    <section className="notfound">
        <div className="container__notfound center">
            <h1>Pagina nao encontrada</h1>
            <NavLink className='nav__link__notfound' to="/" >Clique aqui para voltar</NavLink>
        </div>
    </section>
  )
}

export default Page404