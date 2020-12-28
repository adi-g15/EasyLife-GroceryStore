import React, { useState } from "react";
import { 
	Card, 
	CardActionArea, 
	CardActions, 
	CardContent, 
	CardMedia, 
	Divider,
	Typography, 
	Button, 
	ButtonGroup, 
	IconButton,
	Fab,
	Paper,
	makeStyles
} from "@material-ui/core";
import { PlusOne, FormatIndentDecrease } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	root: {

	},
	priceBtn: {
		backgroundColor: theme.shape.borderRadius
	}
}));

export default function CartBox(props) {
	const name = props.data.name || "Unknown";
	const price = props.data.price || 0;
	const unit = props.data.unit || "kg";
	const [qntty, setQntty] = useState( props.data.qntty || 0 );  // quantity

	const classes = useStyles();

	function increaseQntty(){
		setQntty( qntty + 1 );
	}

	function decreaseQntty(){
		setQntty( Math.max( qntty - 1, 0 ) );
	}

	return (
		<>
			<Card className={classes.root} >
				<CardActionArea >
					<CardMedia 
						component="img"
						alt={`${name}`}
						height="100"
						image="/sabjis/temp.jpg"
						title={name}
					/>
					<Paper className={classes.priceBtn}
						style={{color: "rgba(0, 0, 0, 0.60)", fontSize: "1.2em",position: "absolute", left: "2%", top: "3%", backgroundColor: "rgba(0, 0, 0, 0.12)"}}
						// disabled
						elevation={1}
					>
						<div>{`₹ ${price}`}</div>
						<Divider 
							// variant=""
						/>
						<div style={{fontSize: "smaller"}}>{unit}</div>
					</Paper>
					<Fab 
						style={{position: "absolute", right: "2%", top: "3%"}}
						disabled
					>
						{`₹ ${price} /`}
						<Divider />
						{unit}
					</Fab>

					<CardContent>
						<Typography variant="h6" component="h2">    {/**why though ? */}
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<ButtonGroup>
						<IconButton 
							onClick={() => decreaseQntty}
							color="secondary">
							<FormatIndentDecrease />
						</IconButton>
						{qntty >= 1 ? 
							(<Button>
								{qntty}
							</Button>): 
							(<Button>
							Add
							</Button>)
						}
						<IconButton 
							onClick={() => increaseQntty /**Used arrow function since we need to bind it */}
							color="secondary">
							<PlusOne />
						</IconButton>
					</ButtonGroup>
				</CardActions>
			</Card>
		</>
	);
}
