import React from "react";
import {
    Card,
    CardActionArea,
    Typography
} from "@material-ui/core";

export default function OfferCard(props) {
    return (
        <>
            <Card>
                <CardActionArea>
                    <Typography>
                        props.title
                    </Typography>
                </CardActionArea>
            </Card>
        </>
    )
}