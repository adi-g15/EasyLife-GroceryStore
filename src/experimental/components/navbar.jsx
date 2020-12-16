import React, { useState } from "react";
import { AppBar, InputAdornment, Container, makeStyles, TextField, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, Search } from "@material-ui/icons";
import "fontsource-righteous/400.css";

const _styling = {
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
	}
}

class NavBar extends React.Component {
	constructor( props ){
		super(props);

		this.state = {
			loggedIn: props.loggedIn || false
		};
	}

	setLogged( isLogged ){
		this.setState({loggedIn: isLogged});
	}

	componentDidUpdate(){}

	render() {
		return (
			<AppBar position="static">
				<Toolbar style={{backgroundColor: 'white'}}>
					<Container>
						{/* <img src="../assets/logo.png" alt="Logo"/> */}
						<Typography variant="h4" style={{fontFamily: 'Righteous'}}>
							<span style={{color: 'orange'}}>Easy</span>
							<span style={{color: 'green'}}>Life</span>
						</Typography>
					</Container>
					<TextField 
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
					/>
				</Toolbar>
			</AppBar>
		)
	}
}

export default NavBar;
