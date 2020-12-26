import React, { useRef, useState } from "react"
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
import { LoginAction } from "../actions/cust";
import {} from "../actions/cust";

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
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const classes = useStyles();

    function submitHandler(event) {
        event.preventDefault();
        event.target.disabled = true;

        dispatch( LoginAction( usernameField.current.value, passwordField.current.value ) )
            .then(() => {
                props.history.push("/") // @future -> When profile page is okay, redirect to '/me' route instead
                window.location.reload();
            })
            .catch(() => {

            })
            .finally(() => {
                setLoading(false)
            })

        event.target.disabled = false;
    }

    return (
        <>
            <Container className={classes.boxContainer}>
                <Paper className={classes.LoginBox}>
                    <form
                        onSubmit={submitHandler}
                    >
                        <Typography style={{marginBottom: '2%'}} variant="h4">
                            Sign Up
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
                        <TextField 
                            ref={cnfrmpasswordField}
                            color="secondary"
                            label="Confirm Password"
                            placeholder="Repeat the password..."
                            margin="normal"
                            required
                            // onChange={() => setPassword(passwordField.current.value)}
                        />
                        <br />
                        <TextField 
                            ref={mobileField}
                            color="secondary"
                            label="Mobile Number"
                            helperText="Optional..."
                            margin="normal"
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
                            disabled={loading ? true: false}
                            variant="contained"
                            type="submit"
                        >
                            SignUp
                        </Button>
                        <Typography
                            style={{fontSize: '1em', margin: '1%'}}
                        >
                        New User ? <Link to="/signup">Sign up Here</Link>
                        </Typography>
                    </form>
                </Paper>
            </Container>
        </>
    )
}
