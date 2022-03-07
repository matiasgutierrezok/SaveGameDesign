import React, { useState, useRef, useEffect } from "react";
import { IconButton, Button } from "@mui/material";

let res2 = [
  {
    "id": 1409,
    "title": "Cris Tales",
    "worth": "$39.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/6217b18f31b28.jpg",
    "image": "https://www.gamerpower.com/offers/1b/6217b18f31b28.jpg",
    "description": "Score Cris Tales for free on Epic Games Store! Cris Tales is a beautiful 2D indie JRPG game with amazing visuals. Don't miss it!",
    "instructions": "1. Login into your Epic Games Store account.\r\n2. Click the button to add the game to your library",
    "open_giveaway_url": "https://www.gamerpower.com/open/cris-tales",
    "published_date": "2022-02-24 17:25:51",
    "type": "Full Game",
    "platforms": "PC, Epic Games Store",
    "end_date": "2022-03-03 23:59:00",
    "users": 1410,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/cris-tales",
    "open_giveaway": "https://www.gamerpower.com/open/cris-tales"
  },
  {
    "id": 467,
    "title": "Free Copperbell on PC",
    "worth": "$9.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/5f906546e4c512.jpg",
    "image": "https://www.gamerpower.com/offers/1/5f906546e4c512.jpg",
    "description": "Score Copperbell for free on PC via IndieGala! Copperbell is an indie platfomer with beautiful hand-drawn art and a original setting. Download it now!",
    "instructions": "1. Login into your free IndieGala account.\r\n2. Scroll down and click the \"Add to Your Library\" button to add the game to your library.\r\n3. Go to \"My Library\" to find your game.",
    "open_giveaway_url": "https://www.gamerpower.com/open/free-copperbell-on-pc",
    "published_date": "2022-02-21 18:12:55",
    "type": "Full Game",
    "platforms": "PC, DRM-Free",
    "end_date": "N/A",
    "users": 8520,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/free-copperbell-on-pc",
    "open_giveaway": "https://www.gamerpower.com/open/free-copperbell-on-pc"
  },
  {
    "id": 1304,
    "title": "Cave Story's Secret Santa",
    "worth": "N/A",
    "thumbnail": "https://www.gamerpower.com/offers/1/61b36fe5799c6.jpg",
    "image": "https://www.gamerpower.com/offers/1b/61b36fe5799c6.jpg",
    "description": "Cave Story's Secret Santa is a new game you can download for a limited time and play for FREE! Check it out! This game is available on Steam, GOG and Epic Games Store.",
    "instructions": "1. Download directly via Steam, GOG or Epic Games Store.\r\n2. Have fun!",
    "open_giveaway_url": "https://www.gamerpower.com/open/cave-story-s-secret-santa",
    "published_date": "2021-12-10 16:19:01",
    "type": "Full Game",
    "platforms": "PC, Steam, Epic Games Store, GOG",
    "end_date": "N/A",
    "users": 48150,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/cave-story-s-secret-santa",
    "open_giveaway": "https://www.gamerpower.com/open/cave-story-s-secret-santa"
  },
  {
    "id": 1055,
    "title": "Lightforce Ninja",
    "worth": "N/A",
    "thumbnail": "https://www.gamerpower.com/offers/1/61180eab41af5.jpg",
    "image": "https://www.gamerpower.com/offers/1b/61180eab41af5.jpg",
    "description": "Grab Lightforce Ninja for free on itch.io! Lightforce Ninja is a challenging indie game inspired by \"Jump King\"! Download it now!",
    "instructions": "1. Click the button \"Download or Claim\" before the offer expires.\r\n2. Login into your itch.io account to access the game.",
    "open_giveaway_url": "https://www.gamerpower.com/open/lightforce-ninja",
    "published_date": "2021-08-14 20:42:51",
    "type": "Full Game",
    "platforms": "PC, Itch.io, DRM-Free",
    "end_date": "N/A",
    "users": 4640,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/lightforce-ninja",
    "open_giveaway": "https://www.gamerpower.com/open/lightforce-ninja"
  },
  {
    "id": 958,
    "title": "Hampton Court",
    "worth": "$4.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/60cb4b81eaec3.jpg",
    "image": "https://www.gamerpower.com/offers/1b/60cb4b81eaec3.jpg",
    "description": "Claim Hampton Court for free on itch.io! Hampton Court is a visual novel game where you are a princess  thrown into the court of Henry VIII.",
    "instructions": "1. Log in to your itch.io account\r\n2. Click to claim to your account\r\n3. Download for PC.",
    "open_giveaway_url": "https://www.gamerpower.com/open/hampton-court",
    "published_date": "2021-06-17 15:17:53",
    "type": "Full Game",
    "platforms": "PC, Itch.io, DRM-Free",
    "end_date": "2022-02-28 23:59:00",
    "users": 3280,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/hampton-court",
    "open_giveaway": "https://www.gamerpower.com/open/hampton-court"
  },
  {
    "id": 842,
    "title": "Metal Slug 3",
    "worth": "$7.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/60840890f04f4.jpg",
    "image": "https://www.gamerpower.com/offers/1b/60840890f04f4.jpg",
    "description": "Grab Metal Slug 3 for free via Microsoft Store (Gold not required)!",
    "instructions": "1. Download via Microsoft Store before the offer expires!\r\n2. That's it, have fun!",
    "open_giveaway_url": "https://www.gamerpower.com/open/metal-slug-3",
    "published_date": "2021-04-24 14:01:21",
    "type": "Full Game",
    "platforms": "Xbox Series X|S, Xbox One",
    "end_date": "N/A",
    "users": 26230,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/metal-slug-3",
    "open_giveaway": "https://www.gamerpower.com/open/metal-slug-3"
  },
  {
    "id": 4,
    "title": "Get The Witcher: Enhanced Edition for FREE!",
    "worth": "$9.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/5ec4fdb8dbe80.jpg",
    "image": "https://www.gamerpower.com/offers/1b/5ec4fdb8dbe80.jpg",
    "description": "Starting today, all GOG GALAXY users can grab a free copy of The Witcher: Enhanced Edition Director's Cut! You just need to follow the instructions below!",
    "instructions": "1. <a href=\"https://www.gogalaxy.com\">Download</a> or update the GOG Galaxy client\r\n2. Go to the \"Recent\" view and check the banner at the top.\r\n3. Click the giveaway button.\r\nOR try the following:\r\n1. Add <a href=\"https://www.gog.com/game/gwent_the_witcher_card_game\">Gwent</a> to your library on GOG\r\n2. Visit the <a href=\"https://www.gog.com/gwent-welcome-bonus\">giveaway page</a> and subscribe.\r\n3. Then go to <a href=\"https://www.gog.com/game/the_witcher\">The Witcher page</a> to unlock the game.",
    "open_giveaway_url": "https://www.gamerpower.com/open/get-the-witcher-enhanced-edition-for-free",
    "published_date": "2020-12-04 16:51:52",
    "type": "Full Game",
    "platforms": "PC, GOG",
    "end_date": "N/A",
    "users": 208870,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/get-the-witcher-enhanced-edition-for-free",
    "open_giveaway": "https://www.gamerpower.com/open/get-the-witcher-enhanced-edition-for-free"
  },
  {
    "id": 441,
    "title": "Free NiGHTS Into Dreams (Steam)",
    "worth": "$7.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/5f873986428d4.jpg",
    "image": "https://www.gamerpower.com/offers/1/5f873986428d4.jpg",
    "description": "Grab NiGHTS Into Dreams for free! That's right, Sega is celebrating their 60th anniversary and they are giving away NiGHTS Into Dreams entirely for free! To grab your copy you just need to sign up with your email and Steam account. It's that easy!",
    "instructions": "1. Sign in with your email and click continue.\r\n2. Login with your Steam account.",
    "open_giveaway_url": "https://www.gamerpower.com/open/free-nights-into-dreams-steam",
    "published_date": "2020-10-14 19:46:46",
    "type": "Full Game",
    "platforms": "PC, Steam",
    "end_date": "N/A",
    "users": 100170,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/free-nights-into-dreams-steam",
    "open_giveaway": "https://www.gamerpower.com/open/free-nights-into-dreams-steam"
  },
  {
    "id": 147,
    "title": "Free Too Human on Xbox 360",
    "worth": "N/A",
    "thumbnail": "https://www.gamerpower.com/offers/1/5eec9c8280d8d.jpg",
    "image": "https://www.gamerpower.com/offers/1/5eec9c8280d8d.jpg",
    "description": "Get Too Human for free on Microsoft Store!",
    "instructions": "1. Click \"Buy Game Free\" button to unlock this game.\r\n2. Please note you need a XBOX/Microsoft account with a credit card in order to claim.",
    "open_giveaway_url": "https://www.gamerpower.com/open/free-too-human-on-xbox-360",
    "published_date": "2020-06-19 13:07:46",
    "type": "Full Game",
    "platforms": "Xbox 360",
    "end_date": "N/A",
    "users": 12260,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/free-too-human-on-xbox-360",
    "open_giveaway": "https://www.gamerpower.com/open/free-too-human-on-xbox-360"
  },
  {
    "id": 146,
    "title": "Free Crackdown and Crackdown 2",
    "worth": "N/A",
    "thumbnail": "https://www.gamerpower.com/offers/1/5eec96f986ffe.jpg",
    "image": "https://www.gamerpower.com/offers/1/5eec96f986ffe.jpg",
    "description": "Get Crackdown and Crackdown 2 (Xbox 360) for free on Microsoft Store. Please check the links below.\r\n\r\nCrackdown: https://marketplace.xbox.com/en-US/Product/Crackdown/66acd000-77fe-1000-9115-d8024d5307dc\r\nCrackdown 2: https://marketplace.xbox.com/en-US/Product/Crackdown-2/66acd000-77fe-1000-9115-d8024d5308bc",
    "instructions": "1. Click \"Buy Game Free\" button to unlock this game.\r\n2. Please note you need a XBOX/Microsoft account with a credit card in order to claim.",
    "open_giveaway_url": "https://www.gamerpower.com/open/free-crackdown-and-crackdown-2",
    "published_date": "2020-06-19 12:44:09",
    "type": "Full Game",
    "platforms": "Xbox 360",
    "end_date": "N/A",
    "users": 13060,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/free-crackdown-and-crackdown-2",
    "open_giveaway": "https://www.gamerpower.com/open/free-crackdown-and-crackdown-2"
  },
  {
    "id": 28,
    "title": "Higurashi When They Cry Hou - Ch.1 Onikakushi",
    "worth": "$1.19",
    "thumbnail": "https://www.gamerpower.com/offers/1/5ec62aa074c9b.jpg",
    "image": "https://www.gamerpower.com/offers/1/5ec62aa074c9b.jpg",
    "description": "Higurashi When They Cry Hou - Ch.1 Onikakushi is currently free on Steam until a vaccine or treatment is discovered!",
    "instructions": "Download on Steam before the offer expires!",
    "open_giveaway_url": "https://www.gamerpower.com/open/higurashi-when-they-cry-hou-ch-1-onikakushi",
    "published_date": "2020-05-15 14:15:44",
    "type": "Full Game",
    "platforms": "PC, Steam",
    "end_date": "N/A",
    "users": 69880,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/higurashi-when-they-cry-hou-ch-1-onikakushi",
    "open_giveaway": "https://www.gamerpower.com/open/higurashi-when-they-cry-hou-ch-1-onikakushi"
  },
  {
    "id": 37,
    "title": "Free Endless Space Collection",
    "worth": "$9.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/5ec637bfa0df6.jpg",
    "image": "https://www.gamerpower.com/offers/1/5ec637bfa0df6.jpg",
    "description": "Grab Endless Space Collection for free on Steam via Games2gether! You just need to follow the instructions below!",
    "instructions": "1. Login or create your free Games2gether account.\r\n2. Go to the reward page and link your Steam account.\r\n3. Go back to the reward page and click the button to redeem your game.",
    "open_giveaway_url": "https://www.gamerpower.com/open/free-endless-space-collection",
    "published_date": "2020-01-21 15:11:43",
    "type": "Full Game",
    "platforms": "PC, Steam",
    "end_date": "N/A",
    "users": 128650,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/free-endless-space-collection",
    "open_giveaway": "https://www.gamerpower.com/open/free-endless-space-collection"
  }
]

export const CarouselFree = () => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const carousel = useRef(null);
    const games = useRef({});

    const mouseDown = (e) => {
        if (res2.length <= 2) return;
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
        if(expanded) shrinkItem();
    }

    useEffect(() => {
        if(res2.length > 2){
            if(!isPaused) {
                const interval = setInterval(() =>{
                   reposition(-1);
                }, 3000);
    
                return() => {
                    if(interval) {
                        clearInterval(interval);
                    }
                }
            }
        }
    })

    useEffect(() => {
        if(res2.length > 2) carousel.current.scrollLeft = carousel.current.offsetWidth;
            games.current.style.transition = 'none';
            setTimeout(()=>{
                games.current.style.transition = 'transform 0.3s';
            }, 0)
    }, [])

    const handleTouchToImg = (e) => {
        if(e.nativeEvent.pointerType === 'mouse') return
        expandItem(e);
        e.target.parentElement.firstChild.style.filter = 'none';
        e.target.nextElementSibling.style.display = 'none';
    }
    
    const expandItem = (e) => {
        if (expanded) {
            shrinkItem();
        }
        e.target.parentElement.classList.add('expand-element');
        e.target.parentElement.nextElementSibling?.classList.add('retract-next-element');
        if(res2.length <= 2){
            e.target.parentElement.nextElementSibling?.classList.add('two-items-retract');
        } else {
            reposition(0, e.target.parentElement.offsetLeft);
        }
        setIsPaused(true);
        setTimeout(() => {
            setExpanded(true);
        }, 500)
    }
    
    const shrinkItem = () => {
        if (expanded) {
            let i = 0;
            while(i < games.current.childNodes.length){
                games.current.childNodes[i].classList.remove('expand-element', 'retract-next-element', 'two-items-expand', 'two-items-retract');
                i++;
            };
            setExpanded(false);
            setIsPaused(false);
        }
    }

    // PENDIENTES:
    // titulo de gratis
    // info al expandir el juego

    return (
        <div className="carousel-container">
            <div 
              className="main"
              ref={carousel}
              onScroll={()=> reposition()}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {setIsDown(false); expanded? setIsPaused(true) : setIsPaused(false)}}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
                <div 
                    className={`game-container ${isDown? 'active' : ''}`}
                    style={res2.length <= 2 ? {cursor:'auto'} : null}
                    ref={games}
                    onMouseDown={(e) => mouseDown(e)}
                    onMouseMove={(e) => mouseMove(e)}
                    onMouseUp={() => setIsDown(false)}
                >
                    {res2.length === 1 ?
                        <div className='game only-one-game'>
                            <img draggable="false" src={res2[0].image} alt=""/>
                        </div>
                    : res2.map((obj, index) => {
                        return (
                        <div className={`game ${res2.length <= 2 ? index === 0 ? 'first-item' : 'second-item' : ''}`} key={obj.id}>
                            <img onClick={(e)=>handleTouchToImg(e)} draggable="false" src={obj.image} alt=""/>
                            <Button variant="contained" id='btn' onClick={(e)=>expandItem(e)}>más info</Button>
                            <div className="divider"/>
                            <IconButton id="exit" onClick={()=>shrinkItem()}><span className="material-icons md-24">close</span></IconButton>
                        </div>
                        )
                    })}
                </div>
            </div>
            {
                res2.length > 2 ? 
                <div className="buttons" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => expanded? setIsPaused(true) : setIsPaused(false)}>
                    <IconButton id="prev" onClick={()=>reposition(1)}><span className="material-icons md-24">chevron_left</span></IconButton>
                    <IconButton id="next" onClick={()=>reposition(-1)}><span className="material-icons md-24">chevron_right</span>
                    </IconButton>
                </div>
                : ''
            }
        </div>
    )
}