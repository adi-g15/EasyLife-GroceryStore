import React from "react";
import SabjiArea from '../components/sabjiArea';
import Carousel from "react-material-ui-carousel"
import OfferCard from "../components/offer";

export default function Home(props) {
    return (
    <>
        <Carousel>
            
        </Carousel>
        <SabjiArea isMobile={props.isMobile} />
    </>);
}
