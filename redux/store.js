import {applyMiddleware, createStore} from "redux";
// import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk";

const store = createStore(
    // rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
)

export default store;
