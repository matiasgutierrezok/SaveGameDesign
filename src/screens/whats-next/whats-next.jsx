import React from "react";
import { Navbar } from "../../shared/components/navbar/navbar";
import { Footer } from "../../shared/components/footer/footer";
import { ColorTitle } from "../../shared/components/color-title/color-title";
import CarruselGratis1 from "../../assets/images/carrusel gratis 1.png";
import CarruselGratis1Tablet from "../../assets/images/carrusel gratis 1 tablet.png";
import CarruselGratis1Desktop from "../../assets/images/carrusel gratis 1 desktop.png";
import CarruselGratis2 from "../../assets/images/carrusel gratis 2.png";
import CarruselGratis2Tablet from "../../assets/images/carrusel gratis 2 tablet.png";
import CarruselGratis2Desktop from "../../assets/images/carrusel gratis 2 desktop.png";
import CarruselGratis3 from "../../assets/images/carrusel gratis 3.png";
import CarruselGratis3Tablet from "../../assets/images/carrusel gratis 3 tablet.png";
import CarruselGratis3Desktop from "../../assets/images/carrusel gratis 3 desktop.png";
import GrillaOfertas from "../../assets/images/Grilla de ofertas mobile.png";
import ListaOfertas from "../../assets/images/Lista de ofertas mobile.png";
import GrillaOfertasTablet from "../../assets/images/Grilla de ofertas tablet.png";
import ListaOfertasTablet from "../../assets/images/Lista de ofertas tablet.png";
import GrillaOfertasDesktop from "../../assets/images/Grilla de ofertas desktop.png";
import ListaOfertasDesktop from "../../assets/images/Lista de ofertas desktop.png";

export const WhatsNext = () => {
    return (
        <>
            <Navbar/>
            <div className="whats-next">
                <h1>Aquí puedes dejar tus sugerencias y ver qué cambiaría en el sitio</h1>
                <ColorTitle label='¿Tenés críticas o sugerencias?'/>
                <p>Si tenés alguna, te invito a escribirme por <a href="https://www.linkedin.com/in/matiasgutierrezok/">acá</a>.
                    <br></br>¡Las críticas que me ayuden a mejorar son muy bien recibidas!</p>
                <div className="next-changes">
                    <ColorTitle label='Cambios que haría'/>
                    <ul>
                        <li className="li">
                            <div className="bullet"></div>
                            <p>Sitio traducido a inglés</p>
                        </li>
                        <hr />
                        <li className="li">
                            <div className="bullet"></div>
                            <p>Tema claro</p>
                        </li>
                        <hr />
                        <li>
                            <div className="li">
                                <div className="bullet"></div>
                                <p>Vista carrusel 1</p>
                            </div>
                            <div className="img">
                                <img className="img-mobile" src={CarruselGratis1} alt="carrusel gratis opción 1" />
                                <img className="img-tablet" src={CarruselGratis1Tablet} alt="carrusel gratis opción 1" />
                                <img className="img-desktop" src={CarruselGratis1Desktop} alt="carrusel gratis opción 1" />
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className="li">
                                <div className="bullet"></div>
                                <p>Vista carrusel 2</p>
                            </div>
                            <div className="img">
                                <img className="img-mobile" src={CarruselGratis2} alt="carrusel gratis opción 2" />
                                <img className="img-tablet" src={CarruselGratis2Tablet} alt="carrusel gratis opción 2" />
                                <img className="img-desktop" src={CarruselGratis2Desktop} alt="carrusel gratis opción 2" />
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className="li">
                                <div className="bullet"></div>
                                <p>Vista carrusel 3</p>
                            </div>
                            <div className="img img-3">
                                <img className="img-mobile" src={CarruselGratis3} alt="carrusel gratis opción 3" />
                                <img className="img-tablet" src={CarruselGratis3Tablet} alt="carrusel gratis opción 3" />
                                <img className="img-desktop" src={CarruselGratis3Desktop} alt="carrusel gratis opción 3" />
                            </div>
                        </li>
                        <hr />
                        <li className="li">
                            <div className="bullet"></div>
                            <p>Agregar otras vistas de ofertas y botón para cambiar entre ellas</p>
                        </li>
                        <hr />
                        <li>
                            <div className="li">
                                <div className="bullet"></div>
                                <p>Vista grilla de ofertas</p>
                            </div>
                            <div className="img img-3">
                                <img className="img-mobile" src={GrillaOfertas} alt="Grilla de Ofertas" />
                                <img className="img-tablet" src={GrillaOfertasTablet} alt="Grilla de Ofertas" />
                                <img className="img-desktop" src={GrillaOfertasDesktop} alt="Grilla de Ofertas" />
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className="li">
                                <div className="bullet"></div>
                                <p>Vista lista de ofertas</p>
                            </div>
                            <div className="img img-3">
                                <img className="img-mobile" src={ListaOfertas} alt="Lista de Ofertas" />
                                <img className="img-tablet" src={ListaOfertasTablet} alt="Lista de Ofertas" />
                                <img className="img-desktop" src={ListaOfertasDesktop} alt="Lista de Ofertas" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}