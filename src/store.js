import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(
    createStore
);

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;