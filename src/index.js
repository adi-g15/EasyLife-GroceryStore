import React from "react";
import ReactDOM from "react-dom";
import App from "./page/App";
import { Provider } from "react-redux";
import store from "./store";
import Experimental from "./experimental/App";
import "./styles/global.css";

ReactDOM.render(
    <Provider store={store}>
        <Experimental />
    </Provider>,

    document.getElementById("root")
);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,

//     document.getElementById("root")
// );
