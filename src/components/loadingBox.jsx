import React from "react";
import {
	Grid,
	Card,
	Typography,
	CardActionArea
} from "@material-ui/core";

export default function LoadingBox(){
	return (
		<Grid item>
			<Card>
				<CardActionArea>
					<Typography variant="h6">
                        Loading...
					</Typography>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
