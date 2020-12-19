import React from 'react'
import FullWidthGrid from './components/fullWidthGrid';
import NavBar from './components/navbar'
import "fontsource-roboto";
import SabjiArea from './components/sabjiArea';
import { Container } from "@material-ui/core";
import getSabjiList from "./util/getSabjiList";

const sabji_list = await getSabjiList();

export default function() {
    return (
        <>
            <NavBar />
            <Container>
                <SabjiArea list={sabji_list} /> {/**QUESTION -> How to pass props down to the router, so that it's passed down in all cases */}
            </Container>
            {/* <FullWidthGrid /> */}
        </>
    )
}