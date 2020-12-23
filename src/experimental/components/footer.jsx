import React from "react"
import {
    Container,
    Typography,
    ButtonGroup,
    IconButton,
    Paper,
    makeStyles
} from "@material-ui/core";
import { MailRounded, Facebook, WhatsApp } from "@material-ui/icons";

const useStyles = makeStyles({
    footer_green: {
        margin: 0,
        padding: 20,
        backgroundColor: "rgba(19, 174, 19, 0.71)",
        color: "white"
    }
})

export default function (props) {
    let isMobile = props.isMobile;
    const classes = useStyles();

    return (
        <footer>
            <Paper elevation={0} square className={classes.footer_green}> {/**rounded corners disabled */}
                <Typography variat="h6" component="h5" align="center">
                    Order groceries online, and we help ease your life a bit more
                </Typography>
                <hr />
                <Typography variant="h6" align="center">
                    Help / Feedback
                </Typography>
                    <Container style={{display: 'flex', justifyContent: "center"}}>
                        <ButtonGroup color="inherit" align="center">
                            <IconButton>
                                <MailRounded />
                            </IconButton>
                            <IconButton>
                                <Facebook />
                            </IconButton>
                            <IconButton>
                                <WhatsApp />
                            </IconButton>
                        </ButtonGroup>
                    </Container>
            </Paper>
        </footer>
    )
}