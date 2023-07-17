import React, { useState } from "react";
import { ColorTitle } from "../color-title/color-title";
import { DealGame } from "../deal-game/deal-game";
import SearchBar from "../search-bar/search-bar";
import { Pagination } from "../pagination/pagination";
import { FiltersGame } from "../filters-game/filters-game";
import Halo from "../../../assets/images/games/halo infinite.webp";
import Stalker from "../../../assets/images/games/S.T.A.L.K.E.R. 2 Heart of Chernobyl.webp";
import Battlefield from "../../../assets/images/games/battlefield 2042.webp";
import Crysis from "../../../assets/images/games/Crysis 3 Remastered.webp";
import Elden from "../../../assets/images/games/Elden Ring.webp";
import Guardians from "../../../assets/images/games/marvel's guardians of the galaxy.webp";
import Sifu from "../../../assets/images/games/Sifu.webp";
import Rainbow from "../../../assets/images/games/Tom Clancy’s Rainbow Six Extraction.webp";
import GOWR from "../../../assets/images/games/God of War Ragnarok.webp";
import CODV from "../../../assets/images/games/Call of Duty Vanguard.webp";
import GhostWire from "../../../assets/images/games/GhostWire Tokyo.webp";
import Stray from "../../../assets/images/games/Stray.webp";
import Horizon from "../../../assets/images/games/Horizon Forbidden West.webp";
import Starfield from "../../../assets/images/games/Starfield.webp";
import Sherlock from "../../../assets/images/games/Sherlock Holmes Chapter One.webp";
import Prince from "../../../assets/images/games/Prince of Persia The Sands of Time Remake.webp";

export const Loading = () => {
    return(
        <div className='loading'>
            <div className="shimmer-wrapper">
                <div className="shimmer"/>
            </div>
        </div>
    )
}

export const Deals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    let dealList = [
        {
            "title": "Halo Infinite",
            "dealID": "qA2rgBmr1ghSJ4jkErABh61aHfE9GzZcEfXWNgmFYNE%3D",
            "storeID": "1",
            "gameID": "1",
            "salePrice": "14.99",
            "normalPrice": "14.99",
            "savings": "0",
            "thumb": Halo
        },
        {
            "title": "S.T.A.L.K.E.R. 2 Heart of Chernobyl",
            "dealID": "kyyXFup36h03rmoY%2BruepfkobNiDU7g%2BOwYaIHbfVAA%3D",
            "storeID": "1",
            "gameID": "2",
            "salePrice": "14.99",
            "normalPrice": "14.99",
            "savings": "0",
            "thumb": Stalker
        },
        {
            "title": "Battlefield 2042",
            "dealID": "zrK7O7Xn368%2B5zXU%2B32aPdn1GSvWxy9xIrgdfi4uxUg%3D",
            "storeID": "1",
            "gameID": "3",
            "salePrice": "9.99",
            "normalPrice": "9.99",
            "savings": "0",
            "thumb": Battlefield
        },
        {
            "title": "Crysis 3 Remastered",
            "dealID": "coT0q%2B3lkMhJQYySOaQwSMJW%2FZkA1yTGWufQYMSC3nU%3D",
            "storeID": "1",
            "gameID": "247505",
            "salePrice": "12.99",
            "normalPrice": "12.99",
            "savings": "0",
            "thumb": Crysis
        },
        {
            "title": "Elden Ring",
            "dealID": "ZCbwB7BvLaMB4cOjp5t%2B22F3R9bqjgCijPNMpipI%2BDI%3D",
            "storeID": "1",
            "gameID": "6",
            "salePrice": "4.99",
            "normalPrice": "4.99",
            "savings": "0",
            "thumb": Elden
        },
        {
            "title": "Marvel's Guardians Of The Galaxy",
            "dealID": "a6%2BxFMHJoOBanPIjNhsDRDuXplz1%2FlFpGPUUlMjc3uI%3D",
            "storeID": "1",
            "gameID": "7",
            "salePrice": "9.99",
            "normalPrice": "9.99",
            "savings": "0",
            "thumb": Guardians
        },
        {
            "title": "Sifu",
            "dealID": "IgQZhCvtHiL8MaAK6MvDyJUN6q%2BB3oXtCKuGTiMQThw%3D",
            "storeID": "30",
            "gameID": "227401",
            "salePrice": "12.99",
            "normalPrice": "12.99",
            "savings": "0",
            "thumb": Sifu
        },
        {
            "title": "Tom Clancy’s Rainbow Six Extraction",
            "dealID": "lU2OP4JvKu0JFgUVEw2%2FtV2kK8WvfHgdJ9xtXAyUc70%3D",
            "storeID": "1",
            "gameID": "220162",
            "salePrice": "6.99",
            "normalPrice": "6.99",
            "savings": "0",
            "thumb": Rainbow
        },
        {
            "title": "God of War Ragnarok",
            "dealID": "We5EQ%2FRfS8ffads7Ktqpc9wvQglliRWTUkbGx0nFDuM%3D",
            "storeID": "3",
            "gameID": "913",
            "salePrice": "9.99",
            "normalPrice": "9.99",
            "savings": "0",
            "thumb": GOWR
        },
        {
            "title": "Call of Duty Vanguard",
            "dealID": "nMaG09jZ4jrxIAWkDe0K4wpzh63GeyBjgTKdYbiF8m8%3D",
            "storeID": "1",
            "gameID": "13",
            "salePrice": "19.99",
            "normalPrice": "19.99",
            "savings": "0",
            "thumb": CODV
        },
        {
            "title": "GhostWire Tokyo",
            "dealID": "bPKcQZ4nfIIVyQsjslYeph2rS8uT1XK6KuwQv8e6QiA%3D",
            "storeID": "1",
            "gameID": "15",
            "salePrice": "4.99",
            "normalPrice": "4.99",
            "savings": "0",
            "thumb": GhostWire
        },
        {
            "title": "Stray",
            "dealID": "KB9QtwQHBs%2FkSHEMSz1uGpFoLRYrlpKKKiSEGElh8P4%3D",
            "storeID": "1",
            "gameID": "16",
            "salePrice": "4.99",
            "normalPrice": "4.99",
            "savings": "0",
            "thumb": Stray
        },
        {
            "title": "Horizon Forbidden West",
            "dealID": "eoTfaYZkHecamFMQKXMKTgKyWECC%2B1%2FhwvDjxmuFJyg%3D",
            "storeID": "1",
            "gameID": "17",
            "salePrice": "4.99",
            "normalPrice": "4.99",
            "savings": "0",
            "thumb": Horizon
        },
        {
            "title": "Starfield",
            "dealID": "U%2BOHjMyMf65x3IbjFDN8Y%2F0AOOrt%2FioKTbI6%2BowzEf0%3D",
            "storeID": "1",
            "gameID": "18",
            "salePrice": "9.99",
            "normalPrice": "9.99",
            "savings": "0",
            "thumb": Starfield
        },
        {
            "title": "Sherlock Holmes Chapter One",
            "dealID": "IFN5NbpTgE5uvtlaFQHHJXSY9EfIxhs8H2pMcw8Oli0%3D",
            "storeID": "1",
            "gameID": "19",
            "salePrice": "9.99",
            "normalPrice": "9.99",
            "savings": "0",
            "thumb": Sherlock
        }
    ];

    if(window.innerWidth < 484){
        dealList.push({
            "title": "Prince of Persia The Sands of Time Remake",
            "dealID": "DsBWkaricGAqRb0tBIkGjbEktP9wm7xchNJfdAWIcJs%3D",
            "storeID": "23",
            "gameID": "217009",
            "salePrice": "24.87",
            "normalPrice": "24.87",
            "savings": "0",
            "thumb": Prince
        })
    }

    const handlePrevious = () => {
        alert('Visitá https://savegame.vercel.app/ para ver el sitio funcional');
    }

    const handleNext = () => {
        alert('Visitá https://savegame.vercel.app/ para ver el sitio funcional');
    }

    const handleClick = () => {
        alert('Visitá https://savegame.vercel.app/ para ver el sitio funcional');
    }


    return (
        <div className="deals-container">
            <div className="deals">
                <div className="title-icons">
                    <ColorTitle label='Juegos en oferta'/>
                    <div className="icons-container">
                        <div className="filter-container">
                            {isModalOpen? <FiltersGame handleClose={() => setIsModalOpen(false)}/>
                            : null
                            }
                            <div className="filter" onClick={() => setIsModalOpen(!isModalOpen)}>
                                <span className="material-icons">filter_list</span>
                            </div>
                        </div>
                    </div>
                </div>
                <SearchBar id='search-bar-deals'/>
                <div className="game-deals-container">
                    {dealList && dealList.map((obj) => {
                        return <DealGame
                          key={obj.dealID}
                          gameID={obj.gameID}
                          img={obj.thumb}
                          title={obj.title}
                          store={obj.storeID}
                          price={obj.salePrice}
                          fullPrice={obj.normalPrice}
                        />
                    })}
                </div>
            </div>
            <Pagination
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              handleClick={handleClick}
              lastPage={200}
              actualPage={0}
            />
        </div>
    )
}