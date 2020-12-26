import { SET_SEARCH } from "../constants/ActionTypes";

const initialState = {
    search: '',
    // price: { // not being used currently
    //     min: 0,
    //     max: Infinity
    // }
}

export default function filterReducer(state = initialState, action) {
    switch (action.key) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }

        default:
            return state;
    }
}
