import React, { useState } from "react";
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
	Divider
} from "@material-ui/core";
import { AccountTree, Search, AccountCircleRounded } from "@material-ui/icons";
import "fontsource-righteous/400.css";

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

export default function NavBar(props) {
	const [ isLoggedIn, setLoggedIn ] = useState(props.loggedIn || false);

	const classes = styling();

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
					 !props.isMobile && (<TextField 
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
						<Button>
							₹249
						</Button>
						{isLoggedIn ? 
							(
								<Button
									startIcon={<AccountCircleRounded/>}
								>
									Account
								</Button>
							) :
							(
								<Button
									startIcon={<AccountTree/>}
								>
									Login
								</Button>
							)
						}
					</ButtonGroup>
				</Toolbar>
			</AppBar>
		</header>
	)
}
