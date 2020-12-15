import * as Action from '../constants/ActionTypes';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];	// either empty or from localStorage

const findIndexById = (arr, id) => {
	if( !Array.isArray(arr) ){
		return -1;
		// return null;
	}

	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i]._id === id) return i;
		}
	}
	return -1;
};

const cart = (state = initialState, action) => {
	let newState = [...state];
	let index = -1;

	switch (action.type) {
		case Action.ADD_TO_CART:
			const product = action.payload;
			// newState = [...state];
			index = findIndexById(newState, product._id);
			if (index < 0) newState.push(product);
			else newState[index].quantity++;
			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;

		case Action.INCREASE_QUANTITY:
			// newState = [...state];
			index = findIndexById(newState, action.id);
			if (index >= 0) newState[index].quantity++;
			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;

		case Action.DECREASE_QUANTITY:
			// newState = [...state];
			index = findIndexById(newState, action.id);
			if (index >= 0 && newState[index].quantity > 1)
				newState[index].quantity--;
			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;

		case Action.DELETE_PRODUCT:
			// newState = [...state];
			index = findIndexById(newState, action.id);
			if (index >= 0) {
				newState.splice(index, 1);
			}
			localStorage.setItem('cart', JSON.stringify(newState));
			return newState;
		default:
			return state;
	}
};

export default cart;
