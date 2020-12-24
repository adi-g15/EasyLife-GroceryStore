import React from "react";
import ReactDOM from "react-dom";
// import App from "./page/App";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import Experimental from "./Experimental";
import "./styles/global.css";

ReactDOM.render(
    <Provider store={store}>
        <Experimental />
    </Provider>,

    document.getElementById("root")
);
