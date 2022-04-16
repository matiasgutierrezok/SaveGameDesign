import React from "react";
import { ColorTitle } from "../color-title/color-title";
import SearchBar from "../search-bar/search-bar";

export const Deals = () => {
    return (
        <div className="deals">
            <div className="title-icons">
                <ColorTitle label='Juegos en oferta'/>
                <div className="icons-container">
                    <div className="view"><span className="material-icons">view_module</span></div>
                    <div className="filter"><span className="material-icons">filter_list</span></div>
                </div>
            </div>
            <SearchBar id='search-bar-deals'/>
            <div className="game-deals-container">
                {/* acá armar un map que genere el componente game */}
                <div className="game">
                    <div className="game-img">
                        <img src="https://compass-ssl.xbox.com/assets/9c/94/9c944d9c-7ef1-4b46-9f68-9b02966d3993.jpg?n=Halo-Infinite_GLP-Page-Hero-0_1083x609.jpg" alt=""/>
                    </div>
                    <div className="data-container">
                        <div className="transparent-background"/>
                        <div className="data">
                            <p className="title">Halo Infinite</p>
                            <div className="store-price">
                                <p className="store">Epic Games Store</p>
                                <p className="price">$135.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}