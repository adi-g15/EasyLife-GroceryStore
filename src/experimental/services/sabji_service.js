import { FETCH_ALL_PRICES_URL } from "../../constants/BaseURL";

    // returns a promise containing a list of objects
export function FetchPrices() {
    return fetch(
        FETCH_ALL_PRICES_URL,
        {
            headers: {
                "Accept": "application/json"
            }
        }
    ).then(response => response.json())
        .then(data => data.data)
        .catch((err) => {console.error(err); return [];})
}

export function Promiser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: {
                    data: [3,243,242,3,41,56,234,34]
                }
            })
        }, 10000);
    }).then(response => response.json).then(data => data.data)
}

