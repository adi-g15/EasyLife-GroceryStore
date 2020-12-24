exports.BASE_API =  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://easylife123.herokuapp.com";

exports.FETCH_ALL_PRICES_URL = `${this.BASE_API}/info/get_all_prices`
