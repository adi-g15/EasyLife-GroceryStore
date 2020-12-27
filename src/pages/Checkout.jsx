import React from "react"
import CartBox from "../components/cartbox";
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cartArea: {
        
    },
    totalArea: {
        
    }
});

export default function CartPage() {
    const cart = useSelector(state => state.cart) || [];

    const cartTotal = cart.reduce((accumuate, curr) => accumuate + curr);
    const classes = useStyles();

    return (
        <>
            <div className={classes.cartArea}>
                {
                    cart.map(
                        (sabji, index) => (<CartBox data={sabji} key={index} />)
                    )
                }
            </div>
            <div className={classes.totalArea}>
                Current Cart Total is {cartTotal}
            </div>
        </>
    )
}
