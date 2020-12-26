import React, { useState } from "react";
import { useHistory } from "react-router-dom"
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
import { SUBMIT_CART } from "../constants/ActionTypes";

const styling = makeStyles( theme => ({	// not naming useStyles Just to check
	navbar: {
		width: 'calc( 100% - 4px - 4vw )',  /*subtract border width from both sides + margins*/
		backgroundColor: 'white',
		borderColor: 'grey',
		borderStyle: 'solid',
		borderWidth: '1px',
		borderRadius: '6px',
		display: 'flex',
		marginTop: '2vh',
		marginBottom: '3vh',
		marginLeft: '2vw',
		marginRight: '2vw',
	},
	logo: {
		fontSize: '1.2em',
		justifyContent: 'center',
		display: 'contents',
	},
	search: {
		textAlign: 'left',
		left: '50%',
		display: 'flex',
		justifyContent: 'center',
		margin: '1.5vh 2vw',
	},
	search_input_type_search: {
		borderRadius: '20px',
		fontSize: '1.3em',
		padding: '1vh 2vw',   /* it is padding: vertical horizontal*/
	},
	toolbar: {
		backgroundColor: theme.palette.common.white,
	},
	mobile_toolbar: {
		backgroundColor: theme.palette.common.white,
		paddingLeft: 2
	}
}))

function NavBar(props) {
	// const [ isLoggedIn, setLoggedIn ] = useState(props.loggedIn || false);
	// const [ cartTotal, setCartTotal ] = useState(249);
	const history = useHistory();
	// todo -> Instead of setCartTotal, fetch it from store, and change there itself

	const classes = styling();

	const handleAccClick = (e) => {
		e.preventDefault();

		if( ! props.isLoggedIn ){
			history.push('/login');
			window.location.reload();
		}
	}

	return (
		<header>
			<AppBar position="static">
				<Toolbar className={ props.isMobile ? classes.mobile_toolbar : classes.toolbar}>
					<Container>
						{/* <img src="/logo.png" alt="EasyLife" height="75%"/> */}
						<Typography variant="h4" style={{fontFamily: 'Righteous'}}>
							<span style={{color: 'orange'}}>Easy</span>
							<span style={{color: 'green'}}>Life</span>
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
					<Button variant="outlined" onClick={props.handleCart}>
						{
							props.isMobile && (
								<ShoppingCartRounded style={{marginRight: 6}} />)
						}
						₹{props.cartTotal}
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
	)
}

function mapStateToProps(state) {
	window.state = state;
	return {
		isMobile: state.screen.isMobile,
		cartTotal: state.cart.length !== 0 ? state.cart.reduce((acc, curr) => (acc+curr)) : 0,
		isLoggedIn: state.user.isLoggedIn
	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleCart: (e) => {
			e.preventDefault();

			// return Promise
			dispatch({type: SUBMIT_CART});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
