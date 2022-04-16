import React, { useEffect, useState } from "react";
import { ColorTitle } from "../color-title/color-title";
import { DealGame } from "../deal-game/deal-game";
import SearchBar from "../search-bar/search-bar";

export const Deals = () => {
    const [dealList, setDealList] = useState()

    const fetchDealsList = async () => {
    // fijarse si se puede filtar el request por 'cheapest current on store'
        const options = {
            method: 'GET'
        };
        const parameters = {
            pageNumber: '',
            pageSize: '10',
            lowerPrice: '0.01'
        };
        try{
            await fetch(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${parameters.pageNumber}&pageSize=${parameters.pageSize}&lowerPrice=${parameters.lowerPrice}`, options)
                .then((response) => response.json())
                .then(response => setDealList(response))
        } catch(err){console.error(err)}
    }

    useEffect(()=>{
        fetchDealsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                {dealList && dealList.map((obj) => {
                    return <DealGame img={obj.thumb} title={obj.title} store={obj.storeID} price={obj.salePrice}/>
                })}
            </div>
        </div>
    )
}