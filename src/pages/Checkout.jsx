import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CartBox from "../components/cartbox";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, makeStyles } from "@material-ui/core";
import { ClearCartAction } from "../actions/cart";

const useStyles = makeStyles({
	cartArea: {
		textAlign: "center"
	},
	totalArea: {
		
	}
});

export default function CartPage() {
	const cart = useSelector(state => state.cart) || [];

	const cartTotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qntty), 0);
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const name = useSelector(state => state.auth.user.contact || state.auth.user.uname);

	useEffect(() => {
		console.log("CartTotal refreshed, ", cartTotal);
	}, [cartTotal]);

	function SubmitCart(e) {
		e.preventDefault();

		const msg = `
	ORDER DETAILS
	-----------------
	User - ${name}

	${cart.map((sabji => [sabji.name,sabji.price,"/",sabji.unit].toString())).join("\t\n")}
		`;

		if ( ! window.open( encodeURI("https://wa.me/918700905832?text=" + msg ), "_blank") ){
			alert(encodeURI("https://wa.me/918700905832?text=" + msg ));
		}

		// @future @someone - Can add verification by first sending the order details to backend, then it responds with a order id, and we only send the order id and list of sabjis to whatsapp

		if( confirm("Do you want to clear the cart now ? 🤔") ){
			dispatch(ClearCartAction());
		}
	}

	return (
		<>
			<Container className={classes.cartArea}>
				<div>
					{
						cart.map(
							(sabji, index) => <CartBox org_data={sabji} key={index} />
							// (sabji, index) => (<CartBox org_data={ findSabjiById( cart, sabji.id) } key={sabji.id} />)
						)
					}
				</div>
				<Button
					color="secondary"
					variant="contained"
					onClick={SubmitCart}
				>
					Order on whatsapp🍅🎍
				</Button>
			</Container>
			<div className={classes.totalArea}>
                Current Cart Total is {`${cartTotal}`}
			</div>
		</>
	);
}


function findSabjiById( sabjis, id ) {
	if( Array.isArray(sabjis) ) {
		return sabjis.find((sabji) => sabji.id === id);
	}
}
