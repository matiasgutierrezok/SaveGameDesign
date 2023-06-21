import React from "react";
import { ColorTitle } from "../color-title/color-title";
import { CustomButton } from "../button/button";


export const FiltersGame = ({handleClose, handleFilter, selectedFilters}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        const storeID = [];
        Object.entries(data).forEach(arr => arr.includes('on')? storeID.push(arr[0]) : '');
        data.storeID = storeID.join();
        if(data.order){
            data.sortBy = data.order.includes('price') ? 'Price' : 'Title';
            data.desc = data.order.includes('0') ? 0 : 1;
        }
        if(data.minPrice !== '') data.lowerPrice = data.minPrice;
        if(data.maxPrice !== '') data.upperPrice = data.maxPrice;
        handleFilter(data);
        handleClose();
    };

    const handleEraseFilters = (e) => {
        e.preventDefault();
        handleFilter();
        handleClose();
    }

    return(
        <div className="filters-game-bg">
            <div className="filters-game-title-section">
                <ColorTitle label={'Filtros'}/>
                <CustomButton icon='close' handleClick={handleClose}/>
            </div>
            <form className="filters" onSubmit={e => handleSubmit(e)} action="">
                <div className="filters-by-store">
                    <h2>Tiendas</h2>
                    <input type="checkbox" id="filters-store-see-more" />
                    <ul className="filters-store-list">
                        <li><label htmlFor="steam">Steam<input type="checkbox" id="steam" name='1' defaultChecked={selectedFilters && selectedFilters[1] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="epic-games-store">Epic Games Store<input type="checkbox" id="epic-games-store" name='25' defaultChecked={selectedFilters && selectedFilters[25] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Origin">Origin<input type="checkbox" id="Origin" name='8' defaultChecked={selectedFilters && selectedFilters[8] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Uplay">Uplay<input type="checkbox" id="Uplay" name='13' defaultChecked={selectedFilters && selectedFilters[13] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Blizzard">Blizzard<input type="checkbox" id="Blizzard" name='31' defaultChecked={selectedFilters && selectedFilters[31] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="HumbleStore">HumbleStore<input type="checkbox" id="HumbleStore" name='11' defaultChecked={selectedFilters && selectedFilters[11] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="GamersGate">GamersGate<input type="checkbox" id="GamersGate" name='2' defaultChecked={selectedFilters && selectedFilters[2] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="GreenManGaming">GreenManGaming<input type="checkbox" id="GreenManGaming" name='3' defaultChecked={selectedFilters && selectedFilters[3] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Direct2Drive">Direct2Drive<input type="checkbox" id="Direct2Drive" name='6' defaultChecked={selectedFilters && selectedFilters[6] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="GOG">GOG<input type="checkbox" id="GOG" name='7' defaultChecked={selectedFilters && selectedFilters[7] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Fanatical">Fanatical<input type="checkbox" id="Fanatical" name='15' defaultChecked={selectedFilters && selectedFilters[15] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="WinGameStore">WinGameStore<input type="checkbox" id="WinGameStore" name='21' defaultChecked={selectedFilters && selectedFilters[21] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="GameBillet">GameBillet<input type="checkbox" id="GameBillet" name='23' defaultChecked={selectedFilters && selectedFilters[23] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Voidu">Voidu<input type="checkbox" id="Voidu" name='24' defaultChecked={selectedFilters && selectedFilters[24] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Gamesplanet">Gamesplanet<input type="checkbox" id="Gamesplanet" name='27' defaultChecked={selectedFilters && selectedFilters[27] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Gamesload">Gamesload<input type="checkbox" id="Gamesload" name='28' defaultChecked={selectedFilters && selectedFilters[28] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="2Game">2Game<input type="checkbox" id="2Game" name='29' defaultChecked={selectedFilters && selectedFilters[29] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="IndieGala">IndieGala<input type="checkbox" id="IndieGala" name='30' defaultChecked={selectedFilters && selectedFilters[30] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="AllYouPlay">AllYouPlay<input type="checkbox" id="AllYouPlay" name='32' defaultChecked={selectedFilters && selectedFilters[32] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="DLGamer">DLGamer<input type="checkbox" id="DLGamer" name='33' defaultChecked={selectedFilters && selectedFilters[33] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="Noctre">Noctre<input type="checkbox" id="Noctre" name='34' defaultChecked={selectedFilters && selectedFilters[34] === 'on'? true : false}/></label></li>
                        <li><label htmlFor="DreamGame">DreamGame<input type="checkbox" id="DreamGame" name='35' defaultChecked={selectedFilters && selectedFilters[35] === 'on'? true : false}/></label></li>
                    </ul>
                    <span className="see-more">Ver más</span>
                </div>
                <div className="filters-price-title-order">
                        <h2>Precios</h2>
                        <div className="filters-price-inputs">
                            <input
                                pattern="^[0-9]+([,.][0-9]+)?$"
                                maxLength="12"
                                placeholder="mín"
                                id="minPrice"
                                name='minPrice'
                                autoComplete="off"
                                defaultValue={selectedFilters?.minPrice ? selectedFilters.minPrice : ""}/>
                            <span>-</span>
                            <input
                                pattern="^[0-9]+([,.][0-9]+)?$"
                                maxLength="12"
                                placeholder="máx"
                                id="maxPrice"
                                name='maxPrice'
                                autoComplete="off"
                                defaultValue={selectedFilters?.maxPrice ? selectedFilters.maxPrice : ""}/>
                        </div>
                    <ul>
                        <h2>Ordenar por:</h2>
                        <li>
                            <label htmlFor="ascendant">Menor precio 🔼
                                <input
                                    type='radio'
                                    id='ascendant'
                                    name='order'
                                    value='priceOrder0'
                                    defaultChecked={selectedFilters?.order === 'priceOrder0' ? true : false}/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="descendant">Mayor precio 🔽
                                <input
                                    type='radio'
                                    id='descendant'
                                    name='order'
                                    value='priceOrder1'
                                    defaultChecked={selectedFilters?.order === 'priceOrder1' ? true : false}/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="title-descendant">Título a-z 🔼
                                <input
                                    type='radio'
                                    id='title-descendant'
                                    name='order'
                                    value='titleOrder0'
                                    defaultChecked={selectedFilters?.order === 'titleOrder0' ? true : false}/>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="title-ascendant">Título z-a 🔽
                                <input
                                    type='radio'
                                    id='title-ascendant'
                                    name='order'
                                    value='titleOrder1'
                                    defaultChecked={selectedFilters?.order === 'titleOrder1' ? true : false}/>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="filters-buttons">
                    <button className="filters-outlined" onClick={e => handleEraseFilters(e)}>Resetear Filtros</button>
                    <button type='submit' className="filters-filled">Aplicar</button>
                </div>
            </form>
        </div>
    )
}