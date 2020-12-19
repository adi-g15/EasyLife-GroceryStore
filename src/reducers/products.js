import * as Types from '../constants/ActionTypes';

const initialState = {
	data: [],
	limit: 12,
	keyword: '',
	category: '',
	total: 13,
	isLoadMore: false,
	loading: true,
	hasMore: true,
};

const products = (state = initialState, action) => {
	let newState = {};

	let hasMore;
	let { limit, total } = state;

	switch (action.type) {
		case Types.FETCH_PRODUCTS:
			let { products } = action;
			hasMore = total > limit ? true : false;
			newState = {
				...state,
				data: products.data,
				total: products.total,
				loading: false,
				hasMore,
				isLoadMore: false,
			};
			return newState;

		case Types.LOAD_MORE:
			let newLimit = limit + 8;
			hasMore = newLimit > total ? false : true;
			newState = {
				...state,
				limit: newLimit,
				isLoadMore: true,
				hasMore,	// do check this `hasMore` before trying to render more
			};
			return newState;

		case Types.SET_KEYWORD:
			let { keyword } = action;
			newState = {
				...state,
				keyword,
				loading: true,
			};
			return newState;

		case Types.SET_CATEGORY:
			let { category } = action;
			newState = {
				...state,
				category,
				loading: true,
			};
			return newState;

		case Types.SET_DEFAULT:
			newState = {
				...state,
				limit: 12,
				keyword: '',
				isLoadMore: false,
				hasMore: true,
			};
			return newState;

		default:	// for dummy action
			return state;
	}
};

export default products;
