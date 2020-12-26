import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    Button,
    Checkbox,
    Container,
    Divider,
    Typography,
    TextField,
    makeStyles,
    Paper
} from "@material-ui/core";
import { LoginCustomer } from "../services/user_service";

const useStyles = makeStyles({
    boxContainer: {
        padding: '2%'
    },
    LoginBox: {
        textAlign: 'center',
        padding: '2%',
        backgroundColor: 'rgb(240, 239, 239)'
    }
})

export default function () {
    const usernameField = useRef(null);
    const passwordField = useRef(null);
    const rememberMeBox = useRef(null);

    const dispatch = useDispatch();

    const classes = useStyles();

    function submitHandler(event) {
        event.preventDefault();
        event.target.disabled = true;

        const { user, token } = await LoginCustomer( usernameField.current.value, passwordField.current.value );
        rememberMeBox.current.checked ? {
            dispatch()
        }: {
            
        };

        event.target.disabled = false;
    }

    return (
        <>
            <Container className={classes.boxContainer}>
                <Paper className={classes.LoginBox}>
                    <Typography style={{marginBottom: '2%'}} variant="h4">
                        Login
                    </Typography>
                    <Divider 
                        variant="middle"
                    />
                    <TextField
                        ref={usernameField}
                        autoFocus={true}
                        color="secondary"
                        type="email"
                        label="Email/Mobile"
                        placeholder="Username"
                        helperText="You can also enter username..."
                        margin="normal"
                        required
                        // onChange={() => setUserName(usernameField.current.value)}
                    />
                    <br />
                    <TextField 
                        ref={passwordField}
                        color="secondary"
                        label="Password"
                        placeholder="Enter your password..."
                        helperText="Shh... Password"
                        margin="normal"
                        required
                        // onChange={() => setPassword(passwordField.current.value)}                        
                    />
                    <br />
                    <Checkbox 
                        ref={rememberMeBox}
                        color="secondary"
                        defaultChecked={true}
                        helperText="Remember Me"
                    />
                    <span style={{color: "#404040", fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>Remember Me</span>
                    <br />
                    <Button
                        variant="contained"
                        onClick={submitHandler}
                    >
                        Login
                    </Button>
                    <Typography
                        style={{fontSize: '1em', margin: '1%'}}
                    >
                    New User ? <Link to="/signup">Sign up Here</Link>
                    </Typography>
                </Paper>
            </Container>
        </>
    )
}
