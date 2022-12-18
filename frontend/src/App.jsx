import React from 'react'
import './style/App.css'

// Import Pages
import Home from './pages/home/Home'
import Galleries from './pages/galleries/Galleries'
import Projects from './pages/projects/Projects'
import Certifications from './pages/certifications/Certifications'
import Contacts from './pages/contacts/Contacts'
import NotFound from './pages/notfound/NotFound'
import Sample from './pages/sample/Sample'

import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
        <Routes>

          <Route index element={<Home />} />
          <Route path="galeria" element={<Galleries />} />      
          <Route path="projetos" element={<Projects />} />
          <Route path="certificados" element={<Certifications />} />
          <Route path="contato" element={<Contacts />} />
          <Route path="projetos/:id" element={<Sample />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      <Footer />
    </>   
  )
}

export default App