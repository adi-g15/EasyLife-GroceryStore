exports.BASE_API =  process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://easylife123.herokuapp.com";

exports.FETCH_ALL_PRICES_URL = `${this.BASE_API}/info/get_all_prices`
exports.FETCH_OFFERS_URL = `${this.BASE_API}/info/get_offers`
exports.SUBMIT_CART_URL = `${this.BASE_API}/cart/submit`
exports.CART_TOTAL_URL = `${this.BASE_API}/cart/getTotal`

exports.CUST_LOGIN_URL = `${this.BASE_API}/cust/login`
exports.CUST_SIGNUP_URL = `${this.BASE_API}/cust/sign_up`
