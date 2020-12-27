import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_CART } from "../constants/ActionTypes";
import { SubmitCart as SubmitCartService } from "../services/cart_service";

/**
 * @special @note -> The action creators given here must not be async, since we are using index to splice the entry in REMOVE_ITEM
 * 
 * @note2 -> As of now, only SubmitCartAction is asynchronous
 * @important -> Since SubmitCartAction is async, IGNORE ANY CHANGE AFTER FIRST CALL TO SubmitCartAction()
 */

export function ClearCartAction() {
    return {    // can directly return an action too
        type: CLEAR_CART
    }
}

export function SubmitCartAction() {
    return (_dispatch,{cart}) => {

        SubmitCartService(cart || [])
            .then(({list, total}) => {

                // @note - May check if current total is same as one returned by server or not
                alert(`Cart Total - ${total} | ${list.join()}. After pressing OK you will proceed to put an order`);

                ClearCartAction();

                Promise.resolve({list, total});
            })
            .catch(err => {
                console.error(err);
                alert(err.message || "Couldn't Submit Cart");

                throw err;
            })
    }
}

    // returns undefined
export function AddToCartAction(sabji) {
    return (dispatch, {cart}) => {
        if( findIndexById(cart, sabji.id) !== -1 ) {
            return; // if already present in state, then just return, no need to change anything
        }

        dispatch({
            type: ADD_TO_CART,
            payload: {
                id: sabji.id,
                name: sabji.name,
                price: sabji.price,
                unit: sabji.unit
            }
        })
    };
}

export function RemoveFromCartAction (sabji_id) {
    return (dispatch, {cart}) => {
        if( findIndexById(cart, sabji_id) === -1 ) {
            return; // if NOT present, then return
        }

        dispatch({
            type: REMOVE_FROM_CART,
            payload: findIndexById(cart, sabji_id)   // then dispatch will splice this index
        })
    }
}

export function IncrementQuantity (sabji_id) {
    return (dispatch, {cart}) => {
        if( findIndexById(cart, sabji_id) === -1 ) {
            return AddToCartAction(sabji_id)(dispatch,{cart});
        }

        dispatch({
            type: INCREASE_QUANTITY,
            payload: findIndexById(cart, sabji_id)
        })
    }
}

export function DecrementQuantity (sabji_id) {
    return (dispatch, {cart}) => {
        let index = findIndexById(cart, sabji_id);
        if( index === -1 ) {
                return; // not present, DO NOTHING
        } else if( cart[index].qntty === 1 ) {  // if only one was present, then remove that item
            return RemoveFromCartAction(sabji_id)(dispatch, {cart});
        }

        dispatch({
            type: DECREASE_QUANTITY,
            payload: findIndexById( cart, sabji_id)
        })
    }
}

function findIndexById(cart, id) {
    for (let i = 0; i < cart.length; i++) {
        if( cart[i].id === id ) return i;
    }
    return -1;
}
