import React, { useEffect, useState } from "react";
import SabjiArea from '../components/sabjiArea';
// import Carousel from "react-material-ui-carousel"
import OfferCarousal from "../components/offerCarousal";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
let items = [
    {
        title: "Offer 1 Here",
        desc: "Try your luck bhai"
    },
    {
        title: "Offer 1 Here",
        desc: "Try your luck bhai"
    },
    {
        title: "Offer 1 Here",
        desc: "Try your luck bhai"
    }
]

export default function Home(props) {
    return (
    <>
        <OfferCarousal />
        <SabjiArea isMobile={props.isMobile} />
    </>);
}
