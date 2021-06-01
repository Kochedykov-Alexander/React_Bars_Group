import React from 'react'
import Logo from './Logo'
import LogoText from './LogoText'
import LoginButton from './menu/LoginButton'
import Menu from "./menu/Menu"
import RegistrationButton from './menu/RegistrationButton'

function Header(){
    return(
        <header className="header">
            <Logo/>
            <LogoText/>
            <Menu/>
            <RegistrationButton/>
            <LoginButton/>
        </header>
    );
}

export default Header;