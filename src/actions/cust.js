import { SignupCustomer } from "../services/user_service"
import { STORE_USER, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../constants/ActionTypes"

/**
 * @note -> Saving to storages is the task of these action creators themselves, not the reducers, reducers only for modifying state, and services only for contacting the api
 */

export function CustLoginCreator( uname, pass, rememberMe ) {
    return (dispath) => {
        
    }
}

export const CustSignupCreator = ( uname, pass, contact, rememberMe ) => {
    console.debug(uname,pass,contact,rememberMe);
    const storage = rememberMe ? localStorage : sessionStorage;
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    return (dispatch) => {
        console.debug(`Going to call signup service, recieved dispatch: `, dispatch, uname,pass,contact,rememberMe)
        return SignupCustomer(uname, pass, contact)
            .then((data) => {
            // .then(({user, token}) => {
                console.debug("Success signup service", data)
                storage.setItem('user', JSON.stringify({
                    uname: data.user.uname,
                    contact: data.user.contact
                }))
                storage.setItem('token', data.token);    // should be a string by itself

                dispatch({
                    type: STORE_USER,
                    payload: data.user   // token NOT required to be in store
                })

                dispatch({
                    type: SIGNUP_SUCCESS
                })

                return Promise.resolve();
            })
            .catch(err => {
                console.debug("Error signup service", err)
                dispatch({
                    type: SIGNUP_FAIL
                })

                throw err;
            })
    }
}
