import React from 'react'

// Import Components
import Capa from '../../components/capa/Capa'
import About from '../../components/about/About'
import Mission from '../../components/mission/Mission'
import Project from '../../components/project/Project'
import Contact from '../../components/contact/Contact'

const Home = () => {


    return (
        <div>
            <Capa />
            <About />
            <Mission />
            <Project />
            <Contact />
        </div>
    )
}

export default Home