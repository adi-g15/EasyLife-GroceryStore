import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
	AppBar, 
	InputAdornment, 
	Container, 
	ButtonGroup, 
	makeStyles, 
	TextField, 
	Toolbar, 
	Typography, 
	Button,
	IconButton
} from "@material-ui/core";
import { AccountTree, ShoppingCartRounded, Search, AccountCircleRounded } from "@material-ui/icons";
import "fontsource-righteous/400.css";
import { UpdateSearchAction } from "../actions/filter";

const styling = makeStyles( theme => ({
	toolbar: {
		backgroundColor: theme.palette.common.white,
	},
	mobile_toolbar: {
		backgroundColor: theme.palette.common.white,
		paddingLeft: 2
	}
}));

function NavBar(props) {
	const history = useHistory();
	// todo -> Instead of setCartTotal, fetch it from store, and change there itself

	let cartTotal = 5;
	const classes = styling();

	useEffect(() => {
		cartTotal = props.cart.length !== 0 ? props.cart.reduce((acc, curr) => (acc+curr)) : 0;
	});

	const handleAccClick = () => {
		if( ! props.isLoggedIn ){
			history.push("/login");
			window.location.reload();
		}
	};

	const handleCartClick = () => {
		if( ! props.isLoggedIn ){
			history.push("/login");
			window.location.reload();
		}

		// alert("Please first Login... And your cart will still be stored, you don't have to think of that");
	};

	return (
		<header>
			<AppBar position="static">
				<Toolbar className={ props.isMobile ? classes.mobile_toolbar : classes.toolbar}>
					<Container>
						{/* <img src="/logo.png" alt="EasyLife" height="75%"/> */}
						<Typography variant="h4" style={{fontFamily: "Righteous"}}>
							<span style={{color: "orange"}}>Easy</span>
							<span style={{color: "green"}}>Life</span>
						</Typography>
					</Container>
					{
						props.isMobile ? 
							(
								<IconButton>
									<Search />
								</IconButton>
							):
							(<TextField 
								// style={styling.search}
								label="Search..." 
								variant="outlined" 
								size="small" 
								type="text"
								value={props.search}
								onChange={props.updateSearch}
								InputProps={
									{
										startAdornment: (
											<InputAdornment position="start">
												<Search />
											</InputAdornment>
										)
									}
								}
							/>)}
					<ButtonGroup style={{marginLeft: props.isMobile ? 0 :20}}>
						<Button variant="outlined" onClick={handleCartClick}>
							{
								props.isMobile && (
									<ShoppingCartRounded style={{marginRight: 6}} />)
							}
						₹{cartTotal}
						</Button>
						{props.isLoggedIn ? 
							(
								props.isMobile ? 
									(
										<Button>
											<AccountCircleRounded />
										</Button>
									):
									(<Button
										startIcon={<AccountCircleRounded/>}
									>
									Account
									</Button>)
							) :
							(
								props.isMobile ? 
									(
										<Button
										// @future - this can be a DROPDOWN too
											onClick={handleAccClick}
										>
											<AccountTree />
										</Button>
									):
									(<Button
										onClick={handleAccClick}
										startIcon={<AccountTree/>}
									>
										{ !props.isMobile &&"Login"}
									</Button>)
							)
						}
					</ButtonGroup>
				</Toolbar>
			</AppBar>
		</header>
	);
}

function mapStateToProps(state) {
	return {
		isMobile: state.screen.isMobile,
		cart: state.cart,
		isLoggedIn: state.user.isLoggedIn,
		search: state.filter.search
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateSearch: (e) => {
			// @note - Come here;be sure to sanitize the string here
			// After this do minor change to cart boxes, and verify all works well
			console.debug(e.target.value);

			dispatch(UpdateSearchAction( 
				e.target.value.slice(
					0,
					e.target.value.length - ( e.target.value.endsWith("/") ? 1: 0 )
				)
			));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
