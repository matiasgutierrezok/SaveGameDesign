import { Button } from "@mui/material";
import React from "react";
import logo from '../../../assets/vectors/logo.svg';
import BasicMenu from "../hamburger-menu/hamburger-menu";
import SearchBar from "../search-bar/search-bar";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" className="logo"/>
            <SearchBar/>
            <div className="buttons">
                <Button id='home' variant="text">Home</Button>
                <Button id='next' variant="text">What's next</Button>
                <Button id='contact' variant="text">Contacto</Button>
            </div>
            <BasicMenu/>
        </div>
    )
}