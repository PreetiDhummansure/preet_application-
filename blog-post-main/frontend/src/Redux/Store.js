import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import reducer from "./Reducres";
import rootSaga from "./Middlewares";

const middleware = createSagaMiddleware();

const Store = configureStore({ reducer, middleware: () => [middleware] });

middleware.run(rootSaga);

export default Store;
