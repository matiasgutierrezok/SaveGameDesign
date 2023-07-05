import React from "react";
import { CustomButton } from "../button/button";
import code from "../../../assets/vectors/code.svg";
import github from "../../../assets/vectors/github.svg";
import linkedin from "../../../assets/vectors/linkedin.svg";
import behance from "../../../assets/vectors/behance.svg";
import dribbble from "../../../assets/vectors/dribbble.svg";

export const Footer = () => {
    return(
        <footer>
            <div className="title-container">
                <h2>Diseñado y desarrollado por: Matias Gutierrez</h2>
                <CustomButton
                    handleClick={e => console.log('clickeado rey')}
                    icon='arrow_upward'
                />
            </div>
            <div className="icons-container">
                <a href="https://github.com/matiasgutierrezok/SaveGame" target="_blank" rel="noreferrer" className="code-github"><img src={code} alt="code icon"/><img src={github} alt="github icon"/></a>
                <a href="https://github.com/matiasgutierrezok" target="_blank" rel="noreferrer" className="profile-github">🙋‍♂️<img src={github} alt="github icon"/></a>
                <a href="https://www.linkedin.com/in/matiasgutierrezok/" target="_blank" rel="noreferrer" className="linkedin"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://www.behance.net/matiasgutierrezok" target="_blank" rel="noreferrer" className="behance"><img src={behance} alt="behance" /></a>
                <a href="https://dribbble.com/matiasgutierrezok" target="_blank" rel="noreferrer" className="dribbble"><img src={dribbble} alt="dribbble" /></a>
            </div>
            <div className="footer-navigaation">
                <a href="#">What's Next</a>
                <a href="#">Contacto</a>
            </div>
            <p>Este proyecto fue desarrollado académicamente y no posee fines de lucro. Utiliza las APIs de <a href="https://www.gamerpower.com/" target="_blank" rel="noreferrer">GamePower</a> y <a href="https://www.cheapshark.com/" target="_blank" rel="noreferrer">CheapShark</a>, aunque no está asociado a ninguna empresa.</p>
            <hr/>
            <p>2023, Matias Gutierrez. Todos los derechos reservados. Otras marcas o nombres de productos son marcas comerciales de sus respectivos propietarios.</p>
        </footer>
    )
}