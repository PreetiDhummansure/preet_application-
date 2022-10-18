import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Store from "./Redux/Store";

const app = ReactDom.createRoot(document.getElementById("mainBlock"));

app.render(
	<Provider store={Store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
