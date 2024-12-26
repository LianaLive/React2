import Logo from "../components/Logo.jsx";
import NavigationAlternative from "../components/header/NavigationAlternative.jsx";
import Navigation from '../components/header/Navigation.jsx'
import {useState} from "react";
import './Header.css'

function Header({title, children}) {

 
    return (
        <header className="header content-padding">
            <div className=' container'>
                <div className="header__inner">
                    <Logo/>
                    <nav className="header__navigation navigation">
                        <Navigation/>
                        <div className="navigation__separator"></div>
                        <NavigationAlternative/>
                    </nav>
                </div>
           

           
            </div>
        </header>
    )
}

export default Header