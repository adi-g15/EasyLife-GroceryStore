import { CLEAR_USER, STORE_USER } from "../constants/ActionTypes";

const token = JSON.parse( localStorage.getItem('token') );    // if token not avaialable, then getItem returns `null`, and JSON.parse(null) returns null
const user = JSON.parse( localStorage.getItem('user') );

const initialState = {
    user,
    token,
    isLoggedIn: user ? true: false
}

export default function UserReducer( state = initialState, action){
    const newState = Object.assign({}, state);

    switch (action.type) {
        case STORE_USER:
            localStorage.setItem('user', JSON.stringify({
                uname: action.payload.uname,
                pass: action.payload.pass,
                contact: action.payload.contact
            }))

            return newState;

        case CLEAR_USER:
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            return { isLoggedIn: false };

        default:
            return state;
    }
}
