import { SAVE_SABJIS } from "../constants/ActionTypes"

const initialState = [] // simply just a list

    // ie. a ProductReducer
export default function SabjiReducer (state = initialState, action ) {
    switch (action.type) {
        case SAVE_SABJIS:
            console.log('Will send: ', [
                ...state,
                ...action.payload   // expecting an array
            ]);
            return [
                ...state,
                ...action.payload   // expecting an array
            ]
        default:
            return state;
    }
}
