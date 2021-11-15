import { useState } from "react"
import './style.scss'
import logo from '../../assets/logo.png'

const Header = (props) => {
    return (
        <header class='header'>
            <img class='header__logo' alt='FLOWS.IO' src={logo}/>
            <ul class='header__menu'>
                <li class='header__item'>File</li>
                <li class='header__item'>Edit</li>
                <li class='header__item'>View</li>
                <li class='header__item'>Arrange</li>
                <li class='header__item'>Extras</li>
                <li class='header__item'>Help</li>
            </ul>
        </header>
    )
}

export default Header;