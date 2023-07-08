import React from "react";
import { Navbar } from "../../shared/components/navbar/navbar";
import { Footer } from "../../shared/components/footer/footer";
import { ColorTitle } from "../../shared/components/color-title/color-title";
import linkedin from "../../assets/vectors/linkedin.svg"
import github from "../../assets/vectors/github.svg"
import behance from "../../assets/vectors/behance.svg"
import dribbble from "../../assets/vectors/dribbble.svg"

export const ContactMe = () => {
    return (
        <>
            <Navbar/>
            <div className="contact-me-body">
                <h1>¡Trabajemos juntos!</h1>
                <div>
                    <div className="contact-me-bg">
                        <ColorTitle label='Contactame'/>
                        <div className="icons-container">
                            <a href="https://www.linkedin.com/in/matiasgutierrezok/" target="_blank" rel="noreferrer" className="linkedin"><img src={linkedin} alt="linkedin" />Linkedin.com/in/matiasgutierrezok</a>
                        </div>
                    </div>
                    <div className="contact-me-bg">
                        <ColorTitle label='Mis redes'/>
                        <div className="icons-container">
                            <a href="https://github.com/matiasgutierrezok" target="_blank" rel="noreferrer" className="profile-github"><img src={github} alt="github icon"/>Github.com/matiasgutierrezok</a>
                            <hr />
                            <a href="https://www.behance.net/matiasgutierrezok" target="_blank" rel="noreferrer" className="behance"><img src={behance} alt="behance" />Behance.net/matiasgutierrezok</a>
                            <hr />
                            <a href="https://dribbble.com/matiasgutierrezok" target="_blank" rel="noreferrer" className="dribbble"><img src={dribbble} alt="dribbble" />Dribbble.com/matiasgutierrezok</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}