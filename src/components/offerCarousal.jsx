import React, { useState, useEffect } from "react";
import { Card, CardActionArea, makeStyles } from "@material-ui/core";
import { FetchOffers } from "../services/offer_service";
import OfferCard from "./offer";

const useStyles = makeStyles({
    slider: {
        position: "relative",   // not required in my case actually, the yt tutorial did so
        border: "1px solid red",
        width: 100 + '%',
        height: "50%",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",    /// middle vertically
        overflow: "hidden",
    },

    slide: {
        border: "1px solid blue",
        minWidth: "96%",
        height: "96%",
        margin: "2%",   // 2% vertically horizontally all sides
        overflow: 'hidden',
        transition: '0.5s'
    },
    baseNavBtn: {

    },
    leftBtn: {
        position: "absolute",
        left: '2%',
        height: "80%",
        width: '5%',
        background: 'none',
        border: 0,
        outline: 0
    },
    rightBtn: {
        position: "absolute",
        right: '2%',
        height: "80%",
        width: '5%',
        background: 'none',
        border: 0,
        outline: 0

    }

});

// React component names must start with an uppercase letter  react-hooks/rules-of-hooks
export default function OfferCarousal() {
    const classes = useStyles();

    const [slideIndex, setSlideIndex] = useState(0);

    const [ offerList, setOffers ] = useState([])
    const [ offersLoading, toggleOffersLoading ] = useState(true)

    useEffect(async () => {
        if(offersLoading){
            const newOffers = await FetchOffers().catch(err => {console.error(err); return [];})
            // const newOffers = [
            //     {product: "hi1", offer_brief: "bye10"},
            //     {product: "hi2", offer_brief: "bye20"},
            //     {product: "hi3", offer_brief: "bye40"},
            //     {product: "hi4", offer_brief: "bye60"},
            //     {product: "hi5", offer_brief: "bye80"}
            // ];

            setOffers(newOffers);
            toggleOffersLoading(false);
        }
    })

    function goLeft() {
        if( slideIndex === 0 ){
            setSlideIndex( offerList.length - 1 );
        }else{
            setSlideIndex( slideIndex - 1 );
        }
    }

    function goRight() {
        if( slideIndex === offerList.length - 1 ){
            setSlideIndex( 0 );
        }else{
            setSlideIndex( slideIndex + 1 );
        }
    }

    return (
        <div className={classes.slider}>
            {
                offerList.map((item, index) => (
                    <div className={classes.slide} key={index} style={{transform: `translateX(${ -(slideIndex*104)}%)`}}>
                        <OfferCard 
                            title={item.product} 
                            brief_desc={item.offer_brief} 
                            order_msg={item.order_msg} 
                            add_notes={item.add_notes} 
                            key={index} />
                    </div>
                ))
                // sliderArr.map((item, index) => (
                //         <Card className={classes.slide_card}>
                //             <CardActionArea style={{height: '100%'}}>
                //                 {item.title}
                //             </CardActionArea>
                //         </Card>
                // ))
            }
            <button className={classes.leftBtn} onClick={goLeft} >{"<"}</button>
            <button className={classes.rightBtn} onClick={goRight} >{">"}</button>
        </div>
    )
}