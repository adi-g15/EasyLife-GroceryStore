import React from "react"
import {
    Grid,
    Card,
    Typography,
    CardActionArea
} from "@material-ui/core";
import LoadingBox from "./loadingBox";

export default function(props){
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
    )
}
