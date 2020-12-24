import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    Paper,
    Typography
} from "@material-ui/core";

export default function OfferCard(props) {
    return (
        <Card>
            <CardActionArea>
                <h2>{props.title}</h2>
                {props.brief_desc && <p>{props.brief_desc}</p>}
                {props.order_msg && <p>{props.order_msg}</p>}
                {props.add_notes && <p>{props.add_notes}</p>}
            </CardActionArea>
        </Card>
    )
}