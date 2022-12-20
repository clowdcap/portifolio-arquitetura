import React from 'react'

import ButtonA from '../buttons/ButtonA'
import { Link } from "react-router-dom"

import TitleComp from '../titlecomp/TitleComp'

import './project.css'

import Image_Project_1 from './../../assets/project-1.png'
import Image_Project_2 from './../../assets/project-2.png'
import Image_Project_3 from './../../assets/project-3.png'
import Image_Project_4 from './../../assets/project-4.png'
import Image_Project_5 from './../../assets/project-5.png'

const Project = () => {

  const data_capa_projects = [
    { imgurl: Image_Project_1, id: 1 },
    { imgurl: Image_Project_2, id: 2 },
    { imgurl: Image_Project_3, id: 3 },
    { imgurl: Image_Project_4, id: 4 },
    { imgurl: Image_Project_5, id: 5 },
  ]

  return (
    <section className="project">
      <div className="container__project center">
        <TitleComp text="Meus Projetos" />

        <div className="images__project">

          {data_capa_projects.map(data => (
            <div key={data.id} className="img__project">
              <img src={data.imgurl} alt="This is a project for this site" />
            </div>
          ))}
          
        </div>

        <div className="btn__image__project">
          <Link to="/projetos" ><ButtonA text="Todos os Projetos"/></Link>
        </div>

      </div>
    </section>
  )
}

export default Project