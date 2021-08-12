import {Header} from "./Header/Header";
import {BestBuys} from "./BestBuys";
import {Discounts} from "./Discounts";
import {SeeAll} from "./SeeAll";
import React from "react";

export const Homepage = () => {
    return (
        <>
            <Header/>
            <BestBuys/>
            <Discounts/>
            <SeeAll />
        </>
    )
}