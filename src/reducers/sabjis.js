import {} from "../constants/ActionTypes"

const initialState = [] // simply just a list

    // ie. a ProductReducer
export default function SabjiReducer (state = initialState, action ) {
    switch (action.key) {
        case SAVE_PRODUCTS:
            return [
                ...state,
                ...action.payload   // expecting an array
            ]
        default:
            return state;
    }
}
