import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import button_1 from "../images/measering.svg";
import button_2 from "../images/calculation.svg";
import classes from './Nav.module.css';

function NavPanel(){
    return(
        <header className={classes.panel}>
            <img src={logo} alt="Тут должен быть логотип" className={classes.logo}></img>
            <div className={classes.pages}>
                <Link to="/services" className={classes.links}>Services</Link>
                <Link to="/products" className={classes.links}>Products</Link>
                <Link to="/about_us" className={classes.links}>About Us</Link>
                <Link to="/portfolio" className={classes.links}>Portfolio</Link>
                <Link to="/faq" className={classes.links}>FAQ</Link>
                <Link to="/contacts" className={classes.links}>Contacts</Link>
            </div>
            <div className={classes.buttons}>
                <div className={classes.button_1}>
                    <img src={button_1} alt="Тут должна быть картинка"></img>
                    <p>Make request</p>
                </div>
                <div className={classes.button_2}>
                    <img src={button_2} alt="Тут должна быть картинка"></img>   
                    <p>Calculation</p>
                </div>
            </div>     
        </header>
    )
}

export default NavPanel