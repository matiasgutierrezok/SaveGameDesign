import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ColorTitle } from "../color-title/color-title";
import { FreeGame } from "../free-game/free-game";
import game1 from "../../../assets/images/games/aa-Sims-4.webp"
import game2 from "../../../assets/images/games/aa-Bloodlines-2.webp"
import game3 from "../../../assets/images/games/ab-Dying-Light-2.webp"
import game4 from "../../../assets/images/games/ac-Forza-Horizon-5.webp"
import game5 from "../../../assets/images/games/aa-Assassin_s-Creed-Valhalla.webp"

export const CarouselFree = () => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    
    const carousel = useRef(null);
    const games = useRef({});
    const interval = useRef(null);
    const expanded = useRef(false);

    let gamesData = [
        {
            "id": 1,
            "title": "Los Sims 4",
            "image": game1,
            "platforms": "PC, Epic Games Store",
            "end_date": "2023-07-20 23:59:00",
        },
        {
            "id": 2,
            "title": "Bloodlines 2",
            "image": game2,
            "platforms": "PC, Steam",
            "end_date": "2023-07-20 23:59:00",
        },
        {
            "id": 3,
            "title": "Dying Light 2",
            "image": game3,
            "platforms": "PC, Itch.io",
            "end_date": "2023-07-20 23:59:00",
        },
        {
            "id": 4,
            "title": "Forza Horizon 5",
            "image": game4,
            "platforms": "PC, Indiegala",
            "end_date": "2023-07-20 23:59:00",
        },
        {
            "id": 5,
            "title": "Assasin's Creed Valhalla",
            "image": game5,
            "platforms": "PC, Origin",
            "end_date": "2023-07-20 23:59:00",
        }
    ];

    const mouseDown = (e) => {
        if (gamesData.length <= 2 || window.matchMedia('(pointer: coarse)').matches) return;
        autoMove(false);
        setIsDown(true);
        setStartX(e.pageX - carousel.current.offsetLeft);
        setScrollLeft(carousel.current.scrollLeft);
    };

    const mouseMove = (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.current.offsetLeft;
        const walk = (x - startX);
        carousel.current.scrollLeft = scrollLeft - walk;
        if(carousel.current.scrollLeft >= carousel.current.offsetWidth * 1.25) {
            setStartX(e.pageX - carousel.current.offsetLeft);
            setScrollLeft(carousel.current.offsetWidth * .75);
            reposition();
        } else if(carousel.current.scrollLeft <= carousel.current.offsetWidth * 0.75) {
            setStartX(e.pageX - carousel.current.offsetLeft);
            setScrollLeft(carousel.current.offsetWidth * 1.25);
            reposition();
        };
    };

    const mouseUp = (e) => {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        else {setIsDown(false)}
        autoMove(true);
    }

    const timeout = (direction, num) => {
        setTimeout(() => {
            games.current.style.transition = 'transform 0s';
            if(direction === 'left') {
                carousel.current.scrollLeft = carousel.current.offsetWidth * 0.5;
                games.current.prepend(games.current.lastElementChild);
                if(num) games.current.prepend(games.current.lastElementChild);
            } else if(direction === 'right') {
                carousel.current.scrollLeft = carousel.current.offsetWidth * 1.5;
                games.current.appendChild(games.current.firstElementChild);
                if(num) games.current.appendChild(games.current.firstElementChild);
            }
            games.current.style.transform = `translate(0px)`;
            carousel.current.scrollLeft = carousel.current.offsetWidth;
        }, 300);
        games.current.style.transition = 'transform 0.3s';
    };
    
    const reposition = (num, offCenter) => {
        let offsetWidth = carousel.current.offsetWidth;
        let scrollLeft = Math.round(carousel.current.scrollLeft);
        if(Number.isInteger(offCenter)){
            offCenter = Math.round(offCenter);
        }
        if(num === 1){
            if(scrollLeft > offsetWidth) {
                games.current.style.transform = `translate(${scrollLeft - offsetWidth}px)`;
                timeout();
            } else {
                games.current.style.transform = `translate(${scrollLeft < offsetWidth ? scrollLeft - offsetWidth * 0.5 : offsetWidth * 0.5}px)`;
                timeout('left');
            }
        } else if(num === -1){
            if(scrollLeft < offsetWidth){
                games.current.style.transform = `translate(-${offsetWidth - scrollLeft}px)`;
                timeout();
            } else {
                games.current.style.transform = `translate(-${scrollLeft > offsetWidth ? offsetWidth * 1.5 - scrollLeft : offsetWidth * 0.5}px)`;
                timeout('right');
            }
        } else if (num === 0){
            if(offCenter > offsetWidth) {
                games.current.style.transform = `translate(${scrollLeft > offsetWidth ? offsetWidth - offCenter + (scrollLeft - offsetWidth) : scrollLeft - offCenter}px)`;
                if (offCenter === offsetWidth * 2 || offCenter - 1 === offsetWidth * 2 || offCenter + 1 === offsetWidth * 2) timeout('right', 2)
                else timeout('right');
            }
            else if(offCenter < offsetWidth) {
                games.current.style.transform = `translate(${scrollLeft > offsetWidth ? offsetWidth - offCenter + (scrollLeft - offsetWidth) : scrollLeft - offCenter}px)`;
                if (offCenter === 0 || offCenter === 1) timeout('left', 2)
                else timeout('left');
            }
            else {
                games.current.style.transform = `translate(${scrollLeft > offsetWidth ? scrollLeft - offsetWidth: scrollLeft - offsetWidth}px)`;
            }
        } 
        else if(scrollLeft >= offsetWidth * 1.25) {
            games.current.appendChild(games.current.firstElementChild);
            carousel.current.scrollLeft = offsetWidth * .75 + carousel.current.scrollLeft - offsetWidth * 1.25;
        } else if(scrollLeft <= offsetWidth * .75) {
            games.current.prepend(games.current.lastElementChild);
            carousel.current.scrollLeft = offsetWidth * 1.25 + carousel.current.scrollLeft - offsetWidth * .75;
        }
        if(expanded.current) shrinkItem();
    }

    const autoMove = (boolean) => {
        if(interval.current){
            clearInterval(interval.current);
        }
        if(gamesData.length > 2){
            if(boolean){
                interval.current = setInterval(() =>{
                    reposition(-1);
                }, 3000);
            }
        }
    }

    useEffect(() => {
        if(!isLoading){
            if(gamesData.length > 2) carousel.current.scrollLeft = carousel.current.offsetWidth;
            games.current.style.transition = 'none';
            setTimeout(()=>{
                games.current.style.transition = 'transform 0.3s';
            }, 0);
            autoMove(true);
        } else if(isLoading){
            setIsLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])
    
    const expandItem = (e) => {
        if (expanded.current) shrinkItem();
        e.target.parentElement.classList.add('expand-element');
        e.target.parentElement.nextElementSibling?.classList.add('retract-next-element');
        if(gamesData.length <= 2){
            e.target.parentElement.nextElementSibling?.classList.add('two-items-retract');
        } else {
            reposition(0, e.target.parentElement.offsetLeft);
        }
        autoMove(false);
        setTimeout(() => {
            expanded.current = true;
        }, 500)
    }
    
    const shrinkItem = () => {
        if (expanded.current) {
            let i = 0;
            while(i < games.current.childNodes.length){
                games.current.childNodes[i].classList.remove('expand-element', 'retract-next-element', 'two-items-expand', 'two-items-retract');
                i++;
            };
            expanded.current = false;
            autoMove(true);
        }
    }

    const Loading = () => {
        return (
            <div className="loading">
                <div className="shimmer-wrapper">
                    <div className="shimmer"/>
                </div>
            </div>
        )
    }

    return (
        <div className="carousel-container">
            { isLoading ?
                <Loading/>
                : <>
                    <div 
                      className="main"
                      ref={carousel}
                      onScroll={()=> reposition()}
                      onMouseLeave={expanded.current? null : isDown? () => {setIsDown(false); autoMove(true)} : null}
                      onTouchStart={() => autoMove(false)}
                      onTouchEnd={() => autoMove(true)}
                    >
                        <div 
                          className={`game-container ${isDown? 'active' : ''}`}
                          style={gamesData.length <= 2 ? {cursor:'auto'} : null}
                          ref={games}
                          onMouseDown={(e) => mouseDown(e)}
                          onMouseMove={(e) => mouseMove(e)}
                          onMouseUp={(e) => mouseUp(e)}
                        >
                            {gamesData.length === 1 ?
                                <FreeGame className='only-one-game' obj={gamesData}/>
                            : gamesData.map((obj, index) => {
                                return (
                                    <FreeGame
                                      className={`${gamesData.length <= 2 ? index === 0 ? 'first-item' : 'second-item' : ''}`}
                                      obj={obj}
                                      expandItem={expandItem}
                                      shrinkItem={shrinkItem}
                                      key={obj.id}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    {gamesData.length > 2 ? 
                        <div className="buttons" >
                            <IconButton id="prev" onClick={()=>reposition(1)}><span className="material-icons md-24">chevron_left</span></IconButton>
                            <IconButton id="next" onClick={()=>reposition(-1)}><span className="material-icons md-24">chevron_right</span></IconButton>
                        </div>
                    : ''
                    }
                    <ColorTitle label='Juegos gratis' shadow={true}/>
                </>
            }
        </div>
    )
}