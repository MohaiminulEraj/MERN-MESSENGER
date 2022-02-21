import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import Cookies from "js-cookie";

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
});

const userDetailsFromCookies = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

const initalState = {
    auth: { userDetails: userDetailsFromCookies },
}

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;