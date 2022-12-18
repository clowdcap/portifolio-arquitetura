import React from 'react'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { NavLink } from "react-router-dom";

import {BiMap} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'

import Logo from './../../assets/logo-footer.png'

import './footer.css'

const Footer = () => {
    return (
        <footer>

            <div className="container__footer center">
                <div className="logo__footer">
                    <img src={Logo} alt="Marc Logo this site" />
                </div>

                <nav className='nav__footer'>

                    <div className="left__nav__footer">
                        <ul className="nav__list__footer">
                            <p className='title__list__footer'>Informações</p>
                            <li className="nav__item__footer">
                                <NavLink className='nav__link__footer' to="/" >Início</NavLink>
                            </li>
                            <li className="nav__item__footer">
                                <NavLink className='nav__link__footer' to="/galeria" >Galeria</NavLink>
                            </li>
                            <li className="nav__item__footer">
                                <NavLink className='nav__link__footer' to="/projetos" >Projetos</NavLink>
                            </li>
                            <li className="nav__item__footer">
                                <NavLink className='nav__link__footer' to="/certificados" >Certificados</NavLink>
                            </li>
                            <li className="nav__item__footer">
                                <NavLink className='nav__link__footer' to="/contato" >Contato</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="right__nav__footer">
                        <ul className="nav__list__footer">
                            <p className='title__list__footer'>Contatos</p>
                            <li className="nav__item__footer">
                                <div className="icon_inav__icon__footer"><BiMap /></div>
                                <p className='nav__link__footer'>Curitiba / PR</p>
                            </li>
                            <li className="nav__item__footer">
                                <div className="icon_inav__icon__footer"><BsTelephone /></div>
                                <p className='nav__link__footer'>+55 41 9 9272-5388</p>
                            </li>
                            <li className="nav__item__footer">
                                <div className="icon_inav__icon__footer"><FiMail /></div>
                                <p className='nav__link__footer'>jose.marinho56@gmail.com</p>
                            </li>

                            
                            
                        </ul>
                    </div>

                </nav>

                <div className="social__footer">
                    <div className="container__social__footer">
                        
                        <p className='title__list__footer'>Social Media</p>
                        
                        <ul className="list__social">
                            <li className="item__social">
                                <FaFacebookF />
                            </li>
                            <li className="item__social">
                                <FiGithub />
                            </li>
                                
                            <li className="item__social">
                                <FaInstagram />
                            </li>
                            <li className="item__social">
                                <FaLinkedinIn />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__end">
                <p className='center'>© 2022 All Rights Reserved</p>
            </div>

        </footer>
    )
}

export default Footer