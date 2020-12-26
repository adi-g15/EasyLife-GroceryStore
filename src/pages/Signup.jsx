import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    Button,
    Checkbox,
    Container,
    Divider,
    Typography,
    TextField,
    makeStyles,
    Paper,
    InputAdornment
} from "@material-ui/core";
import { CustSignupCreator } from "../actions/cust";
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

export default function SignUpPage(props) {
    // const usernameField = useRef(null);
    // const passwordField = useRef(null);
    const cnfrmpasswordField = useRef(null);
    const mobileField = useRef(null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmpassword, setCnfrmpassword] = useState('');
    const [mobile, setMobile] = useState(null);
    const [rememberMe, toggleRememberMe] = useState(true);

    const [loading, setLoading] = useState(false);
    let errorFlag = false;

    const history = useHistory();
    const dispatch = useDispatch();

    const classes = useStyles();

    function submitHandler(event) {
        event.preventDefault();

        console.debug( "Going to call signup CREATOR: " );

        if( password !== cnfrmpassword ) {
            cnfrmpasswordField.current.error = true;
            cnfrmpasswordField.current.helperText = "Passwords not matching...";

            errorFlag = true;
        }
        if( mobile.toString().length !== 10 ) {
            mobileField.current.error = true;
            mobileField.current.helperText = "Passwords not matching";

            errorFlag = true;
        }

        if( errorFlag ){
            return setLoading(false);
        }

            /* 
                THis dispatch is actually a wrapper, applied by redux-thunk, over the actual dispatch by redux
                when we pass a function to dispatch(ie. dispatch(action); $where action is a function$),
                THEN what dispatch does is -> 

                    function (action) {
                        if (typeof action === 'function') {
                        return action(dispatch, getState, extraArgument);
                        }

                        return next(action);
                    }

                    // note - This isn't the original behaviour, it's due to the middleware applied
            */
        dispatch(CustSignupCreator( username, password, mobile, rememberMe ))
            .then(() => {
                console.debug("Successful");
                history.push("/") // @future -> When profile page is okay, redirect to '/me' route instead
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
                alert( err.msg || err.err || "Couldn't Sign Up");
            })
            .finally(() => {
                setLoading(false)
            })
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
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus={true}
                            label="Email/Mobile"
                            placeholder="Username"
                            helperText="You can also enter username..."
                            margin="normal"
                            fullWidth
                            required
                            // onChange={() => setUserName(usernameField.current.value)}
                        />
                        <br />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            placeholder="Enter your password..."
                            helperText="Shh... Password"
                            type="password"
                            margin="normal"
                            required
                            // onChange={() => setPassword(passwordField.current.value)}
                        />
                        <br />
                        <TextField
                            ref={cnfrmpasswordField}
                            onChange={(e) => setCnfrmpassword(e.target.value)}
                            label="Confirm Password"
                            placeholder="Repeat the password..."
                            type="password"
                            margin="normal"
                            required
                            // onChange={() => setPassword(passwordField.current.value)}
                        />
                        <br />
                        <TextField
                            ref={mobileField}
                            onChange={(e) => setMobile(e.target.value)}
                            label="Mobile Number"
                            helperText="Optional..."
                            margin="normal"
                            type="number"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>
                            }}
                            // onChange={() => setPassword(passwordField.current.value)}
                        />
                        <br />
                        <Checkbox
                            onChange={(e) => toggleRememberMe(e.target.checked)}
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
