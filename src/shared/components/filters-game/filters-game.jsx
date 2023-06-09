import React from "react";
import { ColorTitle } from "../color-title/color-title";
import { CustomButton } from "../button/button";


export const FiltersGame = ({handleClose}) => {
    return(
        <div className="filters-game-bg">
            <div className="filters-game-title-section">
                <ColorTitle label={'Filtros'}/>
                <CustomButton icon='close' handleClick={handleClose}/>
            </div>
            <form className="filters">
                <div className="filters-by-store">
                    <h2>Tiendas</h2>
                    <input type="checkbox" id="filters-store-see-more" />
                    <ul className="filters-store-list">
                        <li><label htmlFor="steam">Steam<input type="checkbox" id="steam" /></label></li>
                        <li><label htmlFor="epic-games-store">Epic Games Store<input type="checkbox" id="epic-games-store" /></label></li>
                        <li><label htmlFor="Origin">Origin<input type="checkbox" id="Origin" /></label></li>
                        <li><label htmlFor="Uplay">Uplay<input type="checkbox" id="Uplay" /></label></li>
                        <li><label htmlFor="Blizzard">Blizzard<input type="checkbox" id="Blizzard" /></label></li>
                        <li><label htmlFor="HumbleStore">HumbleStore<input type="checkbox" id="HumbleStore" /></label></li>
                        <li><label htmlFor="GamersGate">GamersGate<input type="checkbox" id="GamersGate" /></label></li>
                        <li><label htmlFor="GreenManGaming">GreenManGaming<input type="checkbox" id="GreenManGaming" /></label></li>
                        <li><label htmlFor="Direct2Drive">Direct2Drive<input type="checkbox" id="Direct2Drive" /></label></li>
                        <li><label htmlFor="GOG">GOG<input type="checkbox" id="GOG" /></label></li>
                        <li><label htmlFor="Fanatical">Fanatical<input type="checkbox" id="Fanatical" /></label></li>
                        <li><label htmlFor="WinGameStore">WinGameStore<input type="checkbox" id="WinGameStore" /></label></li>
                        <li><label htmlFor="GameBillet">GameBillet<input type="checkbox" id="GameBillet" /></label></li>
                        <li><label htmlFor="Voidu">Voidu<input type="checkbox" id="Voidu" /></label></li>
                        <li><label htmlFor="Gamesplanet">Gamesplanet<input type="checkbox" id="Gamesplanet" /></label></li>
                        <li><label htmlFor="Gamesload">Gamesload<input type="checkbox" id="Gamesload" /></label></li>
                        <li><label htmlFor="2Game">2Game<input type="checkbox" id="2Game" /></label></li>
                        <li><label htmlFor="IndieGala">IndieGala<input type="checkbox" id="IndieGala" /></label></li>
                        <li><label htmlFor="AllYouPlay">AllYouPlay<input type="checkbox" id="AllYouPlay" /></label></li>
                        <li><label htmlFor="DLGamer">DLGamer<input type="checkbox" id="DLGamer" /></label></li>
                        <li><label htmlFor="Noctre">Noctre<input type="checkbox" id="Noctre" /></label></li>
                        <li><label htmlFor="DreamGame">DreamGame<input type="checkbox" id="DreamGame" /></label></li>
                    </ul>
                    <span className="test">Ver más</span>
                </div>
                <div className="filters-by-price">
                    <h2>Precios</h2>
                    <ul>
                        <li><label htmlFor="Ascendente">Ascendente<input type="checkbox" id="Ascendente" /></label></li>
                        <li><label htmlFor="Descendente">Descendente<input type="checkbox" id="Descendente" /></label></li>
                    </ul>
                    <div className="filters-price-inputs">
                        <input pattern="^[0-9]+([,.][0-9]+)?$" maxlength="120" placeholder="mín" id="" />
                        <span>-</span>
                        <input pattern="^[0-9]+([,.][0-9]+)?$" maxlength="120" placeholder="máx" id="" />
                    </div>
                </div>
                <div className="filters-buttons">
                    <button className="filters-outlined" onClick={(e)=>e.preventDefault}>Resetear Filtros</button>
                    <button className="filters-filled" onClick={(e)=>e.preventDefault}>Aplicar</button>
                </div>
            </form>
        </div>
    )
}