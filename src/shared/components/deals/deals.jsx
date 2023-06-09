import React, { useEffect, useState } from "react";
import { ColorTitle } from "../color-title/color-title";
import { DealGame } from "../deal-game/deal-game";
import SearchBar from "../search-bar/search-bar";
import { Pagination } from "../pagination/pagination";
import { FiltersGame } from "../filters-game/filters-game";

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
    const [dealList, setDealList] = useState()
    const [isLoading, setIsLoading] = useState({boolean:false, array:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]})
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const fetchDealsList = async (value) => {
        setIsLoading({boolean: true, array: isLoading.array});
        const options = {method: 'GET'};
        const parameters = {
            pageNumber: value? value : 0,
            pageSize: '10',
            lowerPrice: '0.01'
        };
        try{
            await fetch(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${parameters.pageNumber}&pageSize=${parameters.pageSize}&lowerPrice=${parameters.lowerPrice}`, options)
                .then((response) => {
                    const totalPages = response.headers.get('X-Total-Page-Count');
                    response.json()
                    .then((dataJson) => setDealList({games: dataJson, totalPages: parseInt(totalPages, 10), actualPage: parameters.pageNumber}))
                })
            setIsLoading({boolean: false, array: isLoading.array});
        } catch(err){console.error(err)}
    }

    const handlePrevious = () => {
        if(dealList?.actualPage === 0) return;
        else fetchDealsList(dealList?.actualPage - 1);
    }
    
    const handleNext = () => {
        if(dealList?.actualPage === dealList?.totalPages) return;
        else fetchDealsList(dealList?.actualPage + 1);
    }
    
    const handleClick = (value) => {
        if(dealList?.actualPage === value) return;
        fetchDealsList(value)
    }

    useEffect(()=>{
        fetchDealsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // efecto filter bright en hover en deal-game
    // efectos de aparición de los filtros
    // pop up de filtros (funcionalidad)
    // footer
    // cambiar el botón en el carrusel por el componente button

    return (
        <div className="deals-container">
            <div className="deals">
                <div className="title-icons">
                    <ColorTitle label='Juegos en oferta'/>
                    <div className="icons-container">
                        {/* <div className="view"><span className="material-icons">view_module</span></div> */}
                        <div className="filter-container">
                            {isPopUpOpen? <FiltersGame handleClose={() => setIsPopUpOpen(false)}/>
                                : null
                            }
                            <div className="filter" onClick={() =>setIsPopUpOpen(!isPopUpOpen)}>
                                <span className="material-icons">filter_list</span>
                            </div>
                        </div>
                    </div>
                </div>
                <SearchBar id='search-bar-deals'/>
                <div className="game-deals-container">
                    {isLoading.boolean ?
                        isLoading.array.map((num)=>{
                            return <Loading key={num}/>
                        })
                    : dealList && dealList.games.map((obj) => {
                        return <DealGame
                          key={obj.dealID}
                          gameID={obj.gameID}
                          img={obj.thumb}
                          title={obj.title}
                          store={obj.storeID}
                          price={obj.salePrice}
                        />
                    })}
                </div>
            </div>
            <Pagination
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              handleClick={handleClick}
              lastPage={dealList?.totalPages}
              actualPage={dealList?.actualPage}
            />
        </div>
    )
}