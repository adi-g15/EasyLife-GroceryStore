import React, { useEffect, useState } from "react";
import SabjiArea from '../components/sabjiArea';
// import Carousel from "react-material-ui-carousel"
import Carousel from "react-multi-carousel"
import OfferCard from "../components/offer";
import { FetchOffers } from "../services/offer_service";
import { Card } from "@material-ui/core";

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
    const [ offers, setOffers ] = useState([])
    const [ offersLoading, toggleOffersLoading ] = useState(true)

    useEffect(async () => {
        if(offersLoading){
            const offerList = await FetchOffers().catch(err => {console.error(err); return [];})

            setOffers(offerList);
            toggleOffersLoading(false);
        }
    })

    return (
    <>
        {/* <Carousel swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={1000} keyBoardControl={true} showDots={true} responsive={responsive}>
            {/* {offersLoading ? (
                    <>
                    </>
                ):
                (
                    <> */}
                    {/* </>
                )
                    // offers.map((offer, index) => (
                    //     <OfferCard 
                    //         title={offer.product} 
                    //         brief_desc={offer.offer_brief} 
                    //         order_msg={offer.order_msg} 
                    //         add_notes={offer.add_notes} 
                    //         key={index} />
                    // ))
            } */}
        {/* <Carousel autoPlay={true} interval={3000} indicators={true} navButtonsAlwaysVisible={true} >
            {
                
            }
            {items.map((item, index) => <OfferCard title={item.title} desc={item.desc} key={index} />)}
        </Carousel> */}
        <SabjiArea isMobile={props.isMobile} />
    </>);
}
