import { authActions } from '../actions/authActions';

const initalState = {
    userDetails: null,
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case authActions.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails,
            };
        default:
            return state;
    }
};

export default reducer;