import React, { useState } from "react";
import { IndividualGame } from "../individual-game/individual-game";

export const storeIdToName = (storeID) => {
    switch (storeID){
        case '1': return 'Steam';
        case '2': return 'GamersGate';
        case '3': return 'GreenManGaming';
        case '6': return 'Direct2Drive';
        case '7': return 'GOG';
        case '8': return 'Origin';
        case '11': return 'Humble Store';
        case '13': return 'Uplay';
        case '15': return 'Fanatical';
        case '21': return 'WinGameStore';
        case '23': return 'GameBillet';
        case '24': return 'Voidu';
        case '25': return 'Epic Games';
        case '27': return 'Gamesplanet';
        case '28': return 'Gamesload';
        case '29': return '2Game';
        case '30': return 'IndieGala';
        case '31': return 'Blizzard';
        case '32': return 'AllYouPlay';
        case '33': return 'DLGamer';
        default: return storeID;
    }
}

export const DealGame = ({img, title, store, price, gameID}) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    return (
        <div className="deal-game">
            {isPopUpOpen? <IndividualGame img={img} title={title} gameID={gameID} handleClose={() => setIsPopUpOpen(false)}/>
                : <>
                    <div className="game-img" onClick={() => setIsPopUpOpen(true)}>
                        <img src={img} alt=""/>
                    </div>
                    <div className="data-container">
                        <div className="transparent-background"/>
                        <div className="data">
                            <p className="title">{title}</p>
                            <div className="store-price">
                                <p className="store">{storeIdToName(store)}</p>
                                <p className="price">${price}</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}