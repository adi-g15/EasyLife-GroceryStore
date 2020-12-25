import { CUST_LOGIN_URL, CUST_SIGNUP_URL } from "../constants/BaseURL";
import { isEmail, isMobile } from "../util/validators";

    // think -> If the idea seems better, we can have this function return a Promise containing a BOOLEAN
export function LoginCustomer(uname, pass) {
    return fetch(
        CUST_LOGIN_URL,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: uname,
                password: pass
            })
        }
    ).then(response => response.json())
}

export function SignupCustomer(uname, pass, contact) {
    const regObj = {
        password: pass,
        contact: contact
    }

    if( contact === '' ) {
        if( isEmail(uname) || isMobile(uname) ){
            regObj['contact'] = uname;
        }
    } else if( uname !== contact ){ // iff uname is different, only then will contact be set
        regObj['username'] = uname;
    }   // else if both contact and username were same, server will consider uname and contact are same

    return fetch(
        CUST_SIGNUP_URL,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( regObj )
        }
    ).then(response => response.json())
}
