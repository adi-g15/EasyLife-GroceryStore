import { SignupCustomer } from "../services/user_service"
import { STORE_USER } from "../constants/ActionTypes"

/**
 * @note -> Saving to storages is the task of these action creators themselves, not the reducers, reducers only for modifying state, and services only for contacting the api
 */

export function CustLoginCreator( uname, pass, rememberMe ) {
    return (dispath) => {
        
    }
}

export function CustSignupCreator( uname, pass, contact, rememberMe ) {
    const storage = rememberMe ? localStorage : sessionStorage;
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    return (dispath) => {
        SignupCustomer(uname, pass, contact)
            .then(({user, token}) => {
                storage.setItem('user', JSON.stringify({
                    uname: user.uname,
                    contact: user.contact
                }))
                storage.setItem('token', token);    // should be a string by itself

                dispath({
                    type: STORE_USER,
                    payload: user   // token NOT required to be in store
                })

                dispath({
                    type: SIGNUP_SUCCESS
                })

                Promise.resolve();
            })
            .catch(err => {
                dispath({
                    type: SIGNUP_FAIL
                })
            })
    }
}
