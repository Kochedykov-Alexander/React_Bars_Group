import React from 'react'
import logo from '../../../src/img/LOGO.png'

function Logo(){
    return(
        <div className="logo">
            <a  href="#"><img src={logo} alt="logo"/></a>
        </div>
    );
}

export default Logo