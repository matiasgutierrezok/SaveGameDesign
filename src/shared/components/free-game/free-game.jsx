import React from "react";
import { Button, IconButton } from "@mui/material";
import epic from '../../../assets/vectors/epic-games.svg';
import steam from '../../../assets/vectors/steam.svg';

export const FreeGame = (props) => {
    const handleTouchToImg = (e) => {
        if(e.nativeEvent.pointerType === 'mouse') return
        else if(e.target.parentElement.classList.contains('expand-element')) return
        props.expandItem(e);
        e.target.parentElement.firstChild.style.filter = 'none';
        e.target.nextElementSibling.style.display = 'none';
    }

    const date = (dateData) => {
        if(dateData.length < 4) return 'Sin fecha';
        let data = dateData;
        data = data.split(' ');
        let day = data[0];
        let hour = data[1];
        day = day.split('-');
        day = day[2] + '-' + day[1] + '-' + day[0];
        hour = hour.slice(0, 5);
        data = hour + ' ' + day;
        return data;
    }

    const platform = (platformData) => {
        if(platformData.slice(0, 2) === 'PC') {
            let store = platformData.replace('PC, ', '');
            store = store.replace(', DRM-Free', '');
            store = store.replace('DRM-Free, ', '');
            return(
                <div className="game-platform-store store-icons">
                    <div className="transparent-bg-container">
                        <span className="material-icons md-24">computer</span>
                        <div className="transparent-bg"></div>
                    </div>
                    {store === 'Epic Games Store' || store === 'Steam' ?
                        <div className="transparent-bg-container">
                            <img src={store === 'Steam' ? steam : epic} alt=""/>
                            <div className="transparent-bg"></div>
                        </div>
                        : store === 'DRM-Free' ? ''
                        : 
                        <div className="transparent-bg-container">
                            <p className="game-store">{store}</p>
                            <div className="transparent-bg"></div>
                        </div>
                    }
                </div>
            )
        }
        return(
            <div className="game-platform-store">
                <p className="game-platform transparent-bg">{platformData}</p>
            </div>
        )
    }

    return (
        <div className={`free-game ${props.className}`}>
            <img onClick={props.obj?.length !== 1 ? (e)=>handleTouchToImg(e) : null} draggable="false" src={props.obj.image} alt=""/>
            <Button variant="contained" id='btn' onClick={(e)=>props.expandItem(e)}>más info</Button>
            <div className="divider"/>
            <IconButton id="exit" onClick={()=>props.shrinkItem()}><span className="material-icons md-24">close</span></IconButton>
            <div className="game-details">
                <div className="transparent-bg-container">
                    <p title={props.obj.title}>{props.obj.title}</p>
                    <div className="transparent-bg"></div>
                </div>
                <div className="details">
                    <div className="game-data-container">
                        <div className="game-exp">
                            <div className="transparent-bg-container">
                                <p>Hasta:</p>
                                <div className="transparent-bg"></div>
                            </div>
                            <p className="game-date">{date(props.obj.end_date)}</p>
                        </div>
                        {platform(props.obj.platforms)}
                    </div>
                    <div className="btn-container">
                        <Button
                         variant="contained"
                         id='btn-go'
                         onClick={() => alert("Visitá https://savegame.vercel.app/ para ver el sitio funcional")}
                         endIcon={<span className="material-icons md-24">launch</span>}
                        >
                            ver tienda
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}