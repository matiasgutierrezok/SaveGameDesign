import React, { useState } from "react";
import { CustomButton } from "../button/button";
import { ColorTitle } from "../color-title/color-title";
import { storeIdToName } from "../deal-game/deal-game";
import Steam from "../../../assets/vectors/steam.svg";
import GamersGate from "../../../assets/vectors/gamersgate.svg";
import GreenManGaming from "../../../assets/vectors/green man gaming.svg";
import Direct2Drive from "../../../assets/vectors/direct2drive.svg";
import GOG from "../../../assets/vectors/gog.svg";
import Origin from "../../../assets/vectors/origin.svg";
import Humble from "../../../assets/vectors/humblebundle.svg";
import Uplay from "../../../assets/vectors/uplay.svg";
import Fanatical from "../../../assets/vectors/fanatical.svg";
import WinGameStore from "../../../assets/vectors/wingamestore.svg";
import GameBillet from "../../../assets/vectors/gamebillet.svg";
import Voidu from "../../../assets/vectors/voidu.svg";
import Epic from "../../../assets/vectors/epic-games.svg";
import Gamesplanet from "../../../assets/vectors/gamesplanet.svg";
import Gamesload from "../../../assets/vectors/gamesload.svg";
import TwoGame from "../../../assets/vectors/2game.svg";
import IndieGala from "../../../assets/vectors/indiegala.svg";
import Blizzard from "../../../assets/vectors/blizzard.svg";
import AllYouPlay from "../../../assets/vectors/all you play.svg";
import DLGamer from "../../../assets/vectors/dlgamer.svg";
import Noctre from "../../../assets/vectors/noctre.svg";
import DreamGame from "../../../assets/vectors/dreamgame.svg";
import DefaultStore from "../../../assets/vectors/default store.svg";


export const storeNameToSvg = (storeName) => {
    switch (storeName){
        case '1': return Steam;
        case '2': return GamersGate;
        case '3': return GreenManGaming;
        case '6': return Direct2Drive;
        case '7': return GOG;
        case '8': return Origin;
        case '11': return Humble;
        case '13': return Uplay;
        case '15': return Fanatical;
        case '21': return WinGameStore;
        case '23': return GameBillet;
        case '24': return Voidu;
        case '25': return Epic;
        case '27': return Gamesplanet;
        case '28': return Gamesload;
        case '29': return TwoGame;
        case '30': return IndieGala;
        case '31': return Blizzard;
        case '32': return AllYouPlay;
        case '33': return DLGamer;
        case '34': return Noctre;
        case '35': return DreamGame;
        default: return DefaultStore;
    }
}

const StoreCard = ({storeID, price, fullPrice, savings}) => {
    return (
        <div className="store-card-container" onClick={() => alert('Para ver ofertas REALES, visita https://savegame.vercel.app/')}>
            <div className="store-img-bg">
                <img src={storeNameToSvg(storeID)} alt="" className="store-img"/>
            </div>
            <div className="store-data">
                <div className="store-title">{storeIdToName(storeID)}</div>
                <div className="store-price-data">
                    <div className="store-price-savings">
                        <div className="store-price">{'$' + price}</div>
                        <div className="store-fullprice">{'$' + fullPrice}</div>
                    </div>
                    <div className="store-savings">{savings}</div>
                </div>
            </div>
        </div>
    )
}


export const IndividualGame = ({img, title, handleClose, price, fullPrice}) => {
    const [indexDealsArray, setIndexDealsArray] = useState(3);

    let dealsArray = [
        {   
            key: 1,
            storeID: '1',
            price: price,
            fullPrice: fullPrice,
            savings: '-40%'
        },
        {
            key : 2,
            storeID : '2',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 3,
            storeID : '3',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 6,
            storeID : '6',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 7,
            storeID : '7',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 8,
            storeID : '8',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 11,
            storeID : '11',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 13,
            storeID : '13',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 15,
            storeID : '15',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 21,
            storeID : '21',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 23,
            storeID : '23',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 24,
            storeID : '24',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 25,
            storeID : '25',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 27,
            storeID : '27',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 28,
            storeID : '28',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 29,
            storeID : '29',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 30,
            storeID : '30',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 31,
            storeID : '31',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 32,
            storeID : '32',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 33,
            storeID : '33',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 34,
            storeID : '34',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 35,
            storeID : '35',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        },
        {
            key : 36,
            storeID : 'Tienda sin nombre',
            price : price,
            fullPrice : fullPrice,
            savings : '-40%'
        }
    ];

    const storeList = (index) => {
        if (dealsArray) {
            let results = [];
            dealsArray.map((obj, objIndex) => {
                if (index) return setIndexDealsArray(index)
                else if (objIndex <= indexDealsArray) {
                    return results.push(
                        <StoreCard
                            key={obj.storeID}
                            storeID={obj.storeID}
                            price={obj.price}
                            fullPrice={obj.fullPrice}
                            savings={obj.savings}
                        />
                    )
                } else return ''
            })
            return(results.map((store) => {
                return (store)
            }))
        }
    }

    return(
        <div className="individual-game-container">
            <div className="individual-game-transparent-bg" tabIndex={-1} onFocus={handleClose}/>
            <div className="individual-game-bg">
                <div className="title-btn">
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                    <CustomButton icon='close' handleClick={handleClose}/>
                </div>
                <div className="game-img">
                    <img src={img} alt=""/>
                </div>
                <ColorTitle label={'Tiendas'}/>
                <div className="stores-list">
                    {storeList()}
                </div>
                {dealsArray?.length > indexDealsArray + 1 ?
                    window.screen.width < '425px' ?
                    <CustomButton handleClick={() => storeList(indexDealsArray + 20)} text="cargar más"/>
                    : <CustomButton handleClick={() => storeList(indexDealsArray + 20)} icon='chevron_right' text='cargar más'/>
                    : null
                }
            </div>
        </div>
    )
}