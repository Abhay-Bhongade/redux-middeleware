import { createStore,applyMiddleware } from "redux";
import rootReducer from "../redux/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware  = [thunk]
const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;