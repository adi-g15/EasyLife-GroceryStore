import * as Types from '../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));
const initialState = data ? data : [];

	// the state in our case is just an ARRAY
const cart = (state = initialState, action) => {
	let newState = [];
	let index = -1;

	newState = [...state];

	/**ADD and INCREMENT both work the same way WHEN QUANTITY = 0*/
	/**DELETE and DECREMENT both work the same way WHEN QUANTITY = 0*/

	switch (action.type) {
		case Types.ADD_TO_CART:
			const product = action.payload;

			index = findIndexById(newState, product._id);
			if (index < 0){// if not in cart, then push ot state
				newState.push(product);
				product.quantity = 1;
			}	
			// else newState[index].quantity++;	// else, DON'T INCREASE QUANTITY, JUST LEAVE IT BE

			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;

		case Types.INCREASE_QUANTITY:

			index = findIndexById(newState, action.id);
			if (index >= 0) newState[index].quantity++;	// if not found, then don't bother
			else{ // if not in cart, then push to state
				newState.push(product);
				product.quantity = 1;
			}	

			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;

		case Types.DECREASE_QUANTITY:
			index = findIndexById(newState, action.id);
			if (index >= 0){
				if( newState[index].quantity > 1 ){
					newState[index].quantity--;
				}else{
					newState.splice(index, 1);	// delete the element
				}
			}

			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;

		case Types.DELETE_PRODUCT:	// this type is to be given only at cart
			index = findIndexById(newState, action.id);
			if (index >= 0) {
				newState.splice(index, 1);	// remove element at index
			}

			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;

		default:
			return state;
	}
};

const findIndexById = (arr, id) => {
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i]._id === id) return i;
		}
	}
	return -1;
};

export default cart;
