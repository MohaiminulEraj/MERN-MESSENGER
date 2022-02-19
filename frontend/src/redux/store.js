import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducers";

const rootReducer = combineReducers({
    auth: authReducer,
});

const middleware = [thunk];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;