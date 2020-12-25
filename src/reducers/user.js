import {} from "../constants/ActionTypes";

const user = JSON.parse( localStorage.getItem('user') );    // if user not avaialable, then getItem returns `null`, and JSON.parse(null) returns null

const initialState = {
    user,
    isLoggedIn: user ? true: false
}

export default UserReducer( state = initialState, action ) {
    const newState = Object.assign({}, state);

    switch (action.type) {
        default:
            return state;
    }
}
