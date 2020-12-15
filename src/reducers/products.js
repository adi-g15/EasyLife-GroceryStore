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
  let { products, keyword, category } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      hasMore = total <= limit ? false : true;
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
        hasMore,
      };
      return newState;
    case Types.SET_KEYWORD:
      newState = {
        ...state,
        keyword,
        loading: true,
      };
      return newState;
    case Types.SET_CATEGORY:
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
    default:
      return state;
  }
};

export default products;
