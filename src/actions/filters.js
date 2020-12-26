import { SET_SEARCH } from "../constants/ActionTypes";

export function UPDATE_SEARCH_QUERY(query) {
    return (dispatch) => {
        dispatch({
            type: SET_SEARCH,
            payload: query
        });
    }
}
