import React from "react";
import CartBox from "../components/cartbox";
import { useSelector } from "react-redux";
import { Container, Grid, makeStyles } from "@material-ui/core";

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
			<Container>
				<div className={classes.cartArea}>
					{
						cart.map(
							(sabji, index) => (<CartBox org_data={ findSabjiById( cart, sabji.id) } key={sabji.id} />)
						)
					}
				</div>
			</Container>
			<div className={classes.totalArea}>
                Current Cart Total is {cartTotal}
			</div>
		</>
	);
}


function findSabjiById( sabjis, id ) {
	if( Array.isArray(sabjis) ) {
		return sabjis.find((sabji) => sabji.id === id);
	}
}
