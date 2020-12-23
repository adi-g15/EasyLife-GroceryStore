import React from 'react'
import FullWidthGrid from './components/fullWidthGrid';
import NavBar from './components/navbar'
import "fontsource-roboto";
import SabjiArea from './components/sabjiArea';
import {
    Card,
    CardContent,
    Grid,
    Typography
} from "@material-ui/core";
import getSabjiList from "./util/getSabjiList";
import OutlinedCard from "./components/outlined_card";

export default function() {
    return (
        <>
            <NavBar />
            <SabjiArea promise={getSabjiList()} />
            {/*list={sabji_list} **QUESTION -> How to pass props down to the router, so that it's passed down in all cases */}
            {/* <FullWidthGrid /> */}
        </>
    )
}