import React from "react";
import textura from '../../../assets/vectors/textura.svg';
import pig from '../../../assets/vectors/minecraftPig.svg';
import spiningCoin from '../../../assets/vectors/spiningCoin.gif';

export const BgImg = () => {
    return (
        <div className="bg-home">
            <div className="textura-cont">
                <img src={textura} alt="" className="textura"/>
            </div>
            <div className="img-cont">
                <img src={spiningCoin} alt="" className="img-coin"/>
                <img src={pig} alt="" className="img-pig"/>
            </div>
            <div className="title">¡Aquí puedes ver ofertas de juegos gratis y en descuento!</div>
        </div>
    )
}