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
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "rgba(19, 174, 19, 0.71)",
        color: "white",
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    footer_msg: {
        padding: 4
    }
})

export default function (props) {
    let isMobile = props.isMobile;
    const classes = useStyles();

    return (
        <footer>
            <Paper elevation={0} square className={classes.footer_green}> {/**rounded corners disabled */}
                <Typography className={classes.footer_msg} variat="h6" component="h5" align="center">
                    Order groceries online, and we help ease your life a bit more
                </Typography>
                <hr />
                <Typography variant="h6" align="center">
                    Help / Feedback
                </Typography>
                    <Container style={{display: 'flex', justifyContent: "center"}}>
                        <ButtonGroup color="inherit" align="center">
                            <IconButton target="_blank" href="mailto:email@notyetmade.com">
                                <MailRounded />
                            </IconButton>
                            <IconButton target="_blank" href="http://m.me/<PAGE_NAME>">
                                <Facebook />
                            </IconButton>
                            <IconButton target="_blank" href="https://wa.me/918700905832?text=*Info%2FFeedback%20on%20EasyLife*%20-%3E">
                                <WhatsApp />
                            </IconButton>
                        </ButtonGroup>
                    </Container>
            </Paper>
        </footer>
    )
}