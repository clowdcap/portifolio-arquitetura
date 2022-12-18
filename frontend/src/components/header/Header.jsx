import React, {useState} from 'react'

// AiOutlineClose
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from "react-router-dom";

import Logo from './../../assets/logo.png'

import './header.css'

const Header = () => {
    
    const [showMenu, setShowMenu] = useState(false)

    const ToggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <div className="container__header center">
                <div className="logo__header">
                    <NavLink className='nav__link__header_logo' to="/" ><img src={Logo} alt="" /></NavLink>
                </div>
                <nav className='nav__header'>
                    <ul className={showMenu ? 'nav__list__header active' : 'nav__list__header'}>
                        <li className='nav__item__header'>
                            <NavLink className='nav__link__header' to="/" >Início</NavLink>
                        </li>
                        <li className='nav__item__header'>
                            <NavLink className='nav__link__header' to="/galeria" >Galeria</NavLink>
                        </li>
                        <li className='nav__item__header'>
                            <NavLink className='nav__link__header' to="/projetos" >Projetos</NavLink>
                        </li>
                        <li className='nav__item__header'>
                            <NavLink className='nav__link__header' to="/certificados" >Certificados</NavLink>
                        </li>
                        <li className='nav__item__header'>
                            <NavLink className='nav__link__header' to="/contato" >Contato</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="mobile__menu__header" onClick={ToggleMenu}>
                    <AiOutlineMenu  />
                </div>
            </div>
        </header>
    )
}

export default Header