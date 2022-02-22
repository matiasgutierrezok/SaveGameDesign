import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
// import { ColorTitle } from "../color-title/color-title";
// import DyingLight from "../../../assets/imgs/DyingLight.jpg";
// import { ImgFree } from "../img-free/img-free";

let res = [
    { id: 1, game: 'item 1'},
    { id: 2, game: 'item 2'},
    { id: 3, game: 'item 3'},
    { id: 4, game: 'item 4'},
    { id: 5, game: 'item 5'},
    { id: 6, game: 'item 6'},
    { id: 7, game: 'item 7'},
    { id: 8, game: 'item 8'}
];

export const CarouselFree = () => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState(0);
    const [paused, setPaused] = useState(false);

    const carousel = useRef(null);
    const games = useRef({});

    const mouseDown = (e) => {
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
        if(carousel.current.scrollLeft >= carousel.current.offsetWidth * 3) {
            setStartX(e.pageX - carousel.current.offsetLeft);
            setScrollLeft(carousel.current.offsetWidth * 2);
            reposition();
        } else if(carousel.current.scrollLeft <= carousel.current.offsetWidth) {
            setStartX(e.pageX - carousel.current.offsetLeft);
            setScrollLeft(carousel.current.offsetWidth * 2);
            reposition();
        };
    };

    const timeout = (direction) => {
        setTimeout(() => {
            games.current.style.transition = 'none';
            if(direction === 'left') {
                carousel.current.scrollLeft = carousel.current.offsetWidth;
                games.current.prepend(games.current.lastElementChild);
            } else if(direction === 'right') {
                carousel.current.scrollLeft = carousel.current.offsetWidth * 3;
                games.current.appendChild(games.current.firstElementChild);
            }
            games.current.style.transform = `translate(0px)`;
            carousel.current.scrollLeft = carousel.current.offsetWidth * 2;
        }, 300);
        games.current.style.transition = 'all 0.3s';
    };

    const reposition = (num) => {
        let offsetWidth = carousel.current.offsetWidth;
        let scrollLeft = carousel.current.scrollLeft;
        if(num === 1){
            if(scrollLeft > offsetWidth * 2) {
                games.current.style.transform = `translate(${scrollLeft - offsetWidth * 2}px)`;
                timeout();
            } else {
                games.current.style.transform = `translate(${scrollLeft < offsetWidth * 2 ? scrollLeft - offsetWidth : offsetWidth}px)`;
                timeout('left');
            }
        } else if(num === -1){
            if(scrollLeft < offsetWidth * 2){
                games.current.style.transform = `translate(-${offsetWidth * 2 - scrollLeft}px)`;
                timeout();
            } else {
                games.current.style.transform = `translate(-${scrollLeft > offsetWidth * 2 ? offsetWidth * 3 - scrollLeft : offsetWidth}px)`;
                timeout('right');
            }
        } else if(scrollLeft >= offsetWidth * 3) {
            games.current.appendChild(games.current.firstElementChild);
            carousel.current.scrollLeft = offsetWidth * 2;
        } else if(scrollLeft <= offsetWidth) {
            games.current.prepend(games.current.lastElementChild);
            carousel.current.scrollLeft = offsetWidth * 2;
        }
    }

    useEffect(() => {
        if(!paused) {
            const interval = setInterval(() =>{
               reposition(-1);
            }, 3000);

            return() => {
                if(interval) {
                    clearInterval(interval);
                }
            }
        }
    })

    useEffect(() => {
        carousel.current.scrollLeft = carousel.current.offsetWidth * 2
        games.current.style.transition = 'none';
        setTimeout(()=>{
            games.current.style.transition = 'all 0.3s';
        }, 0)
    }, [])

    const removeHover = (e) => {
        if(e.target.childElementCount === 0) e.target.parentElement.style.backgroundColor = '#e0e0e0';
        else e.target.style.backgroundColor = '#e0e0e0';
    }

    // PENDIENTES:
    // - casos en el que sean 1 o 2 items, anular el mover 'automáticamente' el carrusel, sacar los botones de antes y sgte, estilos de fullwidth en caso de 1.

    return (
        <div className="grid-container">
            <div 
              className="main"
              ref={carousel}
              onScroll={()=> reposition()}
              onMouseLeave={() => {setIsDown(false); setPaused(false)}}
              onMouseEnter={() => setPaused(true)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
            >
                <div 
                    className={`items ${isDown? 'active' : ''}`}
                    ref={games}
                    onMouseDown={(e) => mouseDown(e)}
                    onMouseMove={(e) => mouseMove(e)}
                    onMouseUp={() => setIsDown(false)}
                >
                    {res.map((e) => {
                        return <div className="item" key={e.id}>{e.game}</div>
                    })}
                </div>
            </div>
            <div className="buttons">
                <IconButton id="prev" onClick={()=>reposition(1)} onTouchStart={(e)=> removeHover(e)}><span className="material-icons md-24">chevron_left</span></IconButton>
                <IconButton id="next" onClick={()=>reposition(-1)} onTouchStart={(e)=> removeHover(e)}><span className="material-icons md-24">chevron_right</span>
                </IconButton>
            </div>
        </div>
    )
}