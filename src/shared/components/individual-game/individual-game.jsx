import React, { useEffect, useState } from "react";
import { CustomButton } from "../button/button";
import { ColorTitle } from "../color-title/color-title";
import { storeIdToName } from "../deal-game/deal-game";
import { Loading } from "../deals/deals";

const StoreCard = ({storeID, link, price, fullprice, savings}) => {
    let url = `https://www.cheapshark.com/redirect?dealID=${link}`;
    let moneySaved;
    if(savings[1] === '.') moneySaved = '- ' + savings.slice(0, 1) + '%'
    else moneySaved = '- ' + savings.slice(0, 2) + '%'
    return (
        <div className="store-card-container" onClick={() => window.open(url, '_blank').focus()}>
            <div className="store-img-bg"></div>
            <div className="store-data">
                <div className="store-title">{storeIdToName(storeID)}</div>
                <div className="store-price-data">
                    <div className="store-price-savings">
                        <div className="store-price">{'$' + price}</div>
                        <div className="store-fullprice">{'$' + fullprice}</div>
                    </div>
                    <div className="store-savings">{moneySaved}</div>
                </div>
            </div>
        </div>
    )
}


export const IndividualGame = ({img, title, gameID, handleClick, handleClose}) => {
    const [dealsArray, setDealsArray] = useState();
    const [isLoading, setIsLoading] = useState(false)
    
    const fetchGameDeals = async (id) => {
        setIsLoading(true);
        const options = {method: 'GET'};
        const parameters = {id: id};
        try{
            await fetch(`https://www.cheapshark.com/api/1.0/games?id=${parameters.id}`, options)
                .then((response) => response.json())
                .then((dataJson) => setDealsArray(dataJson.deals))
            setIsLoading(false);
        } catch(err){console.error(err)}
    }

    useEffect(() => {
        fetchGameDeals(gameID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className="individual-game-container">
            <div className="individual-game-transparent-bg"/>
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
                    {isLoading? 
                        <>
                            <Loading/>
                            <Loading/>
                        </>
                    : dealsArray?.map((obj) => {
                        return(
                            <StoreCard
                              key={obj.storeID}
                              storeID={obj.storeID}
                              link={obj.dealID}
                              price={obj.price}
                              fullprice={obj.retailPrice}
                              savings={obj.savings}
                            />
                        )
                    })}
                    <CustomButton handleClick={handleClick} text="cargar más"/>
                </div>
        </div>
    )
}