import { FetchPrices } from "../services/sabji_service";
import { SAVE_SABJIS } from "../constants/ActionTypes"

export function FetchSabjiAction() {
    return (dispatch) => {
        return FetchPrices()
            .then(array => {
                console.debug("Received sabjis: ", array)
                array.forEach(sabji => {
                    sabji.qntty = 0;
                });

                dispatch({
                    type: SAVE_SABJIS,
                    payload: array
                })

                return Promise.resolve( array );
            })
            .catch(err => {
                console.error(err);

                return Promise.resolve([]);
            })
    }
}
