import React, { useEffect, useState } from "react";
import SabjiBox from "./sabjibox";
import LoadingBoxArea from "./loadingBoxArea";
import {
	Container,
	Grid,
	makeStyles
} from "@material-ui/core";
import { FetchPrices }  from "../services/sabji_service";

const useStyles = makeStyles({
	container: {
		paddingTop: 30,
		paddingBottom: 30
	}
});

export default function SabjiArea(props) {

	/**
	 * @note -> Currently i am providing two ways to get the list of sabjis
	 *          1. Pass from the main application as `props` to this
	 *          2. Fetch when this component begins to mount, in componentWillMount() lifetime method
	 */
	const [list, setList] = useState([]);
	const [numBoxes, setNumBoxes] = useState(10);   // number of boxes that will be shown as loading, till data isn't finally received from the server
	const [loading, setLoading] = useState(true);

	// const [priceFilter, setPriceFilter] = useState([0,Infinity]);
	// const [sortingOrder, setSortingOrder] = useState(null);
	const nameFilter = props.nameFilter;    // state of the parent

	const isMobile = props.isMobile || false;
	// const [flag, setFlag] = useState(0);

	const classes = useStyles();

	useEffect(async () => {
		// set the boxes as loading
		if(loading){
			const tmpList = await FetchPrices();
			setList(tmpList || []);
			setLoading(false);
		}
	})

	return (
		<>
			{loading ?
				<LoadingBoxArea num={numBoxes} />
				: (<Container>
					<Grid container spacing={ isMobile ? 2 : 4} className={classes.container} justify="center">
					{
						list.map(
							(sabji, index) => (
								<Grid item xs={6} sm={4} md={3} style={{textAlign: 'center'}}>
									<SabjiBox data={sabji} key={index} />
								</Grid>
							)
						)
					}
					</Grid>
				</Container>)
			}
		</>
	)
}
