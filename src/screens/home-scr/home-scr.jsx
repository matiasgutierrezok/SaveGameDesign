import React from "react";
import { Navbar } from "../../shared/components/navbar/navbar";
import { BgImg } from "../../shared/components/bg-img/bg-img";
import { CarouselFree } from "../../shared/components/carousel-free/carousel-free";
import { Deals } from "../../shared/components/deals/deals";
import { Footer } from "../../shared/components/footer/footer";

export const HomeScr = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="home-body">
                <BgImg/>
                <CarouselFree/>
                <Deals/>
            </div>
            <Footer/>
        </div>
    )
}