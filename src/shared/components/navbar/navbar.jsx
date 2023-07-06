import { Button } from "@mui/material";
import React from "react";
import logo from '../../../assets/vectors/logo.svg';
import BasicMenu from "../hamburger-menu/hamburger-menu";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"/>
            <div className="buttons">
                <Button id='home' variant="text" href="/">Home</Button>
                <Button id='next' variant="text" href="/whats-next">What's next</Button>
                <Button id='contact' variant="text" href="/contact-me">Contacto</Button>
            </div>
            <BasicMenu/>
        </div>
    )
}